import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Message sent: ' + JSON.stringify(form));
  };

  return (
    <div className="relative min-h-screen pt-24 flex items-center justify-center px-4 py-16 text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden">

      {/* 🔵 Visible Background Map with dark overlay */}
      <div className="absolute inset-0 z-0 opacity-60">
        <iframe
          title="Saptagiri Enterprises Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15557.12299824867!2d74.8539084!3d12.8909469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba359fd62e9c73f%3A0x4b2de73d0a9c8d9f!2sIndian%20Oil%20-%20Saptagiri%20Enterprises!5e0!3m2!1sen!2sin!4v1752743011426!5m2!1sen!2sin"
          className="w-full h-full"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay backdrop-blur-[2px]"></div>
      </div>

      {/* 🌈 Form Section with animations */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-xl bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-white/10"
      >
        <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 drop-shadow-lg">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.textarea
            placeholder="Your Message"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring' }}>
            <Button type="submit" className="w-full py-3 text-lg">
              Send Message
            </Button>
          </motion.div>
        </form>

        {/* 📍 View Full Location Button */}
        <div className="text-center mt-6">
          <a
            href="https://www.google.com/maps?q=12.8909469,74.8539084"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 mt-2 text-white font-medium bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-md"
          >
            📍 View Full Location on Google Maps
          </a>
        </div>
      </motion.div>
    </div>
  );
}
