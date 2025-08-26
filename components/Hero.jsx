import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side: Image */}
        <div className="md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src="https://i.ibb.co.com/GQ2wW1FP/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands-197531-343.jpg"
            alt="Hero"
            className="w-full max-w-md md:max-w-lg h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right side: Text & Button */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
            Welcome to <span className="text-cyan-600">QuickShop</span>
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-6 max-w-lg mx-auto md:mx-0">
            Discover amazing products at unbeatable prices. Shop, compare, and save every day!
          </p>
          <Link href="/All-products">
            <button className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
