'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const placeData = [
  {
    id: 1,
    title: 'Jaipur, India',
    image: 'https://source.unsplash.com/featured/?jaipur',
    description: 'Explore the Pink City and its royal palaces.',
    guide: 'Raj Sharma – Local Jaipur Expert',
  },
  {
    id: 2,
    title: 'Tokyo, Japan',
    image: 'https://source.unsplash.com/featured/?tokyo',
    description: 'Experience futuristic cities and ancient temples.',
    guide: 'Yuki Tanaka – Cultural & Food Tour Guide',
  },
  {
    id: 3,
    title: 'Paris, France',
    image: 'https://source.unsplash.com/featured/?paris',
    description: 'Walk through the romantic streets of Paris.',
    guide: 'Claire Dupont – Local Art & History Enthusiast',
  },
];

export default function PlaceDetailsPage() {
  const { id } = useParams();
  const place = placeData.find((p) => p.id === Number(id));

  if (!place) return <p className="p-6">Place not found.</p>;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img src={place.image} alt={place.title} className="w-full h-72 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{place.title}</h1>
          <p className="text-gray-700 mb-4">{place.description}</p>
          <p className="text-blue-700 font-medium">{place.guide}</p>
        </div>
      </div>
    </div>
  );
}
