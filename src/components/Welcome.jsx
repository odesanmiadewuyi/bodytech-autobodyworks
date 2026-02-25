import React from "react";

const Welcome = () => {
  return (
    <section className="bg-black text-white py-6 mb-16 border-8">
      <div className="page-container flex justify-center items-center p-4">
        {/* Left Section: Call to Action Text */}
        <div className="text-3xl sm:text-4xl font-extrabold text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Welcome!
        </div>
        
      </div>
    </section>
  );
};

export default Welcome;
