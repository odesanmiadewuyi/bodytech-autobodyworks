import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const base = import.meta.env.BASE_URL;
const initialImages = [
  { src: `${base}gallery/car.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/car1.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/car2.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/car3.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/car4.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/car5.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/car6.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/car7.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/car8.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-1.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-2.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-3.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-4.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-5.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-6.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-7.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-8.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-9.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-10.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-11.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-12.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-13.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-14.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-15.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-16.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-17.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-18.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-19.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-20.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-21.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-22.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-23.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-24.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-25.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-26.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-27.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-28.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-29.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-30.jpeg`, alt: "Car image", desc: "" },
  { src: `${base}gallery/VB6-31.jpeg`, alt: "Car image", desc: "" },
];

export default function CarsSlider({ canUpload = false }) {
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesError, setVehiclesError] = useState("");
  const [apiMode, setApiMode] = useState("vehicles");
  const [isUploadPanelOpen, setIsUploadPanelOpen] = useState(true);
  const [vehicleName, setVehicleName] = useState("");
  const [vehicleDetails, setVehicleDetails] = useState("");
  const [partNamesInput, setPartNamesInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [deletingImageId, setDeletingImageId] = useState("");
  const fileInputRef = useRef(null);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";
  const vehiclesUrl = apiBaseUrl
    ? `${apiBaseUrl}/api/vehicles`
    : "/api/vehicles";
  const galleryUrl = apiBaseUrl ? `${apiBaseUrl}/api/gallery` : "/api/gallery";

  const mapLegacyGalleryToVehicles = (items) => {
    const parts = (Array.isArray(items) ? items : []).map((item, index) => ({
      id: item.id ?? `legacy-part-${index}`,
      name: item.desc || item.alt || `Part ${index + 1}`,
      src: item.src,
      alt: item.alt ?? item.desc ?? "Vehicle part",
      createdAt: item.createdAt ?? new Date().toISOString(),
    }));

    if (parts.length === 0) {
      return [];
    }

    return [
      {
        id: "legacy-gallery-vehicle",
        name: "Uploaded vehicles (legacy mode)",
        details:
          "Backend does not support grouped vehicles yet. Displaying /api/gallery records.",
        parts,
        createdAt: new Date().toISOString(),
      },
    ];
  };

  useEffect(() => {
    const loadVehicles = async () => {
      setVehiclesError("");
      try {
        const response = await fetch(vehiclesUrl);
        if (response.status === 404) {
          setApiMode("legacy");
          const legacyResponse = await fetch(galleryUrl);
          if (!legacyResponse.ok) {
            throw new Error("Failed to load legacy gallery.");
          }
          const legacyData = await legacyResponse.json();
          setVehicles(mapLegacyGalleryToVehicles(legacyData));
          return;
        }
        if (!response.ok) {
          throw new Error("Failed to load vehicles.");
        }
        const data = await response.json();
        setApiMode("vehicles");
        setVehicles(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to load vehicle details.", error);
        setVehiclesError(
          `Could not load vehicles. Is the server running at ${vehiclesUrl} or ${galleryUrl}?`
        );
      }
    };

    loadVehicles();
  }, [vehiclesUrl, galleryUrl]);

  const handleAddVehicle = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    const files = Array.from(fileInputRef.current?.files || []);
    if (files.length === 0) {
      setErrorMessage("Please choose at least one image.");
      return;
    }
    const invalidFile = files.find((file) => !file.type.startsWith("image/"));
    if (invalidFile) {
      setErrorMessage("Only image files are allowed.");
      return;
    }
    if (!vehicleName.trim()) {
      setErrorMessage("Vehicle name is required.");
      return;
    }

    const parsedPartNames = partNamesInput
      .split(/\r?\n|,/)
      .map((name) => name.trim())
      .filter(Boolean);
    const getPartNameForIndex = (index, fallbackName) => {
      if (parsedPartNames.length === 0) {
        return fallbackName;
      }
      return (
        parsedPartNames[index] ||
        parsedPartNames[parsedPartNames.length - 1] ||
        fallbackName
      );
    };

    setIsUploading(true);
    try {
      if (apiMode === "legacy") {
        const uploadedParts = [];
        for (let index = 0; index < files.length; index += 1) {
          const file = files[index];
          const partName = getPartNameForIndex(index, `Part ${index + 1}`);
          const formData = new FormData();
          formData.append("file", file);
          formData.append("description", `${vehicleName.trim()} - ${partName}`);

          const response = await fetch(galleryUrl, {
            method: "POST",
            body: formData,
          });
          const data = await response.json();
          if (!response.ok) {
            throw new Error(data?.error?.message || "Upload failed.");
          }

          uploadedParts.push({
            id: data.id ?? `${Date.now()}-${index}`,
            name: partName,
            src: data.src ?? data.secure_url ?? data.url,
            alt: data.alt ?? partName,
            createdAt: data.createdAt ?? new Date().toISOString(),
          });
        }

        const newVehicle = {
          id: `legacy-${Date.now()}`,
          name: vehicleName.trim(),
          details: vehicleDetails.trim(),
          parts: uploadedParts,
          createdAt: new Date().toISOString(),
        };
        setVehicles((prev) => [newVehicle, ...prev]);
      } else {
        const formData = new FormData();
        formData.append("vehicleName", vehicleName.trim());
        formData.append("vehicleDetails", vehicleDetails.trim());
        if (parsedPartNames.length > 0) {
          formData.append("partNames", JSON.stringify(parsedPartNames));
        }
        files.forEach((file) => {
          formData.append("files", file);
        });

        const response = await fetch(vehiclesUrl, {
          method: "POST",
          body: formData,
        });

        if (response.status === 404) {
          setApiMode("legacy");
          throw new Error(
            "Grouped vehicle endpoint not found. Restart backend, then retry."
          );
        }

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data?.error?.message || "Upload failed.");
        }

        const newVehicle = {
          id: data.id ?? `vehicle-${Date.now()}`,
          name: data.name ?? vehicleName.trim(),
          details: data.details ?? vehicleDetails.trim(),
          parts: Array.isArray(data.parts) ? data.parts : [],
          createdAt: data.createdAt ?? new Date().toISOString(),
        };
        setVehicles((prev) => [newVehicle, ...prev]);
      }

      setErrorMessage("");
      setVehicleName("");
      setVehicleDetails("");
      setPartNamesInput("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Failed to upload vehicle.", error);
      const serverHint =
        error instanceof TypeError
          ? ` Server not reachable at ${vehiclesUrl} or ${galleryUrl}.`
          : "";
      setErrorMessage(
        `${error.message || "Upload failed. Please try again."}${serverHint}`
      );
    } finally {
      setIsUploading(false);
    }
  };

  const removePartFromLocalState = (vehicleId, partId) => {
    setVehicles((prev) =>
      prev
        .map((vehicle) => {
          if (vehicle.id !== vehicleId) {
            return vehicle;
          }
          const parts = Array.isArray(vehicle.parts)
            ? vehicle.parts.filter((part) => part.id !== partId)
            : [];
          return { ...vehicle, parts };
        })
        .filter((vehicle) => Array.isArray(vehicle.parts) && vehicle.parts.length > 0)
    );
  };

  const getErrorFromResponse = async (response, fallbackMessage) => {
    try {
      const data = await response.json();
      return data?.error || fallbackMessage;
    } catch (_error) {
      return fallbackMessage;
    }
  };

  const handleDeleteImage = async (image) => {
    if (!canUpload || !image?.deletable) {
      return;
    }

    const confirmed = window.confirm("Delete this uploaded image?");
    if (!confirmed) {
      return;
    }

    setErrorMessage("");
    setDeletingImageId(image.id);

    try {
      if (apiMode === "legacy") {
        const params = new URLSearchParams({
          id: image.partId,
        });
        const response = await fetch(`${galleryUrl}?${params.toString()}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          const message = await getErrorFromResponse(
            response,
            "Delete failed."
          );
          throw new Error(message);
        }
      } else {
        const params = new URLSearchParams({
          vehicleId: image.vehicleId,
          partId: image.partId,
        });
        const response = await fetch(
          `${vehiclesUrl}/part?${params.toString()}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          const message = await getErrorFromResponse(
            response,
            "Delete failed."
          );
          throw new Error(message);
        }
      }

      removePartFromLocalState(image.vehicleId, image.partId);
    } catch (error) {
      console.error("Failed to delete image.", error);
      setErrorMessage(error?.message || "Delete failed. Please try again.");
    } finally {
      setDeletingImageId("");
    }
  };

  const vehicleImages = vehicles.flatMap((vehicle) => {
    const parts = Array.isArray(vehicle.parts) ? vehicle.parts : [];
    return parts.map((part, index) => ({
      id: part.id ?? `${vehicle.id || vehicle.name}-part-${index}`,
      vehicleId: vehicle.id,
      partId: part.id,
      deletable: true,
      src: part.src,
      alt: part.alt ?? part.name ?? `${vehicle.name} part`,
      desc: [
        vehicle.name,
        part.name ? ` - ${part.name}` : "",
        vehicle.details ? ` (${vehicle.details})` : "",
      ].join(""),
    }));
  });

  const allImages = [...vehicleImages, ...initialImages];

  return (
    <div className="bg-slate-900 py-16 border-4 border-black">
      <div className="page-container flex flex-col items-center gap-12">
        <section className="w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Upload Area
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                Add one vehicle with all its parts
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsUploadPanelOpen((prev) => !prev)}
              aria-expanded={isUploadPanelOpen}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              {isUploadPanelOpen ? "Hide" : "Show"}
            </button>
          </div>

          {isUploadPanelOpen ? (
            <div className="mt-6">
              {apiMode === "legacy" ? (
                <p className="mb-4 text-sm text-amber-600">
                  Legacy mode: server is using `/api/gallery`. Restart backend to
                  enable grouped `/api/vehicles`.
                </p>
              ) : null}
              {canUpload ? (
                <form onSubmit={handleAddVehicle} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-800 font-semibold">
                      Vehicle name
                    </label>
                    <input
                      type="text"
                      value={vehicleName}
                      onChange={(event) => setVehicleName(event.target.value)}
                      placeholder="Example: Toyota Camry 2019"
                      className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-slate-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-800 font-semibold">
                      Vehicle details
                    </label>
                    <textarea
                      value={vehicleDetails}
                      onChange={(event) => setVehicleDetails(event.target.value)}
                      placeholder="Condition, mileage, color, notes..."
                      rows={3}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-slate-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-800 font-semibold">
                      Upload part photos
                    </label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      className="text-slate-700 file:mr-4 file:rounded-md file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-white file:font-semibold"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-800 font-semibold">
                      Part names (optional)
                    </label>
                    <textarea
                      value={partNamesInput}
                      onChange={(event) => setPartNamesInput(event.target.value)}
                      placeholder={"One part name per line.\nExample:\nFront bumper\nLeft headlight\nRear door"}
                      rows={4}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-slate-500 focus:outline-none"
                    />
                    <p className="text-xs text-slate-500">
                      Leave blank to use file names automatically.
                    </p>
                  </div>
                  {errorMessage ? (
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  ) : null}
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-slate-900 text-white font-semibold px-4 py-2 rounded-md hover:bg-slate-800 disabled:opacity-60"
                    disabled={isUploading}
                  >
                    {isUploading ? "Uploading..." : "Add vehicle"}
                  </button>
                </form>
              ) : (
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  Upload is locked. Use the Upload button in the navbar to sign in.
                </div>
              )}
              {vehiclesError ? (
                <p className="mt-3 text-sm text-red-500">{vehiclesError}</p>
              ) : null}
            </div>
          ) : (
            <p className="mt-4 text-sm text-slate-500">
              Upload form is hidden. Click `Show` to open it again.
            </p>
          )}
        </section>

        <section className="w-full max-w-4xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
            className="w-full"
          >
            {allImages.map((image, index) => (
              <SwiperSlide
                key={image.id ?? `${image.src}-${index}`}
                className="flex justify-center"
              >
                <div className="relative bg-slate-800 p-4 sm:p-6 rounded-lg flex flex-col justify-center items-center h-full w-full">
                  {canUpload && image.deletable ? (
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleDeleteImage(image);
                      }}
                      className="absolute right-3 top-3 rounded-md bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-500 disabled:opacity-60"
                      disabled={deletingImageId === image.id}
                    >
                      {deletingImageId === image.id ? "Deleting..." : "Delete"}
                    </button>
                  ) : null}
                  <img
                    src={image.src}
                    alt={image.alt ?? "Car image"}
                    className="w-full h-auto max-h-[520px] object-contain rounded-lg"
                    loading="lazy"
                  />
                  {image.desc ? (
                    <p className="text-white text-sm mt-3 text-center">
                      {image.desc}
                    </p>
                  ) : null}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
}
