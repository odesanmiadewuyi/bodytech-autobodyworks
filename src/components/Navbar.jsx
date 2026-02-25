import React, { useState } from "react";
import { Link } from "react-router-dom";
//import Logo from "../assets/BODYTECH_Logo.png";
import Logo from "../assets/BODYTECH_Logo_new2.png";
const Navbar = ({ isUploaderAuthed, onAuthSuccess, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUploadLogin, setShowUploadLogin] = useState(false);
  const [uploadUser, setUploadUser] = useState("");
  const [uploadPass, setUploadPass] = useState("");
  const [uploadError, setUploadError] = useState("");

  const handleUploadLogin = (event) => {
    event.preventDefault();
    setUploadError("");

    const expectedUser = import.meta.env.VITE_UPLOAD_USER;
    const expectedPass = import.meta.env.VITE_UPLOAD_PASS;

    if (!expectedUser || !expectedPass) {
      setUploadError("Upload credentials are not configured.");
      return;
    }

    if (uploadUser === expectedUser && uploadPass === expectedPass) {
      onAuthSuccess?.();
      setShowUploadLogin(false);
      setUploadUser("");
      setUploadPass("");
      return;
    }

    setUploadError("Invalid username or password.");
  };

  const uploadPanel = (
    <div className="w-full rounded-lg border border-white/10 bg-black p-4 shadow-xl">
      {isUploaderAuthed ? (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/80">Upload access is enabled.</p>
          <button
            type="button"
            onClick={() => {
              onLogout?.();
              setShowUploadLogin(false);
            }}
            className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20"
          >
            Log out
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleUploadLogin}
          className="flex flex-col lg:flex-row gap-3 items-center"
        >
          <input
            type="text"
            value={uploadUser}
            onChange={(event) => setUploadUser(event.target.value)}
            placeholder="Username"
            className="w-full lg:w-56 rounded-md px-3 py-2 text-black"
          />
          <input
            type="password"
            value={uploadPass}
            onChange={(event) => setUploadPass(event.target.value)}
            placeholder="Password"
            className="w-full lg:w-56 rounded-md px-3 py-2 text-black"
          />
          <button
            type="submit"
            className="w-full lg:w-auto rounded-md bg-white text-black px-4 py-2 font-semibold hover:bg-gray-200"
          >
            Unlock Upload
          </button>
          {uploadError ? (
            <span className="text-sm text-red-300">{uploadError}</span>
          ) : null}
        </form>
      )}
    </div>
  );

  return (
    <nav className="bg-black text-white py-4 shadow-md">
      <div className="page-container grid grid-cols-3 items-center">

        {/* Logo Section */}
        <div className="w-32 sm:w-40 justify-self-start">
          <Link to="/">
            <img src={Logo} alt="Bodytech Logo" className="w-full object-contain" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-8 font-semibold text-base justify-self-center">
          <Link to="/" className="p-2 hover:text-blue-400 rounded-md transition-all cursor-pointer">Home</Link>
          <Link to="/about" className="p-2 hover:text-blue-400 rounded-md transition-all cursor-pointer">About</Link>
          <Link to="/services" className="p-2 hover:text-blue-400 rounded-md transition-all cursor-pointer">Services</Link>
          <Link to="/contact" className="p-2 hover:text-blue-400 rounded-md transition-all cursor-pointer">Contact</Link>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowUploadLogin((prev) => !prev)}
              className="p-2 hover:text-blue-400 rounded-md transition-all cursor-pointer"
            >
              {isUploaderAuthed ? "Upload Access" : "Upload"}
            </button>
            {showUploadLogin ? (
              <div className="absolute left-1/2 top-full z-50 mt-3 w-[min(90vw,480px)] -translate-x-1/2">
                {uploadPanel}
              </div>
            ) : null}
          </div>
        </div>

        <div className="justify-self-end">
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen ? (
        <div id="mobile-menu" className="lg:hidden border-t border-white/10">
          <div className="flex flex-col gap-1 px-4 py-3 text-base font-semibold">
            <Link
              to="/"
              className="rounded-md px-3 py-2 hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="rounded-md px-3 py-2 hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="rounded-md px-3 py-2 hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="rounded-md px-3 py-2 hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setShowUploadLogin((prev) => !prev)}
              className="rounded-md px-3 py-2 text-left hover:bg-white/10"
            >
              {isUploaderAuthed ? "Upload Access" : "Upload"}
            </button>
            {showUploadLogin ? (
              <div className="px-3 pb-2">
                {uploadPanel}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
