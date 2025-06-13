import React from "react";

const CallSection = () => {
  return (
    <section className="bg-black text-white py-8 px-6 mt-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Call to Action Text */}
        <div className="text-lg flex justify-center font-extrabold text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        🚗 BUYING A SECOND-HAND VEHICLE?
        Get a FULL HEALTH CHECK from the experts!
        ➕ Need quality car parts? We’ve got you covered with top-grade spares at unbeatable prices!
        📞 CALL US NOW and drive with confidence!
        </div>

        {/* Right Section: Phone Number with Icon */}
        <div className="flex items-center space-x-4">
          <span className="text-lg text-white items-center">📞</span>
          <a href="tel:+441388811611" className="text-4xl font-extrabold text-white">
          07735705723
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallSection;
