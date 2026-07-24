import { FaqAccordion, type FaqAccordionItem } from "@/components/ui/FaqAccordion";
import { FaqSchema } from "@/components/seo/FaqSchema";

interface FaqSectionProps {
  faqs: FaqAccordionItem[];
  title?: string;
}

export function FaqSection({ faqs, title = "Frequently Asked Questions" }: FaqSectionProps) {
  if (faqs.length === 0) return null;

  return (
    <div>
      <h2 className="text-3xl font-bold text-brand-charcoal">{title}</h2>
      <div className="mt-6">
        <FaqAccordion faqs={faqs} />
      </div>
      <FaqSchema faqs={faqs} />
    </div>
  );
}
