import React from "react";
import stoneChipsImg from "../assets/services/stone_chips.jpg"; // Adjust path as needed


const StoneChipsRepair = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-16 px-4 flex flex-col items-center justify-center space-y-10 sm:space-y-12">
    
         {/* Hero Section: Image + Text Side by Side */}
    {/* Hero Section: Image + Text Side by Side */}
    <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10 border-2 border-gray-800 rounded-lg p-6 sm:p-8 bg-blue-100 shadow-lg mb-12 sm:mb-16">
    
      {/* Left: Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cyan-700 leading-tight">
          Repair Guarantee<br />
          You Can Fix Yourself,<br />
          We don't judge, we just fix it.
        </h1>
      </div>
    
      {/* Right: Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={stoneChipsImg}
          alt="Repair Icon"
          className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
        />
      </div>
    
    </div>
    
    {/* Text Block Centered */}
<div className="bg-blue-100 text-gray-800 px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-16 max-w-4xl w-full mx-auto rounded-xl shadow-xl text-center">

<h2 className="text-2xl sm:text-3xl font-extrabold text-blue-600 mb-6 border-b-2 border-blue-200 pb-3">
  Bumper Corner Touch Up: <span className="text-black">Expert Repairs for a Seamless Look</span>
</h2>

<p className="text-base sm:text-lg leading-relaxed mb-6">
  <span className="font-semibold text-gray-900">Scrapes and scuffs on your bumper corners are more than just an eyesore</span> — they can make your car look neglected and reduce its resale value. Even minor damage can worsen over time, exposing the underlying material to further wear or even moisture damage.
</p>

<p className="text-base sm:text-lg leading-relaxed mb-6">
  With <span className="font-semibold text-blue-600">Bumper Corner Touch Up</span>, you get professional repairs that restore your bumper’s appearance while preventing future problems. Our precise fixes blend seamlessly with your car’s original finish, so the damage disappears — <span className="font-medium text-gray-900">no one will even know it was there.</span>
</p>

<p className="text-base sm:text-lg leading-relaxed mb-6">
  In the past, fixing bumper damage meant expensive trips to a body shop or dealing with insurance hassles. <span className="italic text-gray-700">But Bumper Corner Touch Up offers a better way</span>: mobile, on-the-spot repairs that come to you. Whether at home, work, or wherever you park, our specialists repair bumper corners quickly and affordably — <span className="font-semibold">so you can get back on the road with confidence.</span>
</p>

<p className="text-base sm:text-lg leading-relaxed">
  <span className="font-bold text-blue-700">Don’t let bumper damage drag down your car’s look.</span> With <span className="text-blue-600">Bumper Corner Touch Up</span>, a flawless repair is fast, convenient, and hassle-free.
</p>

</div>


        </div>
      );
    };

export default StoneChipsRepair;
