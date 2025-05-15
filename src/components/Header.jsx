// components/Header.jsx
import React from 'react'; // Add this at the top
//const Footer
export default function Header() {
    return (
      <header className="bg-neutral-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-2xl font-bold tracking-tight">BODYTECH AUTOMOTIVE</h1>
              <p className="text-sm text-neutral-400 mt-1">
                Repeating You Car Quoting Word | Fine Quotes
              </p>
            </div>
            <nav className="space-x-6">
              <a href="#services" className="hover:text-red-500 transition-colors">
                Services
              </a>
              <a href="#about" className="hover:text-red-500 transition-colors">
                About
              </a>
              <a href="#contact" className="hover:text-red-500 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>
    )
  }