import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";

type Variant = "primary" | "dark" | "orange" | "ghost" | "ghost-dark";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-green text-white hover:bg-green-2",
  dark: "bg-ink text-white hover:bg-black",
  orange: "bg-orange text-ink hover:brightness-105",
  ghost:
    "bg-transparent text-white border-white/40 hover:border-white hover:bg-white/10",
  "ghost-dark": "bg-transparent text-ink border-line hover:border-ink",
};

const SIZES: Record<Size, string> = {
  md: "px-6 py-3.5 text-[15px]",
  lg: "px-7 py-4 text-base",
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-transparent font-semibold whitespace-nowrap transition-[transform,background-color,border-color,filter] duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  className?: string;
};

function Inner({ children, icon }: { children: ReactNode; icon?: IconName }) {
  return (
    <>
      {children}
      {icon && (
        <Icon
          name={icon}
          size={18}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );
}

type ButtonLinkProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  prefetch?: boolean;
  "aria-label"?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
};

/** Link-styled button. Renders a Next <Link> internally, or <a> for external/tel/mailto. */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  target,
  rel,
  prefetch,
  ...aria
}: ButtonLinkProps) {
  const cls = `${base} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  const external =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");
  if (external) {
    return (
      <a href={href} target={target} rel={rel} className={cls} {...aria}>
        <Inner icon={icon}>{children}</Inner>
      </a>
    );
  }
  return (
    <Link href={href} prefetch={prefetch} className={cls} {...aria}>
      <Inner icon={icon}>{children}</Inner>
    </Link>
  );
}

/** Native <button> with the same styling, for client-side actions. */
export function ButtonAction({
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = `${base} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  return (
    <button className={cls} {...rest}>
      <Inner icon={icon}>{children}</Inner>
    </button>
  );
}
