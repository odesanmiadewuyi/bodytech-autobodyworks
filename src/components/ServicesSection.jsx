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
    <section className="p-10 py-20 bg-blue-100 mx-32 mb-36 border-8 min-h-[120vh]" id="services">
 {/* Increased section padding */}
  <div className="container mx-auto px-4">
  <div className="flex flex-col items-center justify-center text-4xl min-h-[120px] text-shadow-lg font-extrabold text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 border-b-2 border-black border-opacity-75">
          WHAT WE DO:
        </div>
  <div className="flex flex-col items-center justify-center min-h-[150px] mt-20"> {/* Centering container */}
  <div className="max-w-2xl mx-auto text-center "> {/* Pushed down */}
    <p className="text-lg md:text-xl text-black-600 font-bold mt-40">
      We work with both private vehicle owners and leaseholders claiming through insurance to carry out a wide range of bodywork services.
    </p>
  </div>
  <p className="text-lg md:text-xl text-black-600 font-bold">
    Our services include:
  </p>
</div>
 
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-20 mt-64 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40 2xl:px-60 mx-64">
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
  <div className="bg-white mt-28 mb-28 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col items-center text-center justify-center">
    
    {/* Image with consistent spacing */}
    <img
      src={image}
      alt={title}
      className="w-64 h-64 rounded-full object-cover mb-8"
    />

    {/* Title with good spacing from image */}
    <h3 className="text-lg font-bold mb-4 mt-6 text-gray-900">{title}</h3>

    {/* Optional badge */}
    {badge && (
      <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 mt-2">
        {badge}
      </span>
    )}

    {/* Button with good spacing */}
    
      <Link to={`/service/${slug}`}
      className="mt-6 bg-blue-200 hover:bg-blue-300 text-blue-900 font-extrabold text-lg px-10 py-4 rounded-md text-center transition duration-300 shadow-lg"
    >
      View Details
    </Link>
  </div>
);

