import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import logo from '../assets/images/logo.gif';
import ThemeToggle from './common/ThemeToggle';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#1e3c72] via-[#2a5298] to-[#1e3c72] dark:from-[#0c0c0c] dark:via-[#1a1a1a] dark:to-[#0c0c0c] shadow-2xl">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        
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
              className="h-16 w-16 rounded-full border-2 border-white shadow-xl animate-pulse"
            />
            <span className="absolute top-0 left-0 h-full w-full rounded-full border-2 border-cyan-400 opacity-20 animate-ping"></span>
          </div>

          <div className="text-white dark:text-orange-300">
            <h1 className="text-3xl font-extrabold tracking-wide">Indian Oil</h1>
            <p className="text-sm text-gray-200 dark:text-gray-400">Fueling India Since 1990</p>
          </div>
        </motion.div>

        {/* Right: Theme Toggle */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 md:mt-0"
        >
          <div className="bg-white/10 dark:bg-white/5 p-2 rounded-full backdrop-blur-md border border-white/20 shadow-inner">
            <ThemeToggle />
          </div>
        </motion.div>
      </div>

      {/* Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="border-t border-white/10 dark:border-white/20"
      >
        <Navbar />
      </motion.div>
    </header>
  );
}
