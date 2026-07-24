import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbNavItem {
  name: string;
  href: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbNavItem[];
  /** Use "dark" when this nav sits on a charcoal strip, for AA contrast. */
  variant?: "light" | "dark";
}

export function BreadcrumbNav({ items, variant = "light" }: BreadcrumbNavProps) {
  const linkClass =
    variant === "dark"
      ? "text-brand-gray-mid hover:text-white"
      : "text-brand-gray hover:text-brand-navy";
  const activeClass = variant === "dark" ? "text-white" : "text-brand-navy";

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="h-4 w-4 opacity-60" aria-hidden="true" />}
              {isLast ? (
                <span className={`font-semibold ${activeClass}`} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className={`${linkClass} transition-colors`}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
