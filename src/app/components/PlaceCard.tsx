'use client';

import Image from 'next/image';
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
        <div className="relative w-full h-48">
          <Image
            src={place.image}
            alt={place.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold">{place.title}</h2>
          <p className="text-gray-600 text-sm">{place.description}</p>
        </div>
      </div>
    </Link>
  );
}
