'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/'); // or '/login'
  };

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
        <button
          onClick={handleLogout}
          className="text-gray-700 hover:text-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
