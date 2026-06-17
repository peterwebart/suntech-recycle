import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { CertStrip } from "@/components/sections/CertStrip";
import { Metrics } from "@/components/sections/Metrics";
import { Pillars } from "@/components/sections/Pillars";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ChainOfCustody } from "@/components/sections/ChainOfCustody";
import { FreePickup } from "@/components/sections/FreePickup";
import { Industries } from "@/components/sections/Industries";
import { ESG } from "@/components/sections/ESG";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title:
    "SunTech Recycle — R2v3 Certified Electronics Recycling, ITAD & Data Destruction | Greater Montréal",
  description:
    "R2v3 certified IT asset disposition, secure data destruction and commercial electronics recycling for banks, data centres, hospitals, government and enterprise across Greater Montréal. Free business collection with full chain of custody.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <CertStrip />
      <Metrics />
      <Pillars />
      <ServicesPreview />
      <ChainOfCustody />
      <FreePickup />
      <Industries />
      <ESG />
      <WhyChoose tone="light" />
      <FinalCTA />
    </>
  );
}
