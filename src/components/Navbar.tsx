import React from 'react';
import { Camera } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-rose-600" />
            <span className="text-2xl font-light">Moments</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#portfolio" className="text-gray-700 hover:text-rose-600 transition">Portfolio</a>
            <a href="#services" className="text-gray-700 hover:text-rose-600 transition">Services</a>
            <a href="#about" className="text-gray-700 hover:text-rose-600 transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-600 transition">Contact</a>
            <button className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}