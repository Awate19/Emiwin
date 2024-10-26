import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
          alt="Wedding couple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
            Capturing Your Perfect Moments
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Professional wedding photography that tells your unique love story
          </p>
          <button className="bg-rose-600 text-white px-8 py-3 rounded-full text-lg hover:bg-rose-700 transition">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}