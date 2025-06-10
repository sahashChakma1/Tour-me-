import Link from 'next/link';

type Place = {
  id: number;
  title: string;
  image: string;
  description: string;
};

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <Link href={`/place/${place.id}`}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer">
        <img src={place.image} alt={place.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{place.title}</h2>
          <p className="text-gray-600 text-sm">{place.description}</p>
        </div>
      </div>
    </Link>
  );
}
