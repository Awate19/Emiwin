import React from 'react';
import { Camera, Clock, Heart, Image } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: "Full Day Coverage",
    description: "Comprehensive photography from preparation to reception"
  },
  {
    icon: Heart,
    title: "Engagement Sessions",
    description: "Pre-wedding photoshoots to capture your love story"
  },
  {
    icon: Image,
    title: "Premium Editing",
    description: "Professional retouching and color grading of all photos"
  },
  {
    icon: Clock,
    title: "Quick Delivery",
    description: "Digital gallery delivered within 3-4 weeks"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive wedding photography packages tailored to your special day
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition">
              <service.icon className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}