import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n/dictionaries";
import { AboutContent } from "@/views/AboutView";

const t = getDictionary("fr");
export const metadata: Metadata = buildMetadata({
  title: t.about.metaTitle,
  description: t.about.metaDescription,
  path: "/about",
  locale: "fr",
});

export default function Page() {
  return <AboutContent locale="fr" />;
}
