import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import type { City } from "@/data/cities";

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Link
      href={`/service-areas/${city.slug}`}
      className="group flex flex-col rounded-lg border border-brand-gray-mid bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
    >
      <div className="mb-3 flex items-center gap-2 text-brand-accent">
        <MapPin className="h-5 w-5" aria-hidden="true" />
        <span className="text-sm font-semibold uppercase tracking-wide">{city.county}</span>
      </div>
      <h3 className="text-lg font-semibold text-brand-navy">{city.name}, TN</h3>
      <p className="mt-2 text-base leading-relaxed text-brand-gray">{city.subhead}</p>
      <span className="mt-4 inline-flex items-center gap-1 font-semibold text-brand-accent">
        View service area
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
