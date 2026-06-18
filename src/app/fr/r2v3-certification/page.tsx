import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n/dictionaries";
import { CertificationContent } from "@/views/CertificationView";

const t = getDictionary("fr");
export const metadata: Metadata = buildMetadata({
  title: t.certification.metaTitle,
  description: t.certification.metaDescription,
  path: "/r2v3-certification",
  locale: "fr",
});

export default function Page() {
  return <CertificationContent locale="fr" />;
}
