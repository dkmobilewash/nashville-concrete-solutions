import { ChevronDown } from "lucide-react";

export interface FaqAccordionItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqAccordionItem[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  return (
    <div className="divide-y divide-brand-gray-mid rounded-lg border border-brand-gray-mid bg-white">
      {faqs.map((faq) => (
        <details key={faq.question} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-navy marker:content-none">
            {faq.question}
            <ChevronDown
              className="h-5 w-5 shrink-0 text-brand-accent transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-3 text-base leading-relaxed text-brand-gray">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
