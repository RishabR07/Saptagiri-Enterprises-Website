import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoCloseCircle } from 'react-icons/io5'; // Close icon

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null); // state for full-screen image

  const employees = [
    { name: 'Praveen', role: 'Cashier 1', img: 'praveen.jpg' },
    { name: 'Naveen', role: 'Manager', img: 'naveen.jpg' },
    { name: 'Yeshwant', role: 'Cashier 2', img: 'yeshwant.jpg' },
    { name: 'Rakesh', role: 'Cashier 2', img: 'rakesh.jpg' },
    { name: 'Nishanth', role: 'Cashier 3', img: 'nishant.jpg' },
    
  ];

  return (
    <div
      className="relative min-h-screen bg-gradient-to-b from-orange-500 via-white to-blue-700 bg-cover bg-center"
      style={{ backgroundBlendMode: 'overlay', backgroundImage: 'url("/images/fuel-bg.jpg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto pt-24 pb-16 px-6 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">About Saptagiri Enterprises</h2>

        {/* Info Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-2">Petrol Pump Name</h3>
            <p>Saptagiri Enterprises</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-2">Owner</h3>
            <p>B. Narayan Shetty</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20">
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>KPT, Kadri Hills<br />Mangalore, Karnataka, India</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Operating Hours</h3>
              <p>5:00 AM – 2:00 AM (Everyday)</p>
            </div>
          </div>
        </div>

        {/* Employee Info */}
        <h3 className="text-3xl font-bold mb-6 text-center">Employee Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20">
            <h4 className="text-xl font-semibold mb-2">Total Workers</h4>
            <p>Approximately 30</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20">
            <h4 className="text-xl font-semibold mb-2">Shifts</h4>
            <ul className="list-disc list-inside">
              <li>Shift 1: 9:00 AM – 6:30 PM</li>
              <li>Shift 2: 6:30 PM – 9:00 AM</li>
            </ul>
          </div>
        </div>

        {/* Staff Cards */}
        <h4 className="text-2xl font-semibold mb-4 text-center">Key Staff Members</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {employees.map((emp, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20 text-center cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(`/image/${emp.img}`)}
            >
              <img
                src={`/image/${emp.img}`}
                alt={emp.name}
                className="w-32 h-32 mx-auto mb-4 rounded-xl object-cover border-4 border-cyan-500 shadow-md"
              />
              <h5 className="text-lg font-semibold text-cyan-300">{emp.name}</h5>
              <p className="text-gray-200">{emp.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur z-50 flex items-center justify-center">
          <img
            src={selectedImage}
            alt="Staff"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-red-400 transition duration-200"
          >
            <IoCloseCircle />
          </button>
        </div>
      )}
    </div>
  );
}
