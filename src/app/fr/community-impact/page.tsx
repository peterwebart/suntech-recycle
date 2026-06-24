import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n/dictionaries";
import { CommunityImpactContent } from "@/views/CommunityImpactView";

const t = getDictionary("fr");
export const metadata: Metadata = buildMetadata({
  title: t.communityPage.metaTitle,
  description: t.communityPage.metaDescription,
  path: "/community-impact",
  locale: "fr",
  image: "/images/suntech-community-team.jpg",
});

export default function CommunityImpactPageFr() {
  return <CommunityImpactContent locale="fr" />;
}
