"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cyan-600 p-4 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            className="rounded-full h-10 w-10"
            src="https://i.ibb.co/PZkmwY7J/Blue-and-Orange-Circle-Icon-Business-Logo.png"
            alt="Logo"
          />
          <span className="font-bold text-lg">My-Shop</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/addproducts" className="hover:underline">
              Add-Products
            </Link>
          </li>

          {session && (
            <li>
              <Link href="/All-products" className="hover:underline">
                All-Products
              </Link>
            </li>
          )}

          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
          </li>
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:block">
          {session ? (
            <div className="flex items-center gap-3">
              <span className="font-medium">
                {session.user?.name || session.user?.email}
              </span>
              <button
                onClick={() => signOut()}
                className="bg-white text-cyan-600 px-4 py-1 rounded hover:bg-gray-200 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn("credentials")}
              className="bg-white text-cyan-600 px-4 py-1 rounded hover:bg-gray-200 transition"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-cyan-700 p-4 rounded-lg">
          <Link href="/" className="block hover:underline" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/addproducts" className="block hover:underline" onClick={() => setIsOpen(false)}>
            Add-Products
          </Link>
          {session && (
            <Link href="/All-products" className="block hover:underline" onClick={() => setIsOpen(false)}>
              All-Products
            </Link>
          )}
          <Link href="/about" className="block hover:underline" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/services" className="block hover:underline" onClick={() => setIsOpen(false)}>
            Services
          </Link>

          {/* Auth Buttons (Mobile) */}
          {session ? (
            <button
              onClick={() => {
                signOut();
                setIsOpen(false);
              }}
              className="w-full bg-white text-cyan-600 px-4 py-2 rounded hover:bg-gray-200 transition mt-2"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                signIn("credentials");
                setIsOpen(false);
              }}
              className="w-full bg-white text-cyan-600 px-4 py-2 rounded hover:bg-gray-200 transition mt-2"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
