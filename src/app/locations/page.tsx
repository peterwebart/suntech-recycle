import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CertBadge } from "@/components/ui/CertBadge";
import { LocationMap, type MapMarker } from "@/components/map/LocationMap";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { PageCta } from "@/components/sections/PageCta";
import {
  locations,
  countryList,
  hubCities,
  citiesInCountry,
  headquartersMarker,
} from "@/data/locations";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas — Canada, USA & Mexico | SunTech Recycle",
  description:
    "R2v3 certified electronics recycling, secure data destruction and ITAD. Free on-site collection across Greater Montréal, plus secure service for businesses across Canada, the United States and Mexico.",
  path: "/locations",
});

export default function LocationsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service areas", path: "/locations" },
  ];

  // Overview map: every city marker (skip dense neighbourhood pins) + the HQ.
  const markers: MapMarker[] = [
    { ...headquartersMarker, label: headquartersMarker.name, primary: true },
    ...locations
      .filter((l) => l.kind === "city" && !l.isHeadquarters)
      .map((l) => ({ lat: l.lat, lng: l.lng, label: l.name })),
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="bg-near-black py-[clamp(40px,6vw,72px)] text-white">
        <Container>
          <Breadcrumbs light items={crumbs} />
          <Eyebrow light>Service areas</Eyebrow>
          <h1 className="mt-3 max-w-[20ch] text-[clamp(34px,5.4vw,56px)]">
            Local in Montréal. Certified across North America.
          </h1>
          <p className="mt-5 max-w-[60ch] text-[clamp(16px,2vw,19px)] text-[#d6e5db]">
            From our facility in Longueuil we provide fast, free on-site
            collection across Greater Montréal — and secure, fully trackable IT
            asset disposition and data destruction for businesses across Canada,
            the United States and Mexico.
          </p>
          <div className="mt-7">
            <CertBadge variant="dark" size={52} />
          </div>
        </Container>
      </section>

      <Section tone="light">
        <Container>
          <div
            data-reveal
            className="overflow-hidden rounded-card border border-line bg-paper"
          >
            <div className="h-[clamp(320px,46vw,520px)] w-full">
              <LocationMap
                center={{ lat: 40, lng: -95 }}
                zoom={3}
                markers={markers}
                ariaLabel="Map of SunTech Recycle service areas across North America"
              />
            </div>
            <p className="flex items-center gap-2 border-t border-line px-5 py-3 font-mono text-[11.5px] tracking-[0.04em] text-ink-soft">
              <Icon name="map-pin" size={14} className="text-orange" />
              Orange marks our Longueuil facility · green marks cities we serve
            </p>
          </div>
        </Container>
      </Section>

      {/* Greater Montréal hubs */}
      <Section tone="paper">
        <Container>
          <div data-reveal className="max-w-[64ch]">
            <Eyebrow>Greater Montréal — our home region</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(24px,3.6vw,36px)]">
              Free on-site collection, same-week scheduling
            </h2>
            <p className="mt-4 text-[17px] text-ink-soft">
              Across the South Shore, the Island, the North Shore and the West
              Island — with the same documented chain of custody on every asset.
            </p>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hubCities.map((l, i) => (
              <li
                key={l.slug}
                data-reveal
                style={{ "--reveal-delay": `${(i % 4) * 40}ms` } as React.CSSProperties}
              >
                <Link
                  href={`/locations/${l.slug}`}
                  className="group flex h-full flex-col rounded-card border border-line bg-light p-5 transition-all hover:-translate-y-1 hover:border-green-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-green">
                      {l.region}
                    </span>
                    {l.isHeadquarters && (
                      <span className="rounded-full bg-orange/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[#9a6a00]">
                        Facility
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-[19px]">{l.name}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-green">
                    {l.name} services
                    <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Countries */}
      <Section tone="light">
        <Container>
          <div data-reveal className="max-w-[64ch]">
            <Eyebrow>Across North America</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(24px,3.6vw,36px)]">
              Secure ITAD &amp; data destruction, country-wide
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {countryList.map((c) => {
              const cities = citiesInCountry(c.slug).filter((l) => l.kind === "city");
              return (
                <div
                  key={c.slug}
                  data-reveal
                  className="flex flex-col rounded-card border border-line bg-paper p-7"
                >
                  <h3 className="text-[22px]">{c.name}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                    {c.intro.split(" — ")[0]}.
                  </p>
                  <ul className="mt-4 flex flex-1 flex-wrap content-start gap-2">
                    {cities.slice(0, 8).map((city) => (
                      <li key={city.slug}>
                        <Link
                          href={`/locations/${city.slug}`}
                          className="inline-block rounded-full border border-line px-3 py-1.5 text-[13px] font-medium text-ink-soft transition-colors hover:border-green-2 hover:text-green"
                        >
                          {city.name}
                        </Link>
                      </li>
                    ))}
                    {cities.length > 8 && (
                      <li className="self-center font-mono text-[12px] text-ink-soft">
                        +{cities.length - 8} more
                      </li>
                    )}
                  </ul>
                  <Link
                    href={`/locations/${c.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-green"
                  >
                    All {c.name} areas
                    <Icon name="arrow-right" size={15} />
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <WhyChoose tone="paper" />
      <PageCta />
    </>
  );
}
