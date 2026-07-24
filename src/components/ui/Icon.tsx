import {
  Car,
  Sun,
  Palette,
  Footprints,
  Building2,
  Hammer,
  Layers,
  Warehouse,
  ShieldCheck,
  Clock,
  Award,
  HardHat,
  ThumbsUp,
  MapPin,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Car,
  Sun,
  Palette,
  Footprints,
  Building2,
  Hammer,
  Layers,
  Warehouse,
  ShieldCheck,
  Clock,
  Award,
  HardHat,
  ThumbsUp,
  MapPin,
};

interface IconProps {
  name: string;
  className?: string;
}

/** Resolves a lucide-react icon by name (see src/data/services.ts `icon` field). */
export function Icon({ name, className }: IconProps) {
  const LucideIconComponent = iconMap[name] ?? Building2;
  return <LucideIconComponent className={className} aria-hidden="true" />;
}
