import type { ReactNode } from "react";
import { Shot } from "@/components/ui/Shot";
import { Eyebrow } from "@/components/ui/Container";

type Props = {
  kicker: string;
  title: string;
  image: string;
  imageAlt: string;
  children: ReactNode;
  reversed?: boolean;
  /** Light text for dark / gradient backgrounds. */
  light?: boolean;
  priority?: boolean;
  sizes?: string;
};

export function FeatureRow({
  kicker,
  title,
  image,
  imageAlt,
  children,
  reversed = false,
  light = false,
  priority = false,
  sizes,
}: Props) {
  return (
    <div
      data-reveal
      className="grid items-center gap-8 lg:grid-cols-2 lg:gap-[clamp(28px,5vw,60px)]"
    >
      <div className={reversed ? "lg:order-2" : "lg:order-1"}>
        <Shot name={image} alt={imageAlt} priority={priority} sizes={sizes} />
      </div>
      <div className={reversed ? "lg:order-1" : "lg:order-2"}>
        <Eyebrow light={light}>{kicker}</Eyebrow>
        <h2
          className={`mt-3 text-[clamp(23px,3vw,34px)] ${light ? "text-white" : "text-ink"}`}
        >
          {title}
        </h2>
        <div
          className={`mt-4 text-[16.5px] leading-relaxed ${light ? "text-white/85" : "text-ink-soft"}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
