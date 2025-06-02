import React from "react";
import bodytechLogo from "../assets/BODYTECH_Logo.png"; // Direct import of logo

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-gray-300 px-8 py-12 text-sm">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Company Info */}
        <div>
          <img
            src={bodytechLogo}
            alt="Bodytech Logo"
            className="h-[50px] w-[100px] object-contain mb-2"
          />
          <h3 className="text-white text-lg font-semibold">Bodtech Autobody Works.</h3>
          <p className="mt-2 leading-relaxed">
            The Gables, <br />
            Holywell Road, <br />
            Sheffield S4 8AR, <br />
            Bodtech Autobody <br />
            Works Unit 5
          </p>
        </div>

       
      </div>

      {/* Divider Above Bottom Bar */}
      <div className="w-full h-px bg-gray-700 mt-12 mb-6"></div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
        <p>
          © 2025 Bodtech Autobody Works
        </p>

        {/* Contact Info */}
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-1">
            <span className="text-white">📞</span>
            <span>07735705723</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-white">✉️</span>
            <a
              href="mailto:bod_11@yahoo.com"
              className="hover:underline text-gray-300"
            >
              bod_11@yahoo.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
