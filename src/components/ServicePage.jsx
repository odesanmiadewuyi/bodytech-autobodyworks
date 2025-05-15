import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServicePage = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">{decodeURIComponent(title)}</h1>
      <p className="text-gray-700 max-w-2xl text-center text-lg">
        This is a detailed page for <strong>{decodeURIComponent(title)}</strong>. You can expand this page with specific content, galleries, or dynamic data from a backend.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full"
      >
        ← Back to Services
      </Link>
    </div>
  );
};

export default ServicePage;
