'use client';
import PlaceCard from '../components/PlaceCard';

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
  return (
    <main className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to TourMe ✈️</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </main>
  );
}
