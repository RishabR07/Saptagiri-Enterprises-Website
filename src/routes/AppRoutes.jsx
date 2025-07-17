import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Payment from '../pages/Payment';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import LegalSafety from '../pages/LegalSafety';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
          <Route path="payment" element={<Payment />} />  {/* Add Payment route */}
          <Route path="LegalSafety" element={<LegalSafety/>} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
