import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/payment', label: 'Payment' },
     { to: '/LegalSafety', label: 'Legal & Safety' },
    { to: '/contact', label: 'Contact' },
   
  ];

  return (
    <nav className="bg-white/5 dark:bg-white/10 backdrop-blur-md shadow-md">
      <ul className="container mx-auto flex justify-center space-x-6 py-3 text-lg font-medium">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `transition duration-300 px-2 py-1 rounded 
                ${
                  isActive
                    ? 'text-orange-500 dark:text-orange-400 underline underline-offset-4'
                    : 'text-white hover:text-yellow-300 dark:text-gray-200 dark:hover:text-yellow-400'
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
