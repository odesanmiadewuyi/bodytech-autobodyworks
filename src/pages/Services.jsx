import React from "react";
import servicingImage from "../assets/muscular-car-service-worker-repairing-vehicle.jpg"; // Update with your image path
import newImage from "../assets/muscular-car-service-worker-repairing-vehicle.jpg"; // Path to the new image
import glowingBanner from "../assets/BODYTECH_Logo.png"; // Path to glowing banner image

const Services = () => {
  return (
    <div>
      {/* Existing Banner Section */}
      <div className="relative w-full h-[200px] md:h-[400px] overflow-hidden">
        <img
          src={servicingImage}
          alt="Servicing Banner"
          className="w-full h-[300px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-lg md:text-2xl font-bold">SERVICING</h2>
          <p className="text-purple-300 text-xs md:text-sm font-medium mt-1">
            Interim, Full or Major
          </p>
        </div>
      </div>

      {/* New Section: Efficient & Effective Service */}
      <div className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              EFFICIENT & EFFECTIVE SERVICE
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6"></div>
            <p className="text-lg mb-6 text-gray-300">
              Our committed team of highly qualified technicians will provide you and your car with top notch service.
            </p>
            <p className="text-lg text-gray-300">
              Our mechanics work in well-equipped modern facilities with the latest in motor trade technology. We work in a timely manner to provide efficient and effective service and aim to provide the best in customer service.
            </p>
          </div>

          {/* Right: Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={newImage}
              alt="Efficient Service"
              className="rounded-lg w-full h-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Glowing Banner Section */}
      <div className="relative w-full h-[400px] bg-gray-900 overflow-hidden flex items-center justify-center">
        <img
          src={glowingBanner}
          alt="Bodytech Autobody Works"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-yellow-400 text-5xl md:text-7xl font-extrabold drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]">
            BODYTECH
          </h1>
          <p className="text-yellow-300 text-xl md:text-3xl font-semibold mt-2 drop-shadow-[0_0_10px_rgba(255,215,0,0.6)] tracking-wide">
            AUTOBODY WORKS
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black text-white h-[200px] px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-6 h-full">
          {/* Left Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-relaxed">
              LET'S GET YOU<br />SORTED.
            </h2>
            <p className="text-xl mt-8 text-purple-400 font-semibold">
              Contact us now to book your repair
            </p>
          </div>

          {/* Phone Number Section */}
          <div className="flex items-center gap-4 text-4xl font-bold text-white mt-10 md:mt-0">
            <span className="text-purple-500 text-5xl">📱</span>07735705723
          </div>

          {/* Message Button */}
          <div className="mt-10 md:mt-0 flex justify-center">
            <button className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-extrabold text-5xl w-[390px] h-[75px] rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
              SEND US A MESSAGE 💬
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
