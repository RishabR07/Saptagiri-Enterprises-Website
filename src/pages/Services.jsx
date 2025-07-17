import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      name: 'Petrol & Diesel',
      desc: 'High‑quality fuels.',
      price: 'Petrol: ₹102.09/l | Diesel: ₹90.18/l',
    },
    {
      name: 'Oil Change',
      desc: 'Synthetic & conventional oils.',
      price: '₹400 – ₹1,200 depending on vehicle type.',
    },
    {
      name: 'Nitrogen & Normal Gas',
      desc: ' Free nitrogen and air for safer, smoother rides..',
      price: 'Normal air|Nitrogen: As you wish',
    },
    {
      name: 'XP95 GAS',
      desc: 'Used for higher power bikes and cars.',
      price: '₹109.40/litre',
    },
    {
      name: 'AD-BLUE',
      desc: 'Liquid used in diesel vehicles to reduce harmful emissions.',
      price: '₹55/litre',
    },
    {
      name: 'Toilets or rest areas',
      desc: 'Clean and accessible toilets and rest areas available for customer convenience.',
      price: 'Free of charge',
    },
  ];

  const [showPrices, setShowPrices] = useState(Array(services.length).fill(false));

  const toggleView = (index) => {
    const updated = [...showPrices];
    updated[index] = !updated[index];
    setShowPrices(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-16 px-4">
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
    </div>
  );
}
