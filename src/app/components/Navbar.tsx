'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/home" className="text-2xl font-bold text-blue-600">
        TourMe
      </Link>
      <div className="space-x-4">
        <Link href="/home" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">
          About
        </Link>
        <Link href="/" className="text-gray-700 hover:text-blue-600">
          Logout
        </Link>
      </div>
    </nav>
  );
}
