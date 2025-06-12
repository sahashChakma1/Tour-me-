import { createClient } from '@/lib/supabaseServer'; // adjust path as needed
import Image from 'next/image';

export default async function PlaceDetailsPage({ params }: { params: { id: string } }) {
  const supabase = createClient();

  const { data: place, error } = await supabase
  .from('places')
  .select('*')
  .eq('id', params.id)
  .single();

if (error) {
  console.error('Error fetching place:', error.message);
  return <p className="p-6 text-red-600">Something went wrong. Please try again later.</p>;
}

if (!place) return <p className="p-6">Place not found.</p>;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative w-full h-72">
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
}
