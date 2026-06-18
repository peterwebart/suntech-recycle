import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CollectionContent } from "@/views/CollectionView";

export const metadata: Metadata = buildMetadata({
  title: "Request a Free Business Collection | SunTech Recycle",
  description:
    "Book a free, R2v3 certified electronics collection for your business. Computers, servers, monitors and IT assets collected with sealed transport, secure data destruction and a serialized certificate. Free on-site collection across Greater Montréal; secure service across Canada, the USA and Mexico.",
  path: "/collection",
  locale: "en",
});

export default function CollectionPage() {
  return <CollectionContent locale="en" />;
}
