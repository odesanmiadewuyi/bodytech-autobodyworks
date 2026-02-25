import React from "react";
import CarPolishingImg from "../assets/services/car_polishing.jpg";

const CarPolishing = () => {
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
              src={CarPolishingImg}
              alt="Repair Icon"
              className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        
        </div>
        
        
        
             {/* Text Block Centered */}
<div className="bg-blue-100 text-gray-800 px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-16 max-w-4xl w-full mx-auto rounded-xl shadow-xl text-center">

<h2 className="text-2xl sm:text-3xl font-extrabold text-blue-600 mb-6 border-b-2 border-blue-200 pb-3">
  Car Polishing: <span className="text-black">Restore Your Car’s Showroom Shine</span>
</h2>

<p className="text-base sm:text-lg leading-relaxed mb-6">
  <span className="font-semibold text-gray-900">Over time, your car’s paint loses its luster</span> — faded by sunlight, dulled by contaminants, and covered in fine scratches that steal its brilliance. A lackluster finish doesn’t just look tired; it can make even a well-maintained car seem older than it is.
</p>

<p className="text-base sm:text-lg leading-relaxed mb-6">
  With <span className="font-semibold text-blue-600">Car Polishing</span>, we bring back that deep, glossy shine — eliminating swirl marks, oxidation, and surface imperfections to reveal your paint’s true potential. Our expert polishing doesn’t just enhance your car’s appearance; <span className="font-medium text-gray-900">it adds a protective layer that helps guard against future wear, keeping it looking newer for longer.</span>
</p>

<p className="text-base sm:text-lg leading-relaxed mb-6">
  Traditionally, achieving a professional-grade polish meant expensive detailing services or time-consuming DIY efforts with mixed results. <span className="italic text-gray-700">But Car Polishing offers a smarter solution</span>: precision polishing performed at your doorstep. Whether at home or work, our specialists use premium compounds and techniques to revive your paint’s brilliance — <span className="font-semibold">without the hassle of traditional methods.</span>
</p>

<p className="text-base sm:text-lg leading-relaxed">
  <span className="font-bold text-blue-700">Don’t settle for a dull, faded finish.</span> With <span className="text-blue-600">Car Polishing</span>, your car can look like it just rolled off the showroom floor — sleek, radiant, and turning heads wherever you go.
</p>

</div>

            </div>
          );
        };

export default CarPolishing;
