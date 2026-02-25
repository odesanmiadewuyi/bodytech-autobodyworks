// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/heroImage.jpeg"; // Add an image for branding

const Home = () => {
  return (
    <div className="bg-blue-100 flex flex-col items-center text-center py-12 sm:py-16">
      <div className="page-container w-full flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-600">
          Expert in Rebranding Your Car
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mt-4">
          Quality Work | Free Quotes
        </p>
        <img
          src={heroImage}
          alt="Car Painting"
          className="w-full max-w-5xl mx-auto mt-6 rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
