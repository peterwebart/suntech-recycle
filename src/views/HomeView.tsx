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
import { type Locale } from "@/i18n/config";

export function HomeContent({ locale = "en" }: { locale?: Locale }) {
  return (
    <>
      <Hero locale={locale} />
      <CertStrip locale={locale} />
      <Metrics locale={locale} />
      <Pillars locale={locale} />
      <ServicesPreview locale={locale} />
      <ChainOfCustody locale={locale} />
      <FreePickup locale={locale} />
      <Industries locale={locale} />
      <ESG locale={locale} />
      <WhyChoose locale={locale} tone="light" />
      <FinalCTA locale={locale} />
    </>
  );
}
