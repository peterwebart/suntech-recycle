import { breadcrumbSchema, localBusinessSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CertBadge } from "@/components/ui/CertBadge";
import { LocationMap, type MapMarker } from "@/components/map/LocationMap";
import { site, fullAddress } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

const mapsQuery = encodeURIComponent(fullAddress);
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export function ContactContent({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const tc = t.common;
  const cc = t.contact;
  const quoteSubject = encodeURIComponent(cc.mailSubject);
  const quoteBody = encodeURIComponent(cc.mailBody);
  const crumbs = [
    { name: t.breadcrumbs.home, path: lp(locale, "/") },
    { name: t.breadcrumbs.contact, path: lp(locale, "/contact") },
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
          <Eyebrow light>{cc.eyebrow}</Eyebrow>
          <h1 className="mt-3 max-w-[20ch] text-[clamp(34px,5.4vw,56px)]">{cc.h1}</h1>
          <p className="mt-5 max-w-[56ch] text-[clamp(16px,2vw,19px)] text-[#d6e5db]">{cc.intro}</p>
          <div className="mt-7">
            <CertBadge variant="dark" size={52} locale={locale} />
          </div>
        </Container>
      </section>

      <Section tone="light">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Details */}
            <div data-reveal>
              <h2 className="text-[clamp(22px,3vw,30px)]">{cc.getInTouch}</h2>
              <ul className="mt-6 grid gap-5">
                <li className="flex items-start gap-3.5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                    <Icon name="map-pin" size={20} />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">{tc.facility}</span>
                    <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-[16.5px] font-medium text-ink transition-colors hover:text-green">
                      {fullAddress}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                    <Icon name="phone" size={18} />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">{cc.phone}</span>
                    <a href={`tel:${site.phone.tel}`} className="mt-1 block text-[16.5px] font-medium text-ink transition-colors hover:text-green">
                      {site.phone.display}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                    <Icon name="mail" size={18} />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">{cc.email}</span>
                    <a href={`mailto:${site.email}`} className="mt-1 block break-all text-[16.5px] font-medium text-ink transition-colors hover:text-green">
                      {site.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                    <Icon name="clock" size={18} />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">{cc.hours}</span>
                    {site.hours.map((h) => (
                      <span key={h.days} className="mt-1 block text-[16.5px] font-medium text-ink">
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <Button href={`mailto:${site.email}?subject=${quoteSubject}&body=${quoteBody}`} variant="primary" size="lg" icon="arrow-right">
                  {cc.emailQuote}
                </Button>
                <Button href={`tel:${site.phone.tel}`} variant="ghost-dark" size="lg" icon="phone">
                  {tc.callNow}
                </Button>
              </div>
            </div>

            {/* Map */}
            <div data-reveal className="overflow-hidden rounded-card border border-line bg-paper">
              <div className="h-[clamp(320px,42vw,480px)] w-full">
                <LocationMap
                  center={{ lat: site.geo.lat, lng: site.geo.lng }}
                  zoom={14}
                  markers={markers}
                  ariaLabel={`Map showing the SunTech Recycle facility at ${fullAddress}`}
                />
              </div>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-t border-line px-5 py-3.5 text-[14px] font-semibold text-green transition-colors hover:bg-light">
                <Icon name="map-pin" size={16} />
                {tc.getDirections}
                <Icon name="arrow-up-right" size={15} className="ml-auto" />
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
