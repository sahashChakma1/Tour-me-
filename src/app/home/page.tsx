'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import PlaceCard from '../components/PlaceCard';
import type { User } from '@supabase/supabase-js';

interface Place {
  id: number;
  title: string;
  description: string;
  image_url: string | null;
  image: string;
  created_at?: string | null;
}

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [places, setPlaces] = useState<Place[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data?.session) {
        router.push('/');
      } else {
        setUser(data.session.user);
        setLoading(false);
      }
    };
    checkSession();
  }, [router]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const { data, error } = await supabase
        .from('places')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase fetch error:', error?.message ?? error);
        return;
      }

      if (data) {
        const transformed = data.map((place) => ({
          ...place,
          image: place.image_url ?? '/placeholder.jpg',
        }));
        setPlaces(transformed);
      }
    };

    fetchPlaces();
  }, []);

  const filteredPlaces = places.filter((place) =>
    place.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    place.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-gray-500 text-lg">Checking session...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-10">
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-2">
            Welcome to <span className="text-blue-600">TourMe</span> ✈️
          </h1>
          {user && (
            <p className="text-gray-600 text-sm sm:text-base">
              Logged in as{' '}
              <span className="font-semibold text-gray-800">
                {user.user_metadata?.name || user.email}
              </span>
            </p>
          )}
        </div>

        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search places..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredPlaces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">No places found.</p>
        )}
      </section>
    </main>
  );
}
