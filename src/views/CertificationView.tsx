import Image from "next/image";
import { breadcrumbSchema, absoluteUrl } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageCta } from "@/components/sections/PageCta";
import { site } from "@/data/site";
import { getR2v3 } from "@/data/certification";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

export function CertificationContent({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const tcert = t.certification;
  const r2v3 = getR2v3(locale);
  const crumbs = [
    { name: t.breadcrumbs.home, path: lp(locale, "/") },
    { name: t.breadcrumbs.certification, path: lp(locale, "/r2v3-certification") },
  ];

  const certSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: absoluteUrl("/"),
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "SERI R2v3 Certification",
      recognizedBy: {
        "@type": "Organization",
        name: "Sustainable Electronics Recycling International (SERI)",
      },
    },
  };

  return (
    <>
      <JsonLd data={[certSchema, breadcrumbSchema(crumbs)]} />

      <section className="bg-near-black py-[clamp(40px,6vw,72px)] text-white">
        <Container className="grid items-center gap-[clamp(28px,4vw,52px)] lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Breadcrumbs light items={crumbs} />
            <Eyebrow light>{tcert.eyebrow}</Eyebrow>
            <h1 className="mt-3 max-w-[20ch] text-[clamp(32px,5vw,52px)]">{tcert.h1}</h1>
            <p className="mt-5 max-w-[56ch] text-[clamp(16px,2vw,19px)] text-[#d6e5db]">{r2v3.lead}</p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-xl2 border border-white/15 bg-white/[0.04] p-8">
              <Image
                src="/images/r2v3-logo.png"
                alt="SERI R2v3 certified electronics recycler logo"
                width={200}
                height={201}
                className="h-auto w-[160px] sm:w-[200px]"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section tone="light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div data-reveal>
              <Eyebrow>The standard</Eyebrow>
              <h2 className="mt-3.5 text-[clamp(24px,3.4vw,34px)]">{tcert.whatTitle}</h2>
              <p className="mt-4 text-[16.5px] text-ink-soft">
                {`Administered by ${r2v3.authority}, R2v3 is the leading global standard for the electronics recycling and ITAD industry.`}
              </p>
            </div>
            <ul data-reveal className="grid gap-5">
              {r2v3.whatItMeans.map((para, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green text-white">
                    <Icon name="check" size={16} />
                  </span>
                  <span className="text-[16.5px] leading-relaxed text-ink">{para}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div data-reveal className="max-w-[64ch]">
            <Eyebrow>Why it matters for your business</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(24px,3.6vw,36px)]">{tcert.benefitsTitle}</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {r2v3.benefits.map((b, i) => (
              <div
                key={b.title}
                data-reveal
                style={{ "--reveal-delay": `${(i % 2) * 60}ms` } as React.CSSProperties}
                className="rounded-card border border-line bg-light p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green text-white">
                  <Icon name={b.icon} size={22} />
                </span>
                <h3 className="mt-4 text-[20px]">{b.title}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft">{b.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div data-reveal>
              <Eyebrow light>{tcert.chainTitle}</Eyebrow>
              <h2 className="mt-3.5 text-[clamp(22px,3vw,30px)] text-white">Tracked, documented, accountable</h2>
              <ul className="mt-6 grid gap-3.5">
                {r2v3.chainOfCustody.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-2/20 text-green-2">
                      <Icon name="check" size={14} />
                    </span>
                    <span className="text-[15.5px] text-[#d6e5db]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <Eyebrow light>{tcert.standardsTitle}</Eyebrow>
              <h2 className="mt-3.5 text-[clamp(22px,3vw,30px)] text-white">What the standard enforces</h2>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {r2v3.standards.map((s) => (
                  <li key={s} className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-[14px] font-medium text-white">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <PageCta
        locale={locale}
        title="Work with a certified recycler"
        body="Put your retired hardware in the hands of a SERI R2v3 certified partner. Request a collection, an assessment or a secure destruction quote."
      />
    </>
  );
}
