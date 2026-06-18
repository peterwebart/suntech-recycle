import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getLocation, locationSlugs } from "@/data/locations";
import { LocationDetailContent } from "@/views/LocationDetailView";

type Params = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return locationSlugs.map((city) => ({ city }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation("en", city);
  if (!loc) return {};
  return buildMetadata({
    title: loc.seo.title,
    description: loc.seo.description,
    path: `/locations/${loc.slug}`,
    locale: "en",
  });
}

export default async function LocationPage({ params }: Params) {
  const { city } = await params;
  return <LocationDetailContent locale="en" city={city} />;
}
