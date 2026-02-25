import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import path from "path";
import fs from "fs/promises";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const GALLERY_FILE = path.join(process.cwd(), "server", "gallery.json");
const VEHICLES_FILE = path.join(process.cwd(), "server", "vehicles.json");
const CLOUDINARY_FOLDER = "bodtech-cars";

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

const rawOrigins =
  process.env.CORS_ORIGIN || "http://localhost:5173,http://localhost:5174";
const allowedOrigins = rawOrigins.split(",").map((origin) => origin.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        callback(null, true);
        return;
      }
      if (allowedOrigins.includes(origin) || allowedOrigins.includes("*")) {
        callback(null, true);
        return;
      }
      callback(new Error("Not allowed by CORS"));
    },
  })
);
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
});

const readJsonArray = async (filePath) => {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    return [];
  }
};

const writeJsonArray = async (filePath, items) => {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(items, null, 2));
};

const readGallery = async () => {
  return readJsonArray(GALLERY_FILE);
};

const writeGallery = async (items) => {
  await writeJsonArray(GALLERY_FILE, items);
};

const readVehicles = async () => {
  return readJsonArray(VEHICLES_FILE);
};

const writeVehicles = async (items) => {
  await writeJsonArray(VEHICLES_FILE, items);
};

const uploadBufferToCloudinary = (buffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      }
    );
    stream.end(buffer);
  });
};

const deleteFromCloudinary = async (publicId) => {
  if (!publicId || !cloudName || !apiKey || !apiSecret) {
    return;
  }
  try {
    await cloudinary.uploader.destroy(publicId, { resource_type: "image" });
  } catch (error) {
    console.error("Cloudinary delete failed.", error);
  }
};

