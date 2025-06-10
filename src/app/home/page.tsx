'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import PlaceCard from '../components/PlaceCard';
import type { User } from '@supabase/supabase-js';

const places = [
  {
    id: 1,
    title: 'Jaipur, India',
    image: 'https://source.unsplash.com/featured/?jaipur',
    description: 'Explore the Pink City and its royal palaces.',
  },
  {
    id: 2,
    title: 'Tokyo, Japan',
    image: 'https://source.unsplash.com/featured/?tokyo',
    description: 'Experience futuristic cities and ancient temples.',
  },
  {
    id: 3,
    title: 'Paris, France',
    image: 'https://source.unsplash.com/featured/?paris',
    description: 'Walk through the romantic streets of Paris.',
  },
];

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null); // ✅ use correct type

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession(); // ✅ removed unused error
      if (!data?.session) {
        router.push('/');
      } else {
        setUser(data.session.user);
        setLoading(false);
      }
    };
    checkSession();
  }, [router]);

  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg">Checking session...</p>
      </main>
    );
  }

  return (
    <main className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-2">Welcome to TourMe ✈️</h1>
      {user && (
        <p className="mb-6 text-gray-600 text-sm">
          Logged in as <span className="font-semibold">{user.email}</span>
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </main>
  );
}
