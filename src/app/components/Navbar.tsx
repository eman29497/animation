'use client';
import React, { useState } from 'react';
import Link from 'next/link';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-100 border-b border-gray-400 p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-600">VibeFlow</h1>
        <div className="hidden md:flex gap-6 text-purple-600 font-medium">
          <Link href="/">Home</Link>
          <Link href="/trend">Trend</Link>
          <Link href="/illustration">Illustration</Link>
          <Link href="/animation">Animation</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden font-bold text-purple-700">
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-4 mt-4 bg-gray-50 p-4 rounded-lg">
          <Link href="/" className="hover:text-purple-700">Home</Link>
          <Link href="/trend" className="hover:text-purple-700">Trend</Link>
          <Link href="/illustration" className="hover:text-purple-700">Illustration</Link>
          <Link href="/animation" className="hover:text-purple-700">Animation</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;