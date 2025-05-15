import React from "react";
import { Link } from "react-router-dom";
import welcomingPage from "../assets/Welcomepage1.jpg";

const WelcomeSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 mb-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between mt-20">
        
        {/* Left Section: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left p-4">
          {/* Heading */}
          <h3 className="text-3xl font-semibold mb-6">
            WE ARE BODYTECH AUTOBODY WORKS
          </h3>

          {/* Description */}
          <div>
            <p className="text-lg mb-4">
              Bodytech Autobody Works is a car body shop based in Sheffield, County South Yorkshire. We are certified, experienced specialists in vehicle body repairs utilising genuine parts and manufacturer-approved repair methods.
            </p>
            <p className="text-lg mb-4">
              Established over 22 years ago, we’re a family-run business priding ourselves on quality repairs and the best in customer service. If your vehicle has been in an accident or damaged, our specialist team assures prompt service to get you back on the road in no time.
            </p>
            <p className="text-lg mb-4">
              We also provide a first-class team of mechanics covering all aspects of vehicle repair and servicing, including MOT's.
            </p>
          </div>

         {/* Spacer to push buttons down visually */}
<div className="h-12 sm:h-12 lg:h-12" />

{/* Button Section */}
{/* Extra Tall and Bold Buttons */}
<div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6">
  <Link to="/learn-more">
  <button className="w-64 text-2xl rounded-full bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-10 font-bold text-teal-900 shadow-lg hover:brightness-110 transition duration-300">
      Learn More
    </button>
  </Link>

  <Link to="/make-appointment">
    <button className="w-64 text-2xl rounded-full bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-10 font-bold text-teal-900 shadow-lg hover:brightness-110 transition duration-300">
      Make an Appointment
    </button>
  </Link>
</div>

        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 px-4">
          <img
            src={welcomingPage}
            alt="Car undergoing repairs at Bodytech Autobody Works"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
