import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen">
  <div className="w-full h-[50vh] bg-black overflow-hidden">
  <img
    src="/landing-image.PNG"
    alt="Regency Cakes"
    className="w-full h-[200px] object-cover object-left"
  />
</div>

      {/* Bottom Section - Centered Text (50% Height) */}
      <div className="flex flex-col justify-center items-center bg-purple-700 text-white px-6 h-[50vh] flex-none">
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">🎂 Welcome to Regency Cakes</h1>
          <p className="mt-2 text-base sm:text-lg font-semibold">
            Crafted to Sweeten Life’s Most Memorable Moments
          </p>
          <p className="mt-2 leading-relaxed text-sm sm:text-base">
            Your journey to a perfect cake begins here. At Regency Cakes, we blend
            artisanal craftsmanship with timeless tradition to create stunning, handcrafted masterpieces for weddings, celebrations, and every occasion in between.
          </p>

          {/* Call to Action Button */}
          <button className="mt-4 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-full text-purple-900 font-medium text-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
