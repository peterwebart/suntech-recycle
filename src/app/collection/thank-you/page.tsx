import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n/dictionaries";
import { CollectionThankYouContent } from "@/views/CollectionThankYouView";

const t = getDictionary("en");
export const metadata: Metadata = buildMetadata({
  title: t.thankYou.metaTitle,
  description: t.thankYou.metaDescription,
  path: "/collection/thank-you",
  locale: "en",
  index: false,
});

export default function ThankYouPage() {
  return <CollectionThankYouContent locale="en" />;
}
