// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/heroImage.jpeg"; // Add an image for branding

const Home = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center text-center px-4">
      <h2 className="text-4xl font-bold text-yellow-600">Expert in Rebranding Your Car</h2>
      <p className="text-lg text-gray-700 mt-4">Quality Work | Free Quotes</p>
      <img src={heroImage} alt="Car Painting" className="w-3/3 mt-6 rounded-lg shadow-md" />
      
    </div>
  );
};

export default Home;
