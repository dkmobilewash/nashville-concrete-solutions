import { Quote, Star } from "lucide-react";

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col rounded-lg bg-white p-6 shadow-sm">
      <Quote className="h-6 w-6 text-brand-accent" aria-hidden="true" />
      <div className="mt-3 flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < testimonial.rating ? "fill-brand-accent text-brand-accent" : "text-brand-gray-mid"}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="mt-4 flex-1 text-base leading-relaxed text-brand-gray">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <p className="mt-4 font-semibold text-brand-navy">{testimonial.author}</p>
      <p className="text-sm text-brand-gray">{testimonial.location}</p>
    </div>
  );
}