const slugify = (value) => {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

app.get("/", (_req, res) => {
  res.json({
    name: "Bodytech gallery API",
    status: "ok",
    frontend: "http://localhost:5173",
    endpoints: {
      getGallery: "GET /api/gallery",
      uploadImage: "POST /api/gallery",
      deleteImage: "DELETE /api/gallery",
      getVehicles: "GET /api/vehicles",
      uploadVehicle: "POST /api/vehicles",
      deleteVehiclePart: "DELETE /api/vehicles/part",
      health: "GET /health",
    },
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/gallery", async (_req, res) => {
  const items = await readGallery();
  res.json(items);
});

app.post("/api/gallery", upload.single("file"), async (req, res) => {
  if (!cloudName || !apiKey || !apiSecret) {
    return res.status(500).json({ error: "Cloudinary is not configured." });
  }

  if (!req.file) {
    return res.status(400).json({ error: "Missing file." });
  }

  if (!req.file.mimetype.startsWith("image/")) {
    return res.status(400).json({ error: "Only image files are allowed." });
  }

  const description = (req.body.description || "").toString();

  try {
    const uploadResult = await uploadBufferToCloudinary(
      req.file.buffer,
      CLOUDINARY_FOLDER
    );

    const item = {
      id: uploadResult.public_id,
      src: uploadResult.secure_url,
      alt: description ? description : "Uploaded car image",
      desc: description,
      createdAt: new Date().toISOString(),
    };

    const items = await readGallery();
    items.unshift(item);
    await writeGallery(items);

    return res.json(item);
  } catch (error) {
    console.error("Upload failed.", error);
    return res.status(500).json({ error: "Upload failed." });
  }
});

app.delete("/api/gallery", async (req, res) => {
  const id = (req.body?.id || req.query?.id || "").toString().trim();
  if (!id) {
    return res.status(400).json({ error: "Image id is required." });
  }

  const items = await readGallery();
  const itemIndex = items.findIndex((item) => item.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({ error: "Image not found." });
  }

  const [removed] = items.splice(itemIndex, 1);
  await writeGallery(items);
  await deleteFromCloudinary(removed?.id);
  return res.json({ success: true, id });
});

app.get("/api/vehicles", async (_req, res) => {
  const vehicles = await readVehicles();
  res.json(vehicles);
});

app.post("/api/vehicles", upload.array("files", 20), async (req, res) => {
  if (!cloudName || !apiKey || !apiSecret) {
    return res.status(500).json({ error: "Cloudinary is not configured." });
  }

  const files = req.files || [];
  if (!Array.isArray(files) || files.length === 0) {
    return res
      .status(400)
      .json({ error: "At least one image is required for a vehicle." });
  }

  const invalidFile = files.find((file) => !file.mimetype.startsWith("image/"));
  if (invalidFile) {
    return res.status(400).json({ error: "Only image files are allowed." });
  }

  const vehicleName = (req.body.vehicleName || "").toString().trim();
  const vehicleDetails = (req.body.vehicleDetails || "").toString().trim();

  if (!vehicleName) {
    return res.status(400).json({ error: "Vehicle name is required." });
  }

  let partNames = [];
  if (req.body.partNames) {
    try {
      const parsed = JSON.parse(req.body.partNames);
      if (!Array.isArray(parsed)) {
        return res.status(400).json({ error: "partNames must be an array." });
      }
      partNames = parsed.map((name) => (name || "").toString().trim());
    } catch (error) {
      return res.status(400).json({ error: "partNames must be valid JSON." });
    }
  }

  try {
    const vehicleSlug = slugify(vehicleName) || "vehicle";
    const folder = `${CLOUDINARY_FOLDER}/${vehicleSlug}-${Date.now()}`;

    const parts = await Promise.all(
      files.map(async (file, index) => {
        const uploadResult = await uploadBufferToCloudinary(file.buffer, folder);
        const filenameBase = path.parse(file.originalname || "").name || "";
        const fallbackPartName = filenameBase || `Part ${index + 1}`;
        const partName =
          partNames[index] ||
          partNames[partNames.length - 1] ||
          fallbackPartName;

        return {
          id: uploadResult.public_id,
          name: partName,
          src: uploadResult.secure_url,
          alt: partName,
          createdAt: new Date().toISOString(),
        };
      })
    );

    const vehicle = {
      id: `${vehicleSlug}-${Date.now()}`,
      name: vehicleName,
      details: vehicleDetails,
      parts,
      createdAt: new Date().toISOString(),
    };

    const vehicles = await readVehicles();
    vehicles.unshift(vehicle);
    await writeVehicles(vehicles);

    return res.json(vehicle);
  } catch (error) {
    console.error("Vehicle upload failed.", error);
    return res.status(500).json({ error: "Vehicle upload failed." });
  }
});

app.delete("/api/vehicles/part", async (req, res) => {
  const vehicleId = (req.body?.vehicleId || req.query?.vehicleId || "")
    .toString()
    .trim();
  const partId = (req.body?.partId || req.query?.partId || "")
    .toString()
    .trim();

  if (!vehicleId || !partId) {
    return res
      .status(400)
      .json({ error: "vehicleId and partId are required." });
  }

  const vehicles = await readVehicles();
  const vehicleIndex = vehicles.findIndex((vehicle) => vehicle.id === vehicleId);
  if (vehicleIndex === -1) {
    return res.status(404).json({ error: "Vehicle not found." });
  }

  const parts = Array.isArray(vehicles[vehicleIndex].parts)
    ? vehicles[vehicleIndex].parts
    : [];
  const partIndex = parts.findIndex((part) => part.id === partId);
  if (partIndex === -1) {
    return res.status(404).json({ error: "Part not found." });
  }

  const [removedPart] = parts.splice(partIndex, 1);
  vehicles[vehicleIndex].parts = parts;

  let vehicleRemoved = false;
  if (parts.length === 0) {
    vehicles.splice(vehicleIndex, 1);
    vehicleRemoved = true;
  }

  await writeVehicles(vehicles);
  await deleteFromCloudinary(removedPart?.id);

  return res.json({
    success: true,
    vehicleId,
    partId,
    vehicleRemoved,
  });
});

app.listen(PORT, () => {
  console.log(`Gallery server running on http://localhost:${PORT}`);
});
