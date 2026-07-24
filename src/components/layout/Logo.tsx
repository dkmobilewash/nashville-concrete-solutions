import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

interface LogoProps {
  /** Tailwind height utility controlling the rendered size, e.g. "h-14". */
  className?: string;
  onClick?: () => void;
  priority?: boolean;
}

export function Logo({ className = "h-14", onClick, priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="inline-flex items-center rounded-md bg-white p-1 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
    >
      <Image
        src="/nashville-concrete-solutions-logo.png"
        alt={`${site.name} logo`}
        width={1172}
        height={906}
        priority={priority}
        className={`w-auto ${className}`}
      />
    </Link>
  );
}
