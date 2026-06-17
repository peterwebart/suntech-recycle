import type { Metadata } from "next";
import Link from "next/link";
import {
  buildMetadata,
  breadcrumbSchema,
  localBusinessSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CertBadge } from "@/components/ui/CertBadge";
import { LocationMap, type MapMarker } from "@/components/map/LocationMap";
import { site, fullAddress } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact SunTech Recycle | Free Corporate Recycling Quote",
  description:
    "Contact SunTech Recycle in Longueuil for R2v3 certified electronics recycling, secure data destruction and ITAD. Request a collection, a recycling assessment or a secure destruction quote across Greater Montréal.",
  path: "/contact",
});

const mapsQuery = encodeURIComponent(fullAddress);
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const quoteSubject = encodeURIComponent("Corporate recycling quote request");
const quoteBody = encodeURIComponent(
  "Hi SunTech,\n\nWe'd like a quote. Roughly what we need to retire:\n- Equipment / volume:\n- Location:\n- Data destruction required (yes/no):\n- Timeline:\n\nThanks,",
);

export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  const markers: MapMarker[] = [
    { lat: site.geo.lat, lng: site.geo.lng, label: `${site.name} — Facility`, primary: true },
  ];

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(crumbs)]} />

      <section className="bg-near-black py-[clamp(40px,6vw,72px)] text-white">
        <Container>
          <Breadcrumbs light items={crumbs} />
          <Eyebrow light>Contact</Eyebrow>
          <h1 className="mt-3 max-w-[20ch] text-[clamp(34px,5.4vw,56px)]">
            Request a collection or a secure destruction quote.
          </h1>
          <p className="mt-5 max-w-[56ch] text-[clamp(16px,2vw,19px)] text-[#d6e5db]">
            Tell us roughly what you need to retire and we respond within one
            business day with a scope and a quote. For active server rooms and
            regulated environments, we&rsquo;ll scope on-site or witnessed
            destruction.
          </p>
          <div className="mt-7">
            <CertBadge variant="dark" size={52} />
          </div>
        </Container>
      </section>

      <Section tone="light">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Details */}
            <div data-reveal>
              <h2 className="text-[clamp(22px,3vw,30px)]">Get in touch</h2>
              <ul className="mt-6 grid gap-5">
                <li className="flex items-start gap-3.5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                    <Icon name="map-pin" size={20} />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
                      Facility
                    </span>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-[16.5px] font-medium text-ink transition-colors hover:text-green"
                    >
                      {fullAddress}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                    <Icon name="phone" size={18} />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
                      Phone
                    </span>
                    <a
                      href={`tel:${site.phone.tel}`}
                      className="mt-1 block text-[16.5px] font-medium text-ink transition-colors hover:text-green"
                    >
                      {site.phone.display}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                    <Icon name="mail" size={18} />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
                      Email
                    </span>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1 block break-all text-[16.5px] font-medium text-ink transition-colors hover:text-green"
                    >
                      {site.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                    <Icon name="clock" size={18} />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
                      Hours
                    </span>
                    {site.hours.map((h) => (
                      <span
                        key={h.days}
                        className="mt-1 block text-[16.5px] font-medium text-ink"
                      >
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <Button
                  href={`mailto:${site.email}?subject=${quoteSubject}&body=${quoteBody}`}
                  variant="primary"
                  size="lg"
                  icon="arrow-right"
                >
                  Email a quote request
                </Button>
                <Button href={`tel:${site.phone.tel}`} variant="ghost-dark" size="lg" icon="phone">
                  Call now
                </Button>
              </div>
              <p className="mt-4 text-[14px] text-ink-soft">
                Booking a pickup?{" "}
                <Link href="/collection" className="font-semibold text-green hover:underline">
                  Request a collection →
                </Link>
              </p>
            </div>

            {/* Map */}
            <div
              data-reveal
              className="overflow-hidden rounded-card border border-line bg-paper"
            >
              <div className="h-[clamp(320px,42vw,480px)] w-full">
                <LocationMap
                  center={{ lat: site.geo.lat, lng: site.geo.lng }}
                  zoom={14}
                  markers={markers}
                  ariaLabel={`Map showing the SunTech Recycle facility at ${fullAddress}`}
                />
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-t border-line px-5 py-3.5 text-[14px] font-semibold text-green transition-colors hover:bg-light"
              >
                <Icon name="map-pin" size={16} />
                Get directions
                <Icon name="arrow-up-right" size={15} className="ml-auto" />
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
