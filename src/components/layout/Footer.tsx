"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { Icon } from "@/components/ui/Icon";
import { CertBadge } from "@/components/ui/CertBadge";
import { site, fullAddress } from "@/data/site";
import { getServices } from "@/data/services";
import { getCountryList, getHubCities } from "@/data/locations";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, isLocale, type Locale } from "@/i18n/config";

export function Footer() {
  const pathname = usePathname();
  const seg = pathname.split("/").filter(Boolean)[0];
  const locale: Locale = seg && isLocale(seg) ? seg : "en";
  const year = new Date().getFullYear();
  const t = getDictionary(locale);
  const f = t.footer;
  const services = getServices(locale);
  const countryList = getCountryList(locale);
  const hubCities = getHubCities(locale);

  return (
    <footer className="bg-near-black text-[#c6d3c9]">
      <div className="mx-auto w-full max-w-[1180px] px-5 pb-7 pt-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          {/* Brand + blurb */}
          <div>
            <Logo className="!text-white" />
            <p className="mt-4 max-w-[34ch] text-[14.5px] leading-relaxed text-[#9db8a5]">
              {f.blurb}
            </p>
            <div className="mt-5">
              <CertBadge variant="dark" size={48} locale={locale} />
            </div>
            <nav aria-label={f.company} className="mt-6">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
                <li>
                  <Link href={lp(locale, "/about")} className="transition-colors hover:text-white">
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link href={lp(locale, "/r2v3-certification")} className="transition-colors hover:text-white">
                    {t.breadcrumbs.certification}
                  </Link>
                </li>
                <li>
                  <Link href={lp(locale, "/contact")} className="transition-colors hover:text-white">
                    {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services */}
          <nav aria-label={f.services}>
            <h4 className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-[#83a48d]">
              {f.services}
            </h4>
            <ul className="grid gap-2.5 text-[14.5px]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={lp(locale, `/services/${s.slug}`)} className="transition-colors hover:text-white">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service areas */}
          <nav aria-label={f.serviceAreas}>
            <h4 className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-[#83a48d]">
              {f.serviceAreas}
            </h4>
            <ul className="grid gap-2.5 text-[14.5px]">
              {countryList.map((c) => (
                <li key={c.slug}>
                  <Link href={lp(locale, `/locations/${c.slug}`)} className="font-semibold transition-colors hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
              {hubCities.slice(0, 4).map((l) => (
                <li key={l.slug}>
                  <Link href={lp(locale, `/locations/${l.slug}`)} className="transition-colors hover:text-white">
                    {l.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={lp(locale, "/locations")} className="text-[#83a48d] transition-colors hover:text-white">
                  {f.allServiceAreas}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact / NAP */}
          <div>
            <h4 className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-[#83a48d]">
              {f.contact}
            </h4>
            <ul className="grid gap-3 text-[14.5px]">
              <li className="flex items-start gap-2.5">
                <Icon name="map-pin" size={17} className="mt-0.5 shrink-0 text-green-2" />
                <span>{fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="phone" size={16} className="shrink-0 text-green-2" />
                <a href={`tel:${site.phone.tel}`} className="transition-colors hover:text-white">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="mail" size={16} className="shrink-0 text-green-2" />
                <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="clock" size={16} className="mt-0.5 shrink-0 text-green-2" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-[#7fa389] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. {f.rights}
          </p>
          <p className="font-mono tracking-[0.04em]">
            {site.address.locality}, {site.address.regionName} · {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
