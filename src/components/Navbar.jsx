import React from "react";
import { Link } from "react-router-dom";
//import Logo from "../assets/BODYTECH_Logo.png";
import Logo from "../assets/BODYTECH_Logo_new2.png";
const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-evenly px-8">

        {/* Logo Section */}
        <div className="w-40">
          <Link to="/">
            <img src={Logo} alt="Bodytech Logo" className="w-full object-contain" />
          </Link>
        </div>

        <div className="hidden xl:flex items-center justify-evenly gap-12 font-semibold text-base">
  <Link to="/" className="p-3 hover:text-blue-400 rounded-md transition-all cursor-pointer">Home</Link>
  <Link to="/about" className="p-3 hover:text-blue-400 rounded-md transition-all cursor-pointer">About</Link>
  <Link to="/services" className="p-3 hover:text-blue-400 rounded-md transition-all cursor-pointer">Services</Link>
  <Link to="/contact" className="p-3 hover:text-blue-400 rounded-md transition-all cursor-pointer">Contact</Link>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
