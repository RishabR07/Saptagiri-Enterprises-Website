import React from 'react';
import { motion } from 'framer-motion';
import pump from '../assets/images/pump3.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] pt-24">
      {/* Hero Section with Image */}
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src={pump}
          alt="PUMP IMG"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />

        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-center"
          >
            Welcome to Indian Oil Fuel Station
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl mt-4 text-center max-w-2xl"
          >
            Delivering quality fuels and trusted service for every journey.
          </motion.p>
        </div>
      </div>

      {/* Services Preview */}
      <section className="py-16 bg-white/10 backdrop-blur-md px-6">
        <h3 className="text-3xl font-semibold text-center mb-10 text-cyan-300">
          Our Key Services
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { title: 'Fueling', icon: '⛽', desc: 'Petrol, Diesel & XP95' },
            { title: 'Oil Change', icon: '🛢️', desc: 'Top-tier engine oils' },
            { title: 'Air Check', icon: '🌬️', desc: 'Free air & nitrogen' },
            { title: 'AD-BLUE', icon: '🚛', desc: 'Eco solution for diesel' },
            { title: 'Rest Zone', icon: '🛑', desc: 'Clean restrooms' },
            { title: 'Payment Options', icon: '💳', desc: 'UPI, Cards, Loyalty Points' },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-white/10 rounded-xl shadow-md border border-white/20 text-center"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-1 text-cyan-300">{service.title}</h4>
              <p className="text-gray-200">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 px-6 text-center bg-black/40">
        <motion.h3
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Fuel Up?
        </motion.h3>
        <motion.p
          className="text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Visit our nearest station or explore services now.
        </motion.p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/services"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded"
          >
            Explore Services
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
