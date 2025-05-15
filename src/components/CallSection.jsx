import React from "react";

const CallSection = () => {
  return (
    <section className="bg-black text-white py-8 px-6 mt-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Call to Action Text */}
        <div className="text-2xl flex justify-center font-extrabold text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          BUYING A SECOND HAND VEHICLE? CALL US NOW FOR A HEALTH CHECK!
        </div>

        {/* Right Section: Phone Number with Icon */}
        <div className="flex items-center space-x-4">
          <span className="text-2xl text-white items-center">📞</span>
          <a href="tel:+441388811611" className="text-4xl font-extrabold text-white">
          07735705723
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallSection;
