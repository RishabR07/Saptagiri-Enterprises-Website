import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5'; // install with: npm i react-icons

export default function Services() {
  const services = [
    {
      name: 'Petrol & Diesel',
      desc: 'High‑quality fuels.',
      price: 'Petrol: ₹102.09/l | Diesel: ₹90.18/l',
      image: '/image/desel.jpg',
    },
    {
      name: 'Nitrogen & Normal Gas',
      desc: 'Free nitrogen and air for safer, smoother rides.',
      price: 'Normal air | Nitrogen: As you wish',
      image: '/image/services-banner.jpg',
    },
    {

      name: 'AD-BLUE',
      desc: 'Liquid used in diesel vehicles to reduce harmful emissions.',
      price: '₹55/litre',
      image: '/image/ad-blue.jpg',
    },
    {
      name: 'Toilets or Rest Areas',
      desc: 'Clean and accessible toilets and rest areas available for customer convenience.',
      price: 'Free of charge',
      image: '/image/washroome.jpg',
    },
    {
      name: 'Car Wash',
      desc: 'Professional exterior and interior cleaning.',
      price: '₹150 – ₹500 depending on vehicle type.',
      image: '/image/carwash.jpg',
    },
    {
      name: 'Emission Test',
      desc: 'Ensure your vehicle meets pollution control standards.',
      price: '₹60 (2-wheeler) | ₹80 (4-wheeler)',
      image: '/image/emmission-test.jpg',
    },
    
    {
      name: 'XP95 GAS',
      desc: 'Used for higher power bikes and cars.',
      price: '₹109.40/litre',
      image: '/image/xp95.jpg',
    },
    {
      name: 'Oil Change',
      desc: 'Synthetic & conventional oils.',
      price: '₹400 – ₹1,200 depending on vehicle type.',
      image: '/image/oilchanger.jpg',
    },

  ];

  const [showPrices, setShowPrices] = useState(Array(services.length).fill(false));
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleView = (index) => {
    const updated = [...showPrices];
    updated[index] = !updated[index];
    setShowPrices(updated);
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map((s, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/10 border border-white/20 shadow-xl backdrop-blur-md p-6 hover:shadow-[0_0_25px_#00f7ff] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-40 object-cover rounded-xl mb-4 cursor-pointer"
                onClick={() => setSelectedImage(s.image)}
              />
              <h3 className="text-2xl font-semibold text-cyan-300 mb-3">{s.name}</h3>
              <p className="text-gray-200 mb-4">
                {showPrices[index] ? s.price : s.desc}
              </p>
            </div>
            <button
              onClick={() => toggleView(index)}
              className="mt-auto bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded"
            >
              {showPrices[index] ? 'Back to Info' : 'View Price'}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Image Modal with Close Button */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-[90%] max-h-[90%]"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedImage}
                alt="Full View"
                className="rounded-xl border-4 border-white shadow-lg"
                initial={{ scale: 0.7 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.7 }}
              />
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-5 -right-5 bg-white text-black rounded-full p-2 shadow hover:scale-110 transition"
              >
                <IoClose size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
