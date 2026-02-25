import React from "react";
import ColourBlendingImg from "../assets/services/colour_blending.jpg"; // Adjust path as needed


const ColourBlending = () => {
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
          src={ColourBlendingImg}
          alt="Repair Icon"
          className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
        />
      </div>
    
    </div>
    
    
    
          {/* Text Block Centered */}
          <div className="bg-blue-100 text-gray-800 px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-16 max-w-4xl w-full mx-auto rounded-xl shadow-xl text-center">
          <span className="text-blue-600 font-black">Repair of Scratches:</span> <span className="text-black font-black">Restore Your Car’s Perfection</span>
    
    
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              <span className="font-semibold text-gray-900">Every scratch tells a story</span> – but not one you want your car to show. Whether it’s a careless shopping cart, a stray key, or an overgrown branch, scratches instantly make your vehicle look older and less cared for. Worse still, they expose your paintwork to corrosion and further damage over time.
            </p>
    
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              With our <span className="font-semibold text-blue-600">Repair of Scratches</span> service, we erase these imperfections completely. Our experts don’t just cover up scratches – we carefully fill, level, and blend them to perfectly match your original paintwork. <span className="font-medium text-gray-900">The result? Damage that disappears and protection that lasts.</span>
            </p>
    
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              Most car owners live with scratches because traditional repairs mean expensive bodyshop bills or disappointing DIY results. <span className="italic text-gray-700">Our mobile scratch repair service changes everything</span> – we come to your home or workplace with all the professional tools and expertise needed to make those scratches vanish. <span className="font-semibold">No hassle, no downtime, just flawless results.</span>
            </p>
    
            <p className="text-base sm:text-lg leading-relaxed">
              <span className="font-bold text-blue-700">Your car deserves to look its best.</span> With our <span className="text-blue-600">Repair of Scratches</span> service, we restore its showroom shine and protect its value – one perfect repair at a time.
            </p>
          </div>
        </div>
      );
    };

export default ColourBlending;
