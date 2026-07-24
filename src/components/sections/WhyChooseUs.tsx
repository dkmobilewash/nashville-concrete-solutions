import { Icon } from "@/components/ui/Icon";

const points = [
  {
    icon: "HardHat",
    title: "Local Middle Tennessee Crew",
    desc: "We know the region's clay soil and freeze-thaw swings, and we build for them.",
  },
  {
    icon: "ShieldCheck",
    title: "Drainage-First Approach",
    desc: "Every project is graded to move water away from structures, not toward them.",
  },
  {
    icon: "ThumbsUp",
    title: "Straightforward Quotes",
    desc: "Clear scope and pricing before work starts — no surprise change orders.",
  },
  {
    icon: "Clock",
    title: "Reliable Scheduling",
    desc: "We show up when we say we will and keep you updated through the project.",
  },
];

export function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {points.map((point) => (
        <div key={point.title} className="flex flex-col items-start">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-gray-light text-brand-orange">
            <Icon name={point.icon} className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-brand-charcoal">{point.title}</h3>
          <p className="mt-2 text-base leading-relaxed text-brand-gray">{point.desc}</p>
        </div>
      ))}
    </div>
  );
}
