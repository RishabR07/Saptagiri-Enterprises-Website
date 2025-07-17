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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 py-16 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xl bg-white/10 p-8 rounded-2xl shadow-lg backdrop-blur-md border border-white/20"
      >
        <h2 className="text-4xl font-bold text-center text-cyan-300 mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <motion.textarea
            placeholder="Your Message"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button type="submit" className="w-full py-3 text-lg">
              Send Message
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
