import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CertBadge } from "@/components/ui/CertBadge";
import { PageCta } from "@/components/sections/PageCta";
import { getServices } from "@/data/services";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

export function ServicesIndexContent({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const tc = t.common;
  const ti = t.servicesIndex;
  const services = getServices(locale);
  const crumbs = [
    { name: t.breadcrumbs.home, path: lp(locale, "/") },
    { name: t.breadcrumbs.services, path: lp(locale, "/services") },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="bg-near-black py-[clamp(40px,6vw,72px)] text-white">
        <Container>
          <Breadcrumbs light items={crumbs} />
          <Eyebrow light>{ti.eyebrow}</Eyebrow>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(34px,5.4vw,56px)]">{ti.h1}</h1>
          <p className="mt-5 max-w-[58ch] text-[clamp(16px,2vw,19px)] text-[#d6e5db]">{ti.intro}</p>
          <div className="mt-7">
            <CertBadge variant="dark" size={52} locale={locale} />
          </div>
        </Container>
      </section>

      <Section tone="light">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <li
                key={s.slug}
                data-reveal
                style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}
              >
                <Link
                  href={lp(locale, `/services/${s.slug}`)}
                  className="group flex h-full flex-col rounded-card border border-line bg-paper p-7 transition-all hover:-translate-y-1 hover:border-green-2 hover:shadow-[0_24px_48px_-32px_rgba(15,107,58,0.45)]"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <h2 className="mt-5 text-[21px]">{s.name}</h2>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-soft">{s.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-green">
                    {tc.explore} {s.shortName.toLowerCase()}
                    <Icon name="arrow-right" size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <PageCta locale={locale} />
    </>
  );
}
