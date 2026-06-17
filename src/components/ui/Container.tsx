import type { ElementType, ReactNode } from "react";

/** Centred content column with responsive horizontal padding. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}

type SectionTone = "light" | "paper" | "ink" | "forest";

const TONES: Record<SectionTone, string> = {
  light: "bg-light text-ink",
  paper: "bg-paper text-ink",
  ink: "bg-ink text-white",
  forest: "bg-forest text-white",
};

/** Vertical-rhythm section wrapper with background tone variants. */
export function Section({
  children,
  tone = "light",
  className = "",
  id,
  as: Tag = "section",
}: {
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
  id?: string;
  as?: ElementType;
}) {
  return (
    <Tag
      id={id}
      className={`py-16 sm:py-20 lg:py-[100px] ${TONES[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Mono micro-label used above headings. */
export function Eyebrow({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-[12px] font-medium uppercase tracking-[0.16em] ${
        light ? "text-green-2" : "text-green"
      } ${className}`}
    >
      {children}
    </span>
  );
}
