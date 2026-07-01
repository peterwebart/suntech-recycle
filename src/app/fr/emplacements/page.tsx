import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n/dictionaries";
import { LocationsIndexContent } from "@/views/LocationsIndexView";

const t = getDictionary("fr");
export const metadata: Metadata = buildMetadata({
  title: t.locationsIndex.metaTitle,
  description: t.locationsIndex.metaDescription,
  path: "/locations",
  locale: "fr",
});

export default function Page() {
  return <LocationsIndexContent locale="fr" />;
}
