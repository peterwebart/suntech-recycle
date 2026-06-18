import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n/dictionaries";
import { CollectionContent } from "@/views/CollectionView";

const t = getDictionary("fr");
export const metadata: Metadata = buildMetadata({
  title: t.collection.metaTitle,
  description: t.collection.metaDescription,
  path: "/collection",
  locale: "fr",
});

export default function Page() {
  return <CollectionContent locale="fr" />;
}
