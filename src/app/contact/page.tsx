import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ContactContent } from "@/views/ContactView";

export const metadata: Metadata = buildMetadata({
  title: "Contact SunTech Recycle | Free Corporate Recycling Quote",
  description:
    "Contact SunTech Recycle in Longueuil for R2v3 certified electronics recycling, secure data destruction and ITAD. Request a collection, a recycling assessment or a secure destruction quote across Greater Montréal.",
  path: "/contact",
  locale: "en",
});

export default function ContactPage() {
  return <ContactContent locale="en" />;
}
