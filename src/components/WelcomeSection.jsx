import React from "react";
import { Link } from "react-router-dom";
import welcomingPage from "../assets/Welcomepage1.jpg";

const WelcomeSection = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16 mb-16">
      <div className="page-container flex flex-col items-center justify-center gap-10 text-center">
        
        {/* Left Section: Text Content */}
        <div className="text-center p-4">
          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
            WE ARE BODYTECH AUTOBODY WORKS
          </h3>

          {/* Description */}
          <div className="max-w-5xl mx-auto">
            <p className="text-base sm:text-lg mb-4">
              Bodtech Autobody Works is a car body shop based in Sheffield, County South Yorkshire. We are certified, experienced specialists in vehicle body repairs utilising genuine parts and manufacturer-approved repair methods.
            </p>
            <p className="text-base sm:text-lg mb-4">
              Established over 22 years ago, we’re a family-run business priding ourselves on quality repairs and the best in customer service. If your vehicle has been in an accident or damaged, our specialist team assures prompt service to get you back on the road in no time.
            </p>
            <p className="text-base sm:text-lg mb-4">
              We also provide a first-class team of mechanics covering all aspects of vehicle repair and servicing, including MOT's.
            </p>
          </div>

         {/* Spacer to push buttons down visually */}
<div className="h-8 sm:h-10" />

{/* Button Section */}
{/* Extra Tall and Bold Buttons */}
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
  <Link to="/learn-more">
  <button className="w-full sm:w-auto text-lg sm:text-xl rounded-full bg-gradient-to-r from-purple-500 to-pink-600 px-6 sm:px-8 py-4 sm:py-5 font-bold text-teal-900 shadow-lg hover:brightness-110 transition duration-300">
      Learn More
    </button>
  </Link>

  <Link to="/make-appointment">
    <button className="w-full sm:w-auto text-lg sm:text-xl rounded-full bg-gradient-to-r from-purple-500 to-pink-600 px-6 sm:px-8 py-4 sm:py-5 font-bold text-teal-900 shadow-lg hover:brightness-110 transition duration-300">
      Make an Appointment
    </button>
  </Link>
</div>

        </div>

        {/* Right Section: Image */}
        <div className="mt-4 px-4 flex justify-center">
          <img
            src={welcomingPage}
            alt="Car undergoing repairs at Bodytech Autobody Works"
            className="w-full max-w-5xl h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
