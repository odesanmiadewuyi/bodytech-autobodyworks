// components/Services.jsx
import React from 'react'; // Add this at the top
export default function Services() {
    return (
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-neutral-900">
            Our Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard title="Full Diagnostics" />
            <ServiceCard title="Body Repair" />
            <ServiceCard title="Paint Services" />
            <ServiceCard title="Laser Alignment" />
          </div>
        </div>
      </section>
    )
  }
  
  const ServiceCard = ({ title }) => (
    <div className="bg-neutral-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
      <h4 className="font-semibold text-lg text-neutral-900">{title}</h4>
      <p className="text-neutral-600 mt-2 text-sm">
        Professional service with certified technicians
      </p>
    </div>
  )