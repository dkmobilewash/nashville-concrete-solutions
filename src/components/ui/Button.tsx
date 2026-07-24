import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-orange text-white hover:bg-brand-orange-dark focus-visible:outline-brand-orange",
  secondary:
    "bg-white text-brand-charcoal border border-brand-charcoal hover:bg-brand-gray-light focus-visible:outline-brand-charcoal",
  ghost:
    "bg-transparent text-white border border-brand-gray-mid hover:bg-white/10 focus-visible:outline-white",
};

const baseClasses =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

interface CommonProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

interface ButtonAsLink extends CommonProps {
  href: string;
  target?: string;
  rel?: string;
}

interface ButtonAsButton
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const classes = `${baseClasses} ${variantClasses[variant]} ${props.className ?? ""}`;

  if ("href" in props && props.href) {
    const { href, target, rel, children } = props;
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} target={target} rel={rel ?? "noopener noreferrer"} className={classes}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  const { children, ...rest } = buttonProps;
  delete rest.variant;
  delete rest.className;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
