import React from "react";
import {
  FaFireExtinguisher,
  FaExclamationTriangle,
  FaCertificate,
  FaCamera,
  FaHandsHelping,
  FaRecycle,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function LegalSafety() {
  const safetyItems = [
    {
      icon: <FaExclamationTriangle className="text-yellow-300 text-4xl" />,
      title: "Fueling Safety Guidelines",
      desc: "Clear signage and guidelines ensure customers switch off engines, avoid phone use, and follow safe fueling practices.",
    },
    {
      icon: <FaFireExtinguisher className="text-red-400 text-4xl" />,
      title: "Fire Safety Equipment",
      desc: "Equipped with multiple extinguishers, sand buckets, and emergency cut-offs for immediate response.",
    },
    {
      icon: <FaCertificate className="text-green-300 text-4xl" />,
      title: "Certifications & Compliance",
      desc: "Holds valid PESO license and complies with Indian Petroleum Act safety norms and local regulations.",
    },
    {
      icon: <FaCamera className="text-blue-300 text-4xl" />,
      title: "24x7 CCTV Monitoring",
      desc: "Security cameras cover the entire premises to ensure safety, prevent theft, and monitor staff operations.",
    },
    {
      icon: <FaHandsHelping className="text-purple-300 text-4xl" />,
      title: "Trained Staff",
      desc: "All attendants are trained in emergency protocols, fire handling, and customer safety management.",
    },
    {
      icon: <FaRecycle className="text-lime-300 text-4xl" />,
      title: "Eco-Friendly Compliance",
      desc: "Follows eco guidelines—spillage prevention, vapor recovery, and safe disposal of waste oil.",
    },
  ];

  return (
    <section className="min-h-screen pt-24 px-6 py-16 bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-lg">
          Legal & Safety Measures
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {safetyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-[0_0_25px_#00f7ff] transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-cyan-300">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
