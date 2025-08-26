"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-cyan-600 p-4 text-white flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          className="rounded-full h-10 w-10"
          src="https://i.ibb.co/PZkmwY7J/Blue-and-Orange-Circle-Icon-Business-Logo.png"
          alt="Logo"
        />
        <span className="font-bold text-lg">MyApp</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 items-center">
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

        {/* Show All-Products only if user is logged in */}
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

      {/* Auth Buttons */}
      <div>
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
    </nav>
  );
}
