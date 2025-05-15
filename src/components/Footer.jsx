import React from "react";
import bodytechLogo from "../assets/BODYTECH_Logo.png"; // Direct import of logo

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-12 text-sm">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Company Info */}
        <div>
          <img
            src={bodytechLogo}
            alt="Bodytech Logo"
            className="h-[50px] w-[100px] object-contain mb-2"
          />
          <h3 className="text-white text-lg font-semibold">BODYTECH NE Ltd.</h3>
          <p className="mt-2 leading-relaxed">
            Compound 18, <br />
            Tudhoe Ind Est, <br />
            Spennymoor, <br />
            Co Durham <br />
            DL16 6TL
          </p>
          <p className="italic text-sm mt-4 text-gray-400">
            Registered in England & Wales No. 15976401 | Vat No. 184797938
          </p>
        </div>

       
      </div>

      {/* Divider Above Bottom Bar */}
      <div className="w-full h-px bg-gray-700 mt-12 mb-6"></div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
        <p>
          © 2025 Bodytech NE Ltd – website by{" "}
          <a
            href="https://www.dxps.com"
            className="hover:underline text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.dxps.com
          </a>
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
              href="mailto:info@bodytechautomotive.co.uk"
              className="hover:underline text-gray-300"
            >
              info@bodytechautomotive.co.uk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
