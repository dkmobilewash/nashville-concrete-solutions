import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "./Icon";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-lg border border-brand-gray-mid bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-brand-gray-light text-brand-orange">
        <Icon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-brand-charcoal">{service.name}</h3>
      <p className="mt-2 text-base leading-relaxed text-brand-gray">
        {service.heroSubhead}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 font-semibold text-brand-orange">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
