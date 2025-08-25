import React from 'react';

export default function Hero() {
  return (
    <section className="bg-blue-50 py-20 px-30 flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Left side: Image */}
        <div className="md:w-1/2   h-80 flex justify-center md:justify-start mb-10 md:mb-0">
          <img 
            src="https://i.ibb.co.com/GQ2wW1FP/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands-197531-343.jpg" 
            alt="Logo" 
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right side: Text & Button */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to QuickBazar
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Discover amazing products at unbeatable prices. Shop, compare, and save every day!
          </p>
          <button className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}
