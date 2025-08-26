"use client";

import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <SessionProvider>
          <Navbar /> {/* Global Navbar */}
          <main className="flex-grow">{children}</main> {/* Page-specific content */}
          <Footer /> {/* Global Footer */}
        </SessionProvider>
      </body>
    </html>
  );
}
