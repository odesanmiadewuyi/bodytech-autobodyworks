// components/ImageGallerySection.jsx
import React from "react";

// Import your images (update paths accordingly)
import img1 from "../assets/bodywork.jpg";
import img2 from "../assets/bodywork1.jpg";
import img3 from "../assets/bodywork2.jpg";
import img4 from "../assets/bodywork3.jpg";
import img5 from "../assets/bodywork4.jpg";
import img6 from "../assets/bodywork5.jpg";
import img7 from "../assets/bodywork6.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const ImageGallerySection = () => {
  return (
    <section className="bg-white py-16 px-6 border-t-4 border-purple-700" id="gallery">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-purple-700">
          Our Cake Designs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md border-2 border-purple-100 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Cake ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySection;
