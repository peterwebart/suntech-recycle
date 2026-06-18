import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n/dictionaries";
import { ContactContent } from "@/views/ContactView";

const t = getDictionary("fr");
export const metadata: Metadata = buildMetadata({
  title: t.contact.metaTitle,
  description: t.contact.metaDescription,
  path: "/contact",
  locale: "fr",
});

export default function Page() {
  return <ContactContent locale="fr" />;
}
