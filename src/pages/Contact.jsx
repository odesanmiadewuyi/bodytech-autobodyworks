import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    human: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission (you can send form data to your server here)
    console.log(formData);
  };

  return (
    <div className="bg-gray-900 text-white py-48 px-6 md:px-24 h-auto border-12 border-white">
      {/* Main Container with two sections: Left (Contact Form) and Right (Address, Contact, Opening Hours) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        
        {/* Left Section (Contact Form) */}
        <div className="border-4 border-white p-6 rounded-lg w-full">
          <h2 className="text-3xl font-bold text-white-600 mb-4">GET IN TOUCH!</h2>

          <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
            <div className="flex flex-col">
              <label className="text-lg text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="p-3 rounded-lg bg-gray-800 text-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-white-500"
                required
              />
            </div>

            <div className="flex flex-col">
  <label className="text-lg text-gray-700 mb-2">Phone</label>
  <input
    type="text"
    name="phone"
    value={formData.phone}
    onChange={handleInputChange}
    placeholder="Your Phone Number"
    className="p-3 rounded-lg bg-white text-gray-800 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
</div>

            <div className="flex flex-col">
              <label className="text-lg text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="p-3 rounded-lg bg-white-800 text-black border-2 border-white-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>

            {/* hCaptcha */}
            <div className="flex items-center gap-2">
              <input type="checkbox" className="border-gray-500" />
              <label className="text-gray-300">I am human</label>
            </div>

           <button
              type="submit"
              className="w-full py-3 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:scale-105 transition duration-300"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Right Section (Address, Contact, Opening Hours) */}
        <div className="flex flex-col gap-12">
          {/* Address */}
          <div className="border-4 border-white p-6 rounded-lg w-full">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-2">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold">ADDRESS</h3>
            </div>
            <p className="text-gray-300">
              The Gables Holywell Road Sheffield S4 8AR <br />
              Bodtech Autobody Works Unit 5
            </p>
          </div>

          {/* Contact */}
          <div className="border-4 border-white p-6 rounded-lg w-full">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-2">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold">CONTACT</h3>
            </div>
            <p className="text-gray-300">
              e: <a href="mailto:hello@bodytechautomotive.co.uk" className="hover:underline">hello@bodytechautomotive.co.uk</a><br />
              t: <a href="tel:01388811611" className="hover:underline">01388 811611</a>
            </p>
          </div>

          {/* Opening Hours */}
          <div className="border-4 border-white p-6 rounded-lg w-full">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-2">
                <FaClock className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold">OPENING HOURS</h3>
            </div>
            <p className="text-gray-300">
              Monday to Friday .............. 8:30 am – 5:30 pm<br />
              Saturday ... 8 am – 12:00 pm | Sunday ... Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
