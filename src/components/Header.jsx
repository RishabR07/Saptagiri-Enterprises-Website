import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import logo from '../assets/images/logo.gif'; // Use the correct logo file
import ThemeToggle from './common/ThemeToggle';

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="fixed top-0 w-full z-50 shadow-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left: Logo & Branding */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-4"
        >
          <div className="relative">
            <img
              src={logo}
              alt="Indian Oil logo"
              className="h-16 w-16 rounded-full border-2 border-white shadow-xl animate-pulse bg-transparent mix-blend-normal"
            />
            <span className="absolute top-0 left-0 h-full w-full rounded-full border-2 border-orange-300 opacity-20 animate-ping pointer-events-none"></span>
          </div>

          <div className="text-white dark:text-orange-300">
            <h1 className="text-3xl font-extrabold tracking-wide">Indian Oil</h1>
            <p className="text-sm text-gray-200 dark:text-gray-400">Fueling India Since 1990</p>
          </div>
        </motion.div>

        {/* Middle: Navbar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-2 md:mt-0"
        >
          <div className="bg-white/20 dark:bg-white/10 backdrop-blur-lg rounded-xl px-6 py-2 shadow-lg border border-white/30">
            <Navbar />
          </div>
        </motion.div>

        {/* Right: Theme Toggle */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 md:mt-0"
        >
          <div className="bg-white/10 dark:bg-white/5 p-2 rounded-full backdrop-blur-md border border-white/20 shadow-inner text-white dark:text-gray-200">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
