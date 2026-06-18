import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getService, serviceSlugs } from "@/data/services";
import { ServiceDetailContent } from "@/views/ServiceDetailView";

type Params = { params: Promise<{ service: string }> };

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { service } = await params;
  const s = getService("en", service);
  if (!s) return {};
  return buildMetadata({
    title: s.seo.title,
    description: s.seo.description,
    path: `/services/${s.slug}`,
    locale: "en",
    image: `/images/${s.image}.jpg`,
  });
}

export default async function ServiceDetailPage({ params }: Params) {
  const { service } = await params;
  return <ServiceDetailContent locale="en" service={service} />;
}
