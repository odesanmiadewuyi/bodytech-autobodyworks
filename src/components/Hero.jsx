// components/Hero.jsx
import React from 'react'; // Add this at the top
export default function Hero() {
    return (
      <section className="bg-neutral-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-neutral-900">
            KEEPING YOU FIXED ON THE ROAD AHEAD
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <StatCard number="25" label="Years Experience" />
            <StatCard number="100%" label="Client Satisfaction" />
            <StatCard number="50+" label="Specialist Technicians" />
          </div>
        </div>
      </section>
    )
  }
  
  const StatCard = ({ number, label }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-red-600 text-3xl font-bold mb-2">{number}</div>
      <p className="text-neutral-600 text-sm uppercase tracking-wide">{label}</p>
    </div>
  )