import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Icon } from "@/components/ui/Icon";
import { CertBadge } from "@/components/ui/CertBadge";
import { site, fullAddress } from "@/data/site";
import { services } from "@/data/services";
import { countryList, hubCities } from "@/data/locations";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-near-black text-[#c6d3c9]">
      <div className="mx-auto w-full max-w-[1180px] px-5 pb-7 pt-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          {/* Brand + blurb */}
          <div>
            <Logo className="!text-white" />
            <p className="mt-4 max-w-[34ch] text-[14.5px] leading-relaxed text-[#9db8a5]">
              R2v3 certified IT asset disposition, secure data destruction and
              business electronics recycling for enterprise and government
              across Greater Montréal — with a documented chain of custody on
              every asset.
            </p>
            <div className="mt-5">
              <CertBadge variant="dark" size={48} />
            </div>
            <nav aria-label="Company" className="mt-6">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
                <li>
                  <Link href="/about" className="transition-colors hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/r2v3-certification"
                    className="transition-colors hover:text-white"
                  >
                    R2v3 Certification
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h4 className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-[#83a48d]">
              Services
            </h4>
            <ul className="grid gap-2.5 text-[14.5px]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service areas */}
          <nav aria-label="Service areas">
            <h4 className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-[#83a48d]">
              Service areas
            </h4>
            <ul className="grid gap-2.5 text-[14.5px]">
              {countryList.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/locations/${c.slug}`}
                    className="font-semibold transition-colors hover:text-white"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              {hubCities.slice(0, 4).map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/locations/${l.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="text-[#83a48d] transition-colors hover:text-white"
                >
                  All service areas →
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact / NAP */}
          <div>
            <h4 className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-[#83a48d]">
              Contact
            </h4>
            <ul className="grid gap-3 text-[14.5px]">
              <li className="flex items-start gap-2.5">
                <Icon name="map-pin" size={17} className="mt-0.5 shrink-0 text-green-2" />
                <span>{fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="phone" size={16} className="shrink-0 text-green-2" />
                <a
                  href={`tel:${site.phone.tel}`}
                  className="transition-colors hover:text-white"
                >
                  {site.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="mail" size={16} className="shrink-0 text-green-2" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-white"
                >
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
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="font-mono tracking-[0.04em]">
            {site.address.locality}, {site.address.regionName} · {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
