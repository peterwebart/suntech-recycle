import { notFound } from "next/navigation";
import Link from "next/link";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Shot } from "@/components/ui/Shot";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CertBadge } from "@/components/ui/CertBadge";
import { BusinessValue } from "@/components/sections/BusinessValue";
import { PageCta } from "@/components/sections/PageCta";
import { getServices, getService } from "@/data/services";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

export function ServiceDetailContent({ locale, service }: { locale: Locale; service: string }) {
  const t = getDictionary(locale);
  const tc = t.common;
  const s = getService(locale, service);
  if (!s) notFound();

  const others = getServices(locale).filter((x) => x.slug !== s.slug);
  const crumbs = [
    { name: t.breadcrumbs.home, path: lp(locale, "/") },
    { name: t.breadcrumbs.services, path: lp(locale, "/services") },
    { name: s.shortName, path: lp(locale, `/services/${s.slug}`) },
  ];

  return (
    <>
      <JsonLd data={[serviceSchema(s), breadcrumbSchema(crumbs)]} />

      <section className="bg-near-black py-[clamp(40px,6vw,72px)] text-white">
        <Container className="grid items-center gap-[clamp(28px,4vw,52px)] lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Breadcrumbs light items={crumbs} />
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-green-2">
              <Icon name={s.icon} size={24} />
            </span>
            <Eyebrow light className="mt-5 block">{s.kicker}</Eyebrow>
            <h1 className="mt-3 max-w-[20ch] text-[clamp(32px,5vw,52px)]">{s.title}</h1>
            <p className="mt-5 max-w-[54ch] text-[clamp(16px,2vw,19px)] text-[#d6e5db]">{s.lead}</p>
            <div className="mt-6">
              <CertBadge variant="dark" size={52} locale={locale} />
            </div>
          </div>
          <div>
            <Shot name={s.image} alt={s.imageAlt} priority sizes="(max-width: 1024px) 100vw, 48vw" />
          </div>
        </Container>
      </section>

      <Section tone="light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div data-reveal>
              <Eyebrow>What we handle</Eyebrow>
              <h2 className="mt-3.5 text-[clamp(24px,3.4vw,34px)]">Scope &amp; capabilities</h2>
              <p className="mt-4 text-[16.5px] text-ink-soft">
                A representative scope for {s.shortName.toLowerCase()}. Volumes,
                timelines and documentation are tailored to your environment —
                all handled by an{" "}
                <Link href={lp(locale, "/r2v3-certification")} className="font-semibold text-green hover:underline">
                  R2v3 certified recycler
                </Link>
                .
              </p>
            </div>
            <ul data-reveal className="grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {s.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
                    <Icon name="check" size={15} />
                  </span>
                  <span className="text-[15.5px] text-ink">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div data-reveal className="max-w-[60ch]">
            <Eyebrow>Why it matters</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(24px,3.4vw,34px)]">What you get with SunTech</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {s.highlights.map((h, i) => (
              <div
                key={h.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
                className="rounded-card border border-line bg-light p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green text-white">
                  <Icon name="file-check" size={20} />
                </span>
                <h3 className="mt-4 text-[18px]">{h.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{h.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <BusinessValue locale={locale} />

      <Section tone="light">
        <Container>
          <div data-reveal className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[clamp(22px,3vw,30px)]">{t.serviceDetail.otherServices}</h2>
            <Link href={lp(locale, "/services")} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-green">
              {tc.viewAllServices}
              <Icon name="arrow-right" size={15} />
            </Link>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug} data-reveal>
                <Link
                  href={lp(locale, `/services/${o.slug}`)}
                  className="group flex h-full flex-col rounded-card border border-line bg-paper p-5 transition-all hover:-translate-y-1 hover:border-green-2"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green/10 text-green">
                    <Icon name={o.icon} size={20} />
                  </span>
                  <h3 className="mt-4 text-[16px] leading-tight">{o.shortName}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-green">
                    {tc.learnMore}
                    <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <PageCta locale={locale} title={`Need ${s.shortName.toLowerCase()} for your organization?`} />
    </>
  );
}
