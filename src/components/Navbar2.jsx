import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/BODYTECH_Logo.png";

const Navbar2 = () => {
  return (
    <div className="flex justify-between items-center text-black py-6 px-8 md:32 bg-white drop-shadow-2md">
        <a href="">
            <img src={Logo} alt="" className="w-52 hover:scale-105 transition-all" />
        </a>

        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base"></ul>

    </div>
  );
};

export default Navbar2;