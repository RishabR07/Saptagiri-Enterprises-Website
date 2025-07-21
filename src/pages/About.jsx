import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoCloseCircle } from 'react-icons/io5';

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  const employees = [
    { name: 'Praveen', role: 'Cashier 1', img: 'praveen.jpg' },
     { name: 'Naveen', role: 'Manager', img: 'naveen.jpg' },
    { name: 'Yeshwant', role: 'Cashier 2', img: 'yeshwant.jpg' },
    { name: 'Rakesh', role: 'Cashier 2', img: 'rakesh.jpg' },
    { name: 'Nishanth', role: 'Cashier 3', img: 'nishant.jpg' },
   
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white py-20 px-4">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Saptagiri Enterprises
      </motion.h2>

      {/* Info Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {[
          { title: 'Petrol Pump Name', detail: 'Saptagiri Enterprises' },
          { title: 'Owner', detail: 'B. Narayan Shetty' },
          {
            title: 'Address',
            detail: 'KPT, Kadri Hills\nMangalore, Karnataka, India',
          },
          {
            title: 'Operating Hours',
            detail: '5:00 AM – 2:00 AM (Everyday)',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-gray-700 rounded-lg p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="whitespace-pre-line text-gray-300">{item.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* Employee Info */}
      <h3 className="text-3xl font-bold mb-6 text-center">Employee Information</h3>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-gray-700 rounded-lg p-6 shadow-md">
          <h4 className="text-xl font-semibold mb-2">Total Workers</h4>
          <p>Approximately 30</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-6 shadow-md">
          <h4 className="text-xl font-semibold mb-2">Shifts</h4>
          <ul className="list-disc list-inside text-gray-300">
            <li>Shift 1: 9:00 AM – 6:30 PM</li>
            <li>Shift 2: 6:30 PM – 9:00 AM</li>
          </ul>
        </div>
      </div>

      {/* Employee Gallery */}
      <h3 className="text-3xl font-bold mb-8 text-center">Key Staff Members</h3>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {employees.map((emp, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 rounded-lg p-4 text-center shadow-md cursor-pointer hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedImage(emp)}
          >
            <div className="w-32 h-32 mx-auto border-4 border-cyan-400 mb-3 overflow-hidden shadow-md">
              <img
                src={`/images/${emp.img}`}
                alt={emp.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg font-semibold">{emp.name}</p>
            <p className="text-sm text-gray-300">{emp.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-2xl w-full bg-white text-black rounded-xl p-4 shadow-xl">
            <button
              className="absolute top-2 right-2 text-2xl text-red-600 hover:text-red-800"
              onClick={() => setSelectedImage(null)}
            >
              <IoCloseCircle />
            </button>
            <img
              src={`/images/${selectedImage.img}`}
              alt={selectedImage.name}
              className="w-full h-[70vh] object-contain rounded-lg mb-4"
            />
            <h4 className="text-xl font-bold text-center">{selectedImage.name}</h4>
            <p className="text-center text-gray-700">{selectedImage.role}</p>
          </div>
        </div>
      )}
    </div>
  );
}
