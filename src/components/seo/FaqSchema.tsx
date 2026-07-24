import { JsonLdScript } from "./JsonLdScript";

export interface FaqSchemaItem {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  faqs: FaqSchemaItem[];
}

export function FaqSchema({ faqs }: FaqSchemaProps) {
  if (!faqs.length) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLdScript data={data} />;
}
