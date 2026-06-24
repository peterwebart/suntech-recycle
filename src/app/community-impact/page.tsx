import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n/dictionaries";
import { CommunityImpactContent } from "@/views/CommunityImpactView";

const t = getDictionary("en");
export const metadata: Metadata = buildMetadata({
  title: t.communityPage.metaTitle,
  description: t.communityPage.metaDescription,
  path: "/community-impact",
  locale: "en",
  image: "/images/suntech-community-team.jpg",
});

export default function CommunityImpactPage() {
  return <CommunityImpactContent locale="en" />;
}
