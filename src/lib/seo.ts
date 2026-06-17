import type { Metadata } from "next";
import { site, fullAddress } from "@/data/site";
import type { Service } from "@/data/services";
import type { Location } from "@/data/locations";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? site.url
).replace(/\/$/, "");

export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

const DEFAULT_OG = "/images/suntech-homepage-hero.jpg";

type BuildMetaArgs = {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Pass false for utility pages that should not be indexed. */
  index?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG,
  index = true,
}: BuildMetaArgs): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: site.name,
      locale: "en_CA",
      images: [{ url: absoluteUrl(image), width: 1200, height: 675, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

/* ── JSON-LD builders ───────────────────────────────────────────────────── */

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: SITE_URL,
    slogan: site.tagline,
    email: site.email,
    telephone: site.phone.tel,
    address: postalAddress,
    areaServed: [
      "Montréal",
      "Laval",
      "Longueuil",
      "Brossard",
      "Boucherville",
      "Saint-Hubert",
      "Terrebonne",
      "Pointe-Claire",
      "Québec",
    ],
    knowsAbout: [
      "IT Asset Disposition",
      "Secure Data Destruction",
      "Electronics Recycling",
      "Data Centre Decommissioning",
      "Metal Recycling",
      "Circular Economy",
      "ESG",
    ],
    sameAs: [site.social.linkedin],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RecyclingCenter",
    "@id": `${SITE_URL}/#localbusiness`,
    name: site.name,
    image: absoluteUrl(DEFAULT_OG),
    url: SITE_URL,
    email: site.email,
    telephone: site.phone.tel,
    priceRange: "$$",
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    description: site.description,
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.seo.description,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      "@type": "Organization",
      name: site.name,
      url: SITE_URL,
    },
    areaServed: { "@type": "AdministrativeArea", name: "Greater Montréal, Québec" },
  };
}

export function locationBusinessSchema(location: Location) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "RecyclingCenter",
    name: `${site.name} — ${location.name}`,
    image: absoluteUrl(DEFAULT_OG),
    url: absoluteUrl(`/locations/${location.slug}`),
    email: site.email,
    telephone: site.phone.tel,
    address: { ...postalAddress, addressLocality: site.address.locality },
    areaServed: { "@type": "City", name: `${location.name}, QC` },
    description: location.intro,
  };
  return schema;
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const napText = fullAddress;
