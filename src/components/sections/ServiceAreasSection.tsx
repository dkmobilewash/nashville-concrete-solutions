import { cities } from "@/data/cities";
import { CityCard } from "@/components/ui/CityCard";

export function ServiceAreasSection() {
  if (cities.length === 0) {
    return (
      <p className="text-base text-brand-gray">
        Service area details are coming soon. Contact us to confirm coverage in your area.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cities.map((city) => (
        <CityCard key={city.slug} city={city} />
      ))}
    </div>
  );
}
