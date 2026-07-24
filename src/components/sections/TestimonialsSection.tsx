import { TestimonialCard, type Testimonial } from "@/components/ui/TestimonialCard";

// NEEDS INPUT: these are placeholder/sample testimonials for layout purposes
// only. Replace with real, attributable customer reviews before publishing —
// never present fabricated quotes as genuine customer feedback.
const sampleTestimonials: Testimonial[] = [
  {
    quote: "Sample placeholder review — replace with a real customer testimonial before launch.",
    author: "Sample Customer",
    location: "Placeholder, TN",
    rating: 5,
  },
  {
    quote: "Sample placeholder review — replace with a real customer testimonial before launch.",
    author: "Sample Customer",
    location: "Placeholder, TN",
    rating: 5,
  },
  {
    quote: "Sample placeholder review — replace with a real customer testimonial before launch.",
    author: "Sample Customer",
    location: "Placeholder, TN",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-brand-accent">
        Placeholder content — pending real customer reviews
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sampleTestimonials.map((testimonial, i) => (
          <TestimonialCard key={i} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
