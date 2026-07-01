import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

type Props = {
  /** Use the white logo for dark backgrounds. */
  variant?: "light" | "dark";
  size?: number;
  /** Show the caption beside the mark. */
  showText?: boolean;
  /** Wrap in a link to the certification page. */
  linked?: boolean;
  className?: string;
  locale?: Locale;
};

/** SERI R2v3 certification mark with optional caption. */
export function CertBadge({
  variant = "light",
  size = 64,
  showText = true,
  linked = true,
  className = "",
  locale = "en",
}: Props) {
  const t = getDictionary(locale).certBadge;
  const src = variant === "dark" ? "/images/r2v3-logo-white.png" : "/images/r2v3-logo.png";

  const inner = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src={src}
        alt="SERI R2v3 certified electronics recycler logo"
        width={size}
        height={size}
        className="shrink-0 rounded-lg ring-1 ring-black/5"
      />
      {showText && (
        <span className="flex flex-col leading-tight">
          <span
            className={`font-display text-[15px] font-semibold ${
              variant === "dark" ? "text-white" : "text-ink"
            }`}
          >
            {t.caption}
          </span>
          <span
            className={`font-mono text-[11px] uppercase tracking-[0.1em] ${
              variant === "dark" ? "text-white/60" : "text-ink-soft"
            }`}
          >
            {t.sub}
          </span>
        </span>
      )}
    </span>
  );

  if (!linked) return inner;

  return (
    <Link
      href={lp(locale, "/r2v3-certification")}
      aria-label="Learn about our SERI R2v3 certification"
      className="inline-flex transition-opacity hover:opacity-80"
    >
      {inner}
    </Link>
  );
}
