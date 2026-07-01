import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LocationsIndexContent } from "@/views/LocationsIndexView";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas — Canada & USA | SunTech Recycle",
  description:
    "R2v3 certified electronics recycling, secure data destruction and ITAD. Free on-site collection across Greater Montréal, plus secure service for businesses across Canada and the United States.",
  path: "/locations",
  locale: "en",
});

export default function LocationsPage() {
  return <LocationsIndexContent locale="en" />;
}
