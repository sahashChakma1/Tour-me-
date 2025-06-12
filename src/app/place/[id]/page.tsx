// app/place/[id]/page.tsx
export const dynamic = 'force-dynamic';

import { fetchPlaceById } from '@/actions/supabaseActions';
import Image from 'next/image';

interface Place {
  id: string;
  title: string;
  description: string;
  image_url: string;
}

export default async function PlaceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const place = await fetchPlaceById(params.id);

    if (!place) {
      return (
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <p className="text-gray-700 text-lg">Place not found.</p>
        </div>
      );
    }

    return (
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative w-full h-72 md:h-96">
            <Image
              src={place.image_url}
              alt={place.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
              priority
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{place.title}</h1>
            <p className="text-gray-700 mb-4">{place.description}</p>
          </div>
        </div>
      </div>
    );
  } catch (error: any) {
    console.error('Error fetching place:', error.message);
    return (
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <p className="text-red-600 text-lg font-semibold">
          Error loading place details. Please try again later.
        </p>
      </div>
    );
  }
}
