import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // Optional icons

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <div
      onClick={() => setDark(!dark)}
      className={`relative w-16 h-8 flex items-center cursor-pointer rounded-full px-1 transition-colors ${
        dark ? 'bg-gray-700' : 'bg-yellow-400'
      }`}
    >
      <div
        className={`absolute h-6 w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out
          ${dark ? 'translate-x-8' : 'translate-x-0'}`}
      >
        <div className="flex items-center justify-center h-full">
          {dark ? (
            <MoonIcon className="h-4 w-4 text-blue-800" />
          ) : (
            <SunIcon className="h-4 w-4 text-yellow-500" />
          )}
        </div>
      </div>
    </div>
  );
}
