import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

interface HeroSectionProps {
  headline: string;
  subhead: string;
  ctaText?: string;
  ctaHref?: string;
  showPhoneCta?: boolean;
  /** Optional background photo (path relative to /public). Falls back to a solid navy background. */
  image?: string;
  imageAlt?: string;
}

export function HeroSection({
  headline,
  subhead,
  ctaText = "Get a Free Quote",
  ctaHref = "/contact",
  showPhoneCta = true,
  image,
  imageAlt = "",
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/85 to-brand-navy/70" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-gray-mid">{subhead}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={ctaHref} variant="primary">
              {ctaText}
            </Button>
            {showPhoneCta && (
              <Button href={`tel:${site.phoneHref}`} variant="ghost">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {site.phone}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
