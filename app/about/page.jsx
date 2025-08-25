"use client";

import React from "react";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are a passionate team dedicated to delivering high-quality
            solutions for our clients. Our goal is to provide innovative
            products and services that make a difference in people's lives.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With years of experience and a strong commitment to excellence, we
            are here to serve you better every day.
          </p>
        </div>

        {/* Image Section (normal <img>) */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/spkyPgjz/image.png" // ✅ external image without next.config.js
            alt="About us"
            className="rounded-lg shadow-lg w-[500px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
