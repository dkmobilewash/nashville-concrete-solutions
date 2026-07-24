import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

interface CtaSectionProps {
  headline?: string;
  subhead?: string;
}

export function CtaSection({
  headline = "Ready to Start Your Concrete Project?",
  subhead = "Get a straightforward quote from a local Middle Tennessee concrete crew.",
}: CtaSectionProps) {
  return (
    <section className="bg-brand-orange">
      <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">{headline}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-white/90">{subhead}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="secondary">
            Get a Free Quote
          </Button>
          <Button href={`tel:${site.phoneHref}`} variant="ghost" className="border-white text-white hover:bg-white/10">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
