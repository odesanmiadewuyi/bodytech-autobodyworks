// components/ServicesSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import invisible_touchup from "../assets/services/invisible_touchup.jpg";
import bumper_corner from "../assets/services/bumper_corner.jpeg";
import car_polishing from "../assets/services/car_polishing.jpg";
import colour_blending from "../assets/services/colour_blending.jpg";
import stone_chips from "../assets/services/stone_chips.jpg";
import repair_scratches from "../assets/services/repair_scratches.jpg";

export default function ServicesSection() {
  const services = [
    {
      title: "Invisible Touchup",
      badge: "NOW OFFICIAL",
      image: invisible_touchup,
      slug: "invisible-touchup",
    },
    {
      title: "Bumper Corner Touch Up",
      image: bumper_corner,
      slug: "bumper-corner-touch-up",
    },
    {
      title: "Car Polishing",
      image: car_polishing,
      slug: "car-polishing",
    },
    {
      title: "Colour Blending",
      image: colour_blending,
      slug: "colour-blending",
    },
    {
      title: "Stone Chips Repair",
      image: stone_chips,
      slug: "stone-chips-repair",
    },
    {
      title: "Repair of Scratches",
      badge: "NEW OFFICIAL",
      image: repair_scratches,
      slug: "repair-of-scratches",

    }
  ];
  

  return (
    <section className="py-16 sm:py-20 bg-blue-100" id="services">
      <div className="page-container flex flex-col items-center text-center">
        <div className="flex flex-col items-center justify-center text-2xl sm:text-3xl font-extrabold text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 border-b-2 border-black/60 pb-4">
          WHAT WE DO:
        </div>
        <div className="flex flex-col items-center justify-center mt-8 sm:mt-10 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-gray-800 font-bold">
              We work with both private vehicle owners and leaseholders claiming through insurance to carry out a wide range of bodywork services.
            </p>
          </div>
          <p className="text-base sm:text-lg text-gray-800 font-bold mt-4">
            Our services include:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 justify-items-center max-w-5xl mx-auto w-full">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              slug={service.slug}
              badge={service.badge}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ title, slug, badge, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full w-full max-w-xs flex flex-col items-center text-center justify-center">
    
    {/* Image with consistent spacing */}
    <img
      src={image}
      alt={title}
      className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mb-6"
    />

    {/* Title with good spacing from image */}
    <h3 className="text-base sm:text-lg font-bold mb-3 mt-4 text-gray-900">{title}</h3>

    {/* Optional badge */}
    {badge && (
      <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 mt-2">
        {badge}
      </span>
    )}

    {/* Button with good spacing */}
    
      <Link to={`/service/${slug}`}
      className="mt-4 bg-blue-200 hover:bg-blue-300 text-blue-900 font-extrabold text-base sm:text-lg px-6 py-3 rounded-md text-center transition duration-300 shadow-lg"
    >
      View Details
    </Link>
  </div>
);

