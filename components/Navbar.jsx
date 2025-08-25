// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { FaHome, FaBoxOpen } from "react-icons/fa"; 
import { useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => setIsLoggedIn(!isLoggedIn);

  return (
    <nav className="bg-cyan-600 p-4 text-white flex items-center justify-between">
      
      {/* Left side: Logo/Home */}
      <div className="flex items-center gap-2">
      <img className="rounded-full h-10 w-10"
  src="https://i.ibb.co/PZkmwY7J/Blue-and-Orange-Circle-Icon-Business-Logo.png" 
  alt="Logo" 
/>

      </div>

      {/* Middle: Links */}
      <ul className="flex gap-6 items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/addproducts">Add-Products</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
      </ul>

      {/* Right side: Login / Logout */}
      <div>
        <button
          onClick={handleAuth}
          className="bg-white text-cyan-600 px-4 py-1 rounded hover:bg-gray-200"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>

    </nav>
  );
}
