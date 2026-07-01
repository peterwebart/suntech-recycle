import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n/dictionaries";
import { CollectionThankYouContent } from "@/views/CollectionThankYouView";

const t = getDictionary("fr");
export const metadata: Metadata = buildMetadata({
  title: t.thankYou.metaTitle,
  description: t.thankYou.metaDescription,
  path: "/collection/thank-you",
  locale: "fr",
  index: false,
});

export default function ThankYouPageFr() {
  return <CollectionThankYouContent locale="fr" />;
}
