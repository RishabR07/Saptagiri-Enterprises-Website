import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "bg-white/20 text-white dark:text-yellow-300 font-bold px-4 py-2 rounded-lg shadow-md"
      : "text-white dark:text-gray-200 hover:bg-white/10 hover:text-yellow-300 px-4 py-2 rounded-lg transition";

  return (
    <div className="relative">
      {/* Toggle Button */}
      <div className="md:hidden flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white dark:text-gray-200 focus:outline-none text-2xl"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Nav Links */}
      <nav
        className={`flex-col md:flex-row md:flex gap-2 md:gap-4 items-start md:items-center text-sm md:text-base bg-white/10 md:bg-transparent backdrop-blur-md md:backdrop-blur-0 p-4 md:p-0 rounded-lg md:rounded-none shadow-lg md:shadow-none mt-4 md:mt-0 absolute md:static top-full right-0 w-48 md:w-auto z-50 transition-all duration-300 ease-in-out ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        <NavLink to="/" className={navLinkStyles} onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkStyles} onClick={() => setIsOpen(false)}>
          About
        </NavLink>
        <NavLink to="/services" className={navLinkStyles} onClick={() => setIsOpen(false)}>
          Services
        </NavLink>
        <NavLink to="/payment" className={navLinkStyles} onClick={() => setIsOpen(false)}>
          Payment
        </NavLink>
        <NavLink to="/legalsafety" className={navLinkStyles} onClick={() => setIsOpen(false)}>
          Legal & Safety
        </NavLink>
        <NavLink to="/contact" className={navLinkStyles} onClick={() => setIsOpen(false)}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
}
