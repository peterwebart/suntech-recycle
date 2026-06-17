import Image from "next/image";
import Link from "next/link";
import { r2v3 } from "@/data/certification";

type Props = {
  /** Use the white logo for dark backgrounds. */
  variant?: "light" | "dark";
  size?: number;
  /** Show the "R2v3 Certified" caption beside the mark. */
  showText?: boolean;
  /** Wrap in a link to the certification page. */
  linked?: boolean;
  className?: string;
};

/** SERI R2v3 certification mark with optional caption. */
export function CertBadge({
  variant = "light",
  size = 64,
  showText = true,
  linked = true,
  className = "",
}: Props) {
  const src = variant === "dark" ? "/images/r2v3-logo-white.png" : "/images/r2v3-logo.png";

  const inner = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src={src}
        alt="SERI R2v3 certified electronics recycler logo"
        width={size}
        height={size}
        className="shrink-0"
      />
      {showText && (
        <span className="flex flex-col leading-tight">
          <span
            className={`font-display text-[15px] font-semibold ${
              variant === "dark" ? "text-white" : "text-ink"
            }`}
          >
            {r2v3.shortName}
          </span>
          <span
            className={`font-mono text-[11px] uppercase tracking-[0.1em] ${
              variant === "dark" ? "text-white/60" : "text-ink-soft"
            }`}
          >
            SERI R2v3 Standard
          </span>
        </span>
      )}
    </span>
  );

  if (!linked) return inner;

  return (
    <Link
      href="/r2v3-certification"
      aria-label="Learn about our SERI R2v3 certification"
      className="inline-flex transition-opacity hover:opacity-80"
    >
      {inner}
    </Link>
  );
}
