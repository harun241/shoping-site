// components/Loader.jsx
"use client";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-16 h-16 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}
