import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ServicesIndexContent } from "@/views/ServicesIndexView";

export const metadata: Metadata = buildMetadata({
  title: "Services — Electronics Recycling, ITAD & Data Destruction | SunTech Recycle",
  description:
    "Certified electronics recycling, secure data destruction, IT asset disposition, data centre decommissioning and metal recovery for enterprise across Greater Montréal and Québec.",
  path: "/services",
  locale: "en",
});

export default function ServicesPage() {
  return <ServicesIndexContent locale="en" />;
}
