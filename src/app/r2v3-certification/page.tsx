import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CertificationContent } from "@/views/CertificationView";

export const metadata: Metadata = buildMetadata({
  title: "SERI R2v3 Certification — Certified Electronics Recycler | SunTech Recycle",
  description:
    "SunTech Recycle is a SERI R2v3 certified electronics recycler. Learn what R2v3 certification means for data security, compliance, environmental responsibility and downstream accountability.",
  path: "/r2v3-certification",
  locale: "en",
});

export default function CertificationPage() {
  return <CertificationContent locale="en" />;
}
