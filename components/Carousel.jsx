"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://i.ibb.co.com/FLDPpRhr/image.png",
    title: "Discover Amazing Products",
    subtitle: "Shop the best deals every day",
  },
  {
    id: 2,
    image:
      "https://i.ibb.co.com/CK4sBH41/image.png",
    title: "Fresh Collections",
    subtitle: "New arrivals every week",
  },
  {
    id: 3,
    image:
      "https://i.ibb.co.com/z9dt5k9/image.png",
    title: "Exclusive Offers",
    subtitle: "Save big on your favorites",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-white mb-6">{slide.subtitle}</p>
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-lg transition">
              Shop Now
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
