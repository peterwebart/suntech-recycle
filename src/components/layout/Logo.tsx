import Link from "next/link";

/** SunTech leaf-and-circuit mark with wordmark. */
export function Logo({
  className = "",
  onClick,
  href = "/",
}: {
  className?: string;
  onClick?: () => void;
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="SunTech Recycle — home"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 font-display text-[19px] font-bold tracking-[-0.02em] text-ink ${className}`}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M12 2.2c5 0 8.4 3.4 8.4 8.4 0 5.6-4.6 8.8-8.4 11.2-3.8-2.4-8.4-5.6-8.4-11.2C3.6 5.6 7 2.2 12 2.2z"
          fill="#2DBE60"
        />
        <circle cx="9.2" cy="9" r="1.3" fill="#0B2E1B" />
        <circle cx="14.4" cy="11.4" r="1.3" fill="#0B2E1B" />
        <circle cx="10" cy="14.6" r="1.3" fill="#0B2E1B" />
        <path
          d="M9.2 9l5.2 2.4M14.4 11.4 10 14.6"
          stroke="#0B2E1B"
          strokeWidth="1.1"
        />
      </svg>
      <span>
        <span className="text-orange">Sun</span>
        <span className="text-green">Tech</span> Recycle
      </span>
    </Link>
  );
}
