'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <nav className="bg-gray-900 text-white px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-md">
      {/* Brand */}
      <Link
        href="/home"
        className="text-xl sm:text-2xl font-bold text-white tracking-tight hover:text-blue-400 transition"
      >
        TourMe
      </Link>

      {/* Links */}
      <div className="flex items-center space-x-4 sm:space-x-6 text-sm sm:text-base">
        <Link
          href="/home"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-gray-300 hover:text-white transition-colors"
        >
          About
        </Link>
        <button
          onClick={handleLogout}
          className="px-4 py-1.5 rounded-md text-red-400 border border-red-500 font-medium transition-all duration-200 
                     hover:bg-red-600 hover:text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
