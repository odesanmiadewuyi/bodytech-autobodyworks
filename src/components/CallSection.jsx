import React from "react";

const CallSection = () => {
  return (
    <section className="bg-black text-white py-8 mt-10">
      <div className="page-container flex flex-col justify-center items-center gap-6 text-center">
        {/* Left Section: Call to Action Text */}
        <div className="text-sm sm:text-base lg:text-lg font-extrabold text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 max-w-3xl">
          <p>🚗 BUYING A SECOND-HAND VEHICLE? Get a FULL HEALTH CHECK from the experts!</p>
          <p className="mt-2">➕ Need quality car parts? We’ve got you covered with top-grade spares at unbeatable prices!</p>
          <p className="mt-2">📞 CALL US NOW and drive with confidence!</p>
        </div>

        {/* Right Section: Phone Number with Icon */}
        <div className="flex items-center space-x-4">
          <span className="text-lg text-white items-center">📞</span>
          <a href="tel:+441388811611" className="text-2xl sm:text-3xl font-extrabold text-white">
          07735705723
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallSection;
