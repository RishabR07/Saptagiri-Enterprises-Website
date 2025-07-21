import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-tr from-blue-900 via-indigo-800 to-purple-800 text-white pt-10 pb-6 mt-0">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">Saptagiri Enterprises</h3>
          <p className="text-gray-200 leading-relaxed">
            Trusted local petrol pump delivering quality fuel and customer satisfaction in Mangalore.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center gap-2"><FaPhoneAlt /> +91‑7022103369</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> KPT near Kadri Hills, Mangalore, Karnataka</li>
          </ul>
        </div>

        {/* Connect / Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-5 text-white text-lg">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-gray-300 text-xs">
        &copy; {year} Designed and Developed by Rishab Shetty. All rights reserved.
      </div>
    </footer>
  );
}
