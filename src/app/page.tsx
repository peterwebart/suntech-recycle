import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HomeContent } from "@/views/HomeView";

export const metadata: Metadata = buildMetadata({
  title:
    "SunTech Recycle — R2v3 Certified Electronics Recycling, ITAD & Data Destruction | Greater Montréal",
  description:
    "R2v3 certified IT asset disposition, secure data destruction and commercial electronics recycling for banks, data centres, hospitals, government and enterprise across Greater Montréal. Free business collection with full chain of custody.",
  path: "/",
  locale: "en",
});

export default function HomePage() {
  return <HomeContent locale="en" />;
}
