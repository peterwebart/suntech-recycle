import { notFound } from "next/navigation";
import Link from "next/link";
import { locationBusinessSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CertBadge } from "@/components/ui/CertBadge";
import { LocationMap, type MapMarker } from "@/components/map/LocationMap";
import { Reviews } from "@/components/reviews/Reviews";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { PageCta } from "@/components/sections/PageCta";
import {
  type Location,
  getLocation,
  headquartersMarker,
  citiesInCountry,
} from "@/data/locations";
import { getServices } from "@/data/services";
import { site } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

function Breadcrumbsline({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return <Breadcrumbs light items={crumbs} />;
}

function ServicesAvailable({ where, locale }: { where: string; locale: Locale }) {
  const t = getDictionary(locale);
  const services = getServices(locale);
  return (
    <Section tone="light">
      <Container>
        <div data-reveal className="max-w-[60ch]">
          <Eyebrow>{t.locationDetail.available(where)}</Eyebrow>
          <h2 className="mt-3.5 text-[clamp(24px,3.4vw,34px)]">{t.locationDetail.everyService}</h2>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug} data-reveal>
              <Link
                href={lp(locale, `/services/${s.slug}`)}
                className="group flex items-center gap-3 rounded-card border border-line bg-paper p-4 transition-all hover:-translate-y-0.5 hover:border-green-2"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green/10 text-green">
                  <Icon name={s.icon} size={20} />
                </span>
                <span className="font-display text-[15.5px] font-semibold text-ink">{s.shortName}</span>
                <Icon name="arrow-right" size={16} className="ml-auto text-green opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function CountryView({ loc, locale }: { loc: Location; locale: Locale }) {
  const t = getDictionary(locale);
  const crumbs = [
    { name: t.breadcrumbs.home, path: lp(locale, "/") },
    { name: t.breadcrumbs.serviceAreas, path: lp(locale, "/locations") },
    { name: loc.name, path: lp(locale, `/locations/${loc.slug}`) },
  ];
  const all = citiesInCountry(locale, loc.countrySlug);
  const cities = all.filter((l) => l.kind === "city");
  const neighbourhoods = all.filter((l) => l.kind === "neighbourhood");

  const markers: MapMarker[] = cities.map((c) => ({
    lat: c.lat, lng: c.lng, label: c.name, primary: c.isHeadquarters,
  }));
  if (loc.countrySlug === "canada") {
    markers.push({ ...headquartersMarker, label: headquartersMarker.name, primary: true });
  }

  return (
    <>
      <JsonLd data={[locationBusinessSchema(loc), breadcrumbSchema(crumbs)]} />

      <section className="bg-near-black py-[clamp(40px,6vw,72px)] text-white">
        <Container>
          <Breadcrumbsline crumbs={crumbs} />
          <Eyebrow light>{t.breadcrumbs.serviceAreas}</Eyebrow>
          <h1 className="mt-3 max-w-[20ch] text-[clamp(32px,5vw,54px)]">{t.locationDetail.countryH1(loc.name)}</h1>
          <p className="mt-5 max-w-[58ch] text-[clamp(16px,2vw,19px)] text-[#d6e5db]">{loc.intro}</p>
          <div className="mt-7">
            <CertBadge variant="dark" size={52} locale={locale} />
          </div>
        </Container>
      </section>

      <Section tone="light">
        <Container>
          <div data-reveal className="overflow-hidden rounded-card border border-line bg-paper">
            <div className="h-[clamp(320px,42vw,480px)] w-full">
              <LocationMap
                center={{ lat: loc.lat, lng: loc.lng }}
                zoom={loc.zoom}
                markers={markers}
                ariaLabel={`Map of SunTech Recycle service areas across ${loc.name}`}
              />
            </div>
          </div>

          <div data-reveal className="mt-10">
            <h2 className="text-[clamp(22px,3vw,30px)]">{t.locationDetail.citiesWeServe(loc.name)}</h2>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c) => (
              <li key={c.slug} data-reveal>
                <Link
                  href={lp(locale, `/locations/${c.slug}`)}
                  className="group flex h-full flex-col rounded-card border border-line bg-paper p-5 transition-all hover:-translate-y-1 hover:border-green-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-green">{c.region}</span>
                    {c.isHeadquarters && (
                      <span className="rounded-full bg-orange/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[#9a6a00]">
                        {t.common.facility}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-[18px]">{c.name}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-green">
                    {c.name} {t.locationsIndex.servicesSuffix}
                    <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {neighbourhoods.length > 0 && (
            <div data-reveal className="mt-10">
              <h3 className="text-[18px]">{t.locationDetail.montrealNeighbourhoods}</h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {neighbourhoods.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={lp(locale, `/locations/${n.slug}`)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3.5 py-2 text-[13.5px] font-medium text-ink transition-colors hover:border-green-2 hover:text-green"
                    >
                      <Icon name="map-pin" size={13} className="text-green" />
                      {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </Section>

      <WhyChoose locale={locale} tone="paper" />
      <ServicesAvailable where={loc.name} locale={locale} />
      <PageCta locale={locale} title={t.locationDetail.countryCtaTitle(loc.name)} />
    </>
  );
}

function CityView({ loc, locale }: { loc: Location; locale: Locale }) {
  const t = getDictionary(locale);
  const td = t.locationDetail;
  const countryEntry = getLocation(locale, loc.countrySlug);
  const crumbs = [
    { name: t.breadcrumbs.home, path: lp(locale, "/") },
    { name: t.breadcrumbs.serviceAreas, path: lp(locale, "/locations") },
    ...(countryEntry ? [{ name: countryEntry.name, path: lp(locale, `/locations/${countryEntry.slug}`) }] : []),
    { name: loc.name, path: lp(locale, `/locations/${loc.slug}`) },
  ];

  const markers: MapMarker[] = [
    { lat: loc.lat, lng: loc.lng, label: loc.name, primary: loc.isHeadquarters },
  ];
  if (loc.localService && !loc.isHeadquarters) {
    markers.push({ ...headquartersMarker, label: headquartersMarker.name, primary: true });
  }

  const siblings = citiesInCountry(locale, loc.countrySlug)
    .filter((l) => l.slug !== loc.slug && l.kind === "city")
    .slice(0, 6);

  return (
    <>
      <JsonLd data={[locationBusinessSchema(loc), breadcrumbSchema(crumbs)]} />

      <section className="bg-near-black py-[clamp(40px,6vw,72px)] text-white">
        <Container>
          <Breadcrumbsline crumbs={crumbs} />
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow light>{loc.region}</Eyebrow>
            {loc.isHeadquarters && (
              <span className="rounded-full bg-orange/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-orange">
                {t.common.ourFacility}
              </span>
            )}
          </div>
          <h1 className="mt-3 max-w-[22ch] text-[clamp(32px,5vw,54px)]">{td.cityH1(loc.name)}</h1>
          <p className="mt-5 max-w-[58ch] text-[clamp(16px,2vw,19px)] text-[#d6e5db]">{loc.intro}</p>
          <div className="mt-6">
            <CertBadge variant="dark" size={52} locale={locale} />
          </div>
        </Container>
      </section>

      <Section tone="light">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div data-reveal className="overflow-hidden rounded-card border border-line bg-paper">
              <div className="h-[clamp(300px,38vw,440px)] w-full">
                <LocationMap
                  center={{ lat: loc.lat, lng: loc.lng }}
                  zoom={loc.zoom}
                  markers={markers}
                  ariaLabel={`Map of SunTech Recycle service coverage in ${loc.name}`}
                />
              </div>
              <p className="flex items-center gap-2 border-t border-line px-5 py-3 font-mono text-[11.5px] tracking-[0.04em] text-ink-soft">
                <Icon name="map-pin" size={14} className="text-green" />
                {loc.isHeadquarters
                  ? td.facilityCaption(site.address.street)
                  : loc.localService
                    ? td.localCaption(loc.name)
                    : `${loc.name}, ${loc.region}`}
              </p>
            </div>

            <div data-reveal>
              <Eyebrow>{loc.served ? td.areasServed : td.howWeServe}</Eyebrow>
              <h2 className="mt-3 text-[clamp(22px,3vw,30px)]">{td.coverageIn(loc.name)}</h2>
              {loc.served ? (
                <>
                  <p className="mt-3 text-[16px] text-ink-soft">{td.servedIntro}</p>
                  <ul className="mt-4 flex flex-wrap gap-2.5">
                    {loc.served.map((area) => (
                      <li key={area} className="rounded-full border border-line bg-paper px-3.5 py-2 text-[13.5px] font-medium text-ink">
                        {area}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <ul className="mt-4 grid gap-3">
                  {[
                    loc.localService ? td.serveBullets.onsiteFree : td.serveBullets.onsiteProject,
                    td.serveBullets.mailIn,
                    td.serveBullets.certificate,
                    td.serveBullets.custody,
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
                        <Icon name="check" size={13} />
                      </span>
                      <span className="text-[15px] text-ink">{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {loc.reviews && loc.reviews.length > 0 && (
        <Section tone="paper">
          <Container>
            <Reviews reviews={loc.reviews} cityName={loc.name} locale={locale} />
          </Container>
        </Section>
      )}

      <WhyChoose locale={locale} place={loc.name} tone={loc.reviews ? "light" : "paper"} />
      <ServicesAvailable where={loc.name} locale={locale} />

      {siblings.length > 0 && (
        <Section tone="paper">
          <Container>
            <div data-reveal className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-[clamp(22px,3vw,30px)]">{td.otherAreas(countryEntry?.name ?? td.region)}</h2>
              <Link
                href={countryEntry ? lp(locale, `/locations/${countryEntry.slug}`) : lp(locale, "/locations")}
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-green"
              >
                {t.common.viewAllAreas}
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {siblings.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={lp(locale, `/locations/${o.slug}`)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-light px-4 py-2.5 text-[14.5px] font-medium text-ink transition-colors hover:border-green-2 hover:text-green"
                  >
                    <Icon name="map-pin" size={14} className="text-green" />
                    {o.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <PageCta
        locale={locale}
        title={td.cityCtaTitle(loc.name)}
        body={td.cityCtaBody(
          site.phone.display,
          loc.countrySlug === "canada" ? td.acrossCanada : td.inCountry(countryEntry?.name ?? loc.country),
        )}
      />
    </>
  );
}

export function LocationDetailContent({ locale, city }: { locale: Locale; city: string }) {
  const loc = getLocation(locale, city);
  if (!loc) notFound();
  return loc.kind === "country" ? <CountryView loc={loc} locale={locale} /> : <CityView loc={loc} locale={locale} />;
}
