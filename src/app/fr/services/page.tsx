import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n/dictionaries";
import { ServicesIndexContent } from "@/views/ServicesIndexView";

const t = getDictionary("fr");
export const metadata: Metadata = buildMetadata({
  title: t.servicesIndex.metaTitle,
  description: t.servicesIndex.metaDescription,
  path: "/services",
  locale: "fr",
});

export default function Page() {
  return <ServicesIndexContent locale="fr" />;
}
