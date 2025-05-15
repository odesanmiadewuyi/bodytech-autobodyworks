// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ServicePage from "./components/ServicePage";

// Reusable homepage sections
import Welcome from "./components/Welcome";
import WelcomeSection from "./components/WelcomeSection";
import CallSection from "./components/CallSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import ImageGallerySection from "./components/ImageGallerySection";
import TestimonialSlider from "./components/TestimonialSlider";
import ImageSlider from "./components/ImageSlider";
import CarsSlider from "./components/CarsSlider";
import Carforsales from "./components/Carforsales";
import BumperCornerTouchUp from "./pages/BumperCornerTouchUp";
import InvisibleTouchup from "./pages/InvisibleTouchup";

import CarPolishing from "./pages/CarPolishing";
import ColourBlending from "./pages/ColourBlending";
import RepairofScratches from "./pages/RepairofScratches";
import StoneChipsRepair from "./pages/StoneChipsRepair";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Home Route - includes homepage sections */}
            <Route
              path="/"
              element={
                <> 
                <Home /> 
                  <Welcome />
                  <WelcomeSection />
                  <CallSection />
                  <ServicesSection />
                  <Carforsales />
                  <CarsSlider />
                </>
              }
            />

            {/* Other pages */}
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/invisible-touchup" element={<InvisibleTouchup />} />
            <Route path="/service/bumper-corner-touch-up" element={<BumperCornerTouchUp />} />

            <Route path="/service/car-polishing" element={<CarPolishing />} />
            <Route path="/service/colour-blending" element={<ColourBlending />} />

            <Route path="/service/repair-of-scratches" element={<RepairofScratches />} />
            <Route path="/service/stone-chips-repair" element={<StoneChipsRepair />} />

          </Routes>
        </main>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
