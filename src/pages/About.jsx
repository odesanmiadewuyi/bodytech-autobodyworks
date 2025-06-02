import React from "react";
import bodytechLogo from "../assets/BODYTECH_Logo.png"; // Direct import of logo
import { FaRegBuilding, FaUsers, FaHandsHelping } from "react-icons/fa"; // For icons

const About = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* About Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-8">
          About Bodytech Autobody Works
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          At Bodytech Autobody Works, we are dedicated to providing high-quality automotive services
          with a focus on craftsmanship, innovation, and customer satisfaction. Our experienced team
          offers a wide range of services from mechanical repairs to full bodywork and resprays.
        </p>
        
        {/* Company Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-6 border-4 border-white rounded-lg">
            <div className="flex items-center justify-center gap-4 mb-4">
              <FaRegBuilding className="text-4xl text-purple-500" />
              <h2 className="text-2xl font-semibold">Our Company</h2>
            </div>
            <p className="text-gray-300">
              Bodytech Autobody Works is based in Sheffield, UK. We specialize in automotive repairs,
              resprays, alloy wheels, and more. Our mission is to restore your car to its original
              condition while providing the best customer experience.
            </p>
          </div>

          <div className="p-6 border-4 border-white rounded-lg">
            <div className="flex items-center justify-center gap-4 mb-4">
              <FaUsers className="text-4xl text-purple-500" />
              <h2 className="text-2xl font-semibold">Our Team</h2>
            </div>
            <p className="text-gray-300">
              Our team consists of experienced professionals who are passionate about cars. Each team
              member brings unique skills to the table, and together, we deliver excellence in every project.
            </p>
          </div>

          <div className="p-6 border-4 border-white rounded-lg">
            <div className="flex items-center justify-center gap-4 mb-4">
              <FaHandsHelping className="text-4xl text-purple-500" />
              <h2 className="text-2xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-gray-300">
              We are committed to providing high-quality, cost-effective solutions for your car’s
              needs, with a focus on customer satisfaction, innovation, and long-term results. Our
              mission is to make automotive repair accessible, reliable, and affordable.
            </p>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="max-w-7xl mx-auto text-center mt-16">
        <h2 className="text-3xl font-semibold text-white mb-6">Our Logo</h2>
        <img
          src={bodytechLogo}
          alt="Bodytech Logo"
          className="w-40 h-auto mx-auto"
        />
        <p className="text-lg text-gray-300 mt-4">
          Our logo represents strength, reliability, and the precision we bring to our work. It is a
          reflection of our commitment to providing the highest quality of automotive care.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto text-center mt-16">
        <h2 className="text-3xl font-semibold text-white mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-6">
          Have any questions or need assistance? Reach out to us and we’ll be happy to help!
        </p>
        <a
          href="/contact"
          className="text-xl text-purple-500 hover:text-purple-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
