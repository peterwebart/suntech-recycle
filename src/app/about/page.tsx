import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { AboutContent } from "@/views/AboutView";

export const metadata: Metadata = buildMetadata({
  title: "About SunTech Recycle — R2v3 Certified Commercial Electronics Recycler",
  description:
    "SunTech Recycle is an R2v3 certified commercial electronics recycling, IT asset disposition and secure data destruction partner based in Longueuil, serving businesses across Greater Montréal and North America.",
  path: "/about",
  locale: "en",
});

export default function AboutPage() {
  return <AboutContent locale="en" />;
}
