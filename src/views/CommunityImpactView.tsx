import Image from "next/image";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CertBadge } from "@/components/ui/CertBadge";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

const cardIcons: IconName[] = ["leaf", "map-pin", "recycle", "shield"];

export function CommunityImpactContent({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const p = t.communityPage;
  const cards = t.community.cards;
  const crumbs = [
    { name: t.breadcrumbs.home, path: lp(locale, "/") },
    { name: p.eyebrow, path: lp(locale, "/community-impact") },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema(crumbs)]} />

      {/* Hero */}
      <section className="bg-near-black py-[clamp(40px,6vw,72px)] text-white">
        <Container className="grid items-center gap-[clamp(28px,4vw,52px)] lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Breadcrumbs light items={crumbs} />
            <Eyebrow light>{p.eyebrow}</Eyebrow>
            <h1 className="mt-3 max-w-[20ch] text-[clamp(32px,5vw,54px)]">{p.h1}</h1>
            <p className="mt-5 max-w-[56ch] text-[clamp(16px,2vw,19px)] text-[#d6e5db]">{p.heroIntro}</p>
            <div className="mt-7 flex flex-wrap gap-3.5">
              <Button href={lp(locale, "/collection")} variant="primary" size="lg" icon="arrow-right">
                {t.common.requestCollection}
              </Button>
              <Button href={lp(locale, "/r2v3-certification")} variant="ghost" size="lg">
                {t.common.whatR2v3Means}
              </Button>
            </div>
            <div className="mt-7">
              <CertBadge variant="dark" size={52} locale={locale} />
            </div>
          </div>
          <div className="overflow-hidden rounded-card border border-white/15">
            <Image
              src="/images/suntech-community-team.jpg"
              alt={t.community.imageAlt}
              width={740}
              height={428}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      {/* Commitment */}
      <Section tone="light">
        <Container>
          <div data-reveal className="max-w-[68ch]">
            <Eyebrow>{p.commitmentTitle}</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(24px,3.6vw,36px)]">{p.commitmentTitle}</h2>
            <p className="mt-4 text-[18px] leading-relaxed text-ink-soft">{p.commitmentBody}</p>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
              {locale === "fr" ? (
                <>
                  Découvrez nos services de{" "}
                  <Link href={lp(locale, "/services/electronics-recycling")} className="font-semibold text-green hover:underline">recyclage informatique</Link>,
                  de{" "}
                  <Link href={lp(locale, "/services/secure-data-destruction")} className="font-semibold text-green hover:underline">destruction sécurisée des données</Link>{" "}
                  et de{" "}
                  <Link href={lp(locale, "/services/itad")} className="font-semibold text-green hover:underline">disposition des actifs TI</Link>.
                </>
              ) : (
                <>
                  Explore our{" "}
                  <Link href={lp(locale, "/services/electronics-recycling")} className="font-semibold text-green hover:underline">corporate electronics recycling</Link>,{" "}
                  <Link href={lp(locale, "/services/secure-data-destruction")} className="font-semibold text-green hover:underline">secure hard drive destruction</Link>{" "}
                  and{" "}
                  <Link href={lp(locale, "/services/itad")} className="font-semibold text-green hover:underline">secure IT asset disposition</Link>{" "}
                  services.
                </>
              )}
            </p>
          </div>
        </Container>
      </Section>

      {/* Giving back — with donation proof */}
      <Section tone="paper">
        <Container>
          <div className="grid items-center gap-[clamp(28px,4vw,52px)] lg:grid-cols-2">
            <div data-reveal>
              <Eyebrow>{p.givingTitle}</Eyebrow>
              <h2 className="mt-3.5 text-[clamp(24px,3.4vw,34px)]">{p.givingTitle}</h2>
              <p className="mt-4 text-[16.5px] leading-relaxed text-ink-soft">{p.givingBody}</p>
              <p className="mt-5 font-mono text-[12.5px] tracking-[0.04em] text-ink-soft">{p.teamCaption}</p>
            </div>
            <figure data-reveal className="m-0 overflow-hidden rounded-card border border-line bg-light">
              <Image
                src="/images/suntech-community-donation.jpg"
                alt={p.letterCaption}
                width={1134}
                height={1544}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full"
              />
              <figcaption className="border-t border-line px-5 py-3 font-mono text-[11.5px] tracking-[0.04em] text-ink-soft">
                {p.letterCaption}
              </figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      {/* Technology for good */}
      <Section tone="light">
        <Container>
          <div data-reveal className="max-w-[68ch]">
            <Eyebrow>{p.techTitle}</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(24px,3.6vw,36px)]">{p.techTitle}</h2>
            <p className="mt-4 text-[18px] leading-relaxed text-ink-soft">{p.techBody}</p>
          </div>
        </Container>
      </Section>

      {/* ESG & CSR benefits */}
      <Section tone="paper">
        <Container>
          <div data-reveal className="max-w-[64ch]">
            <Eyebrow>{p.esgTitle}</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(24px,3.6vw,36px)]">{p.esgTitle}</h2>
            <p className="mt-4 text-[17px] text-ink-soft">{p.esgIntro}</p>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, i) => (
              <li
                key={card.title}
                data-reveal
                style={{ "--reveal-delay": `${(i % 4) * 50}ms` } as React.CSSProperties}
                className="rounded-card border border-line bg-light p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green/10 text-green">
                  <Icon name={cardIcons[i] ?? "check"} size={20} />
                </span>
                <h3 className="mt-4 text-[16px]">{card.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{card.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* How impact is created */}
      <Section tone="ink">
        <Container>
          <div data-reveal className="max-w-[64ch]">
            <Eyebrow light>{p.howTitle}</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(24px,3.6vw,36px)] text-white">{p.howTitle}</h2>
            <p className="mt-4 text-[17px] text-[#b9c2bb]">{p.howIntro}</p>
          </div>
          <ul className="mt-8 grid gap-3.5">
            {p.howPoints.map((pt) => (
              <li key={pt} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-2/20 text-green-2">
                  <Icon name="check" size={14} />
                </span>
                <span className="text-[15.5px] text-[#d6e5db]">{pt}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href={lp(locale, "/locations")} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-green-2">
              {t.common.seeServiceAreas}
              <Icon name="arrow-right" size={15} />
            </Link>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="paper">
        <Container>
          <div data-reveal className="max-w-[64ch]">
            <Eyebrow>{p.faqTitle}</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(24px,3.6vw,36px)]">{p.faqTitle}</h2>
          </div>
          <dl className="mt-8 grid gap-4">
            {p.faq.map((f) => (
              <div key={f.q} data-reveal className="rounded-card border border-line bg-light p-6">
                <dt className="text-[17px] font-semibold text-ink">{f.q}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ink-soft">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="forest">
        <Container>
          <div data-reveal className="max-w-[60ch]">
            <h2 className="text-[clamp(26px,4vw,40px)] text-white">{p.ctaTitle}</h2>
            <p className="mt-4 text-[clamp(16px,2vw,18px)] text-white/85">{p.ctaBody}</p>
            <div className="mt-7 flex flex-wrap gap-3.5">
              <Button href={lp(locale, "/collection")} variant="orange" size="lg" icon="arrow-right">
                {t.common.requestCollection}
              </Button>
              <Button href={lp(locale, "/contact")} variant="ghost" size="lg">
                {t.common.generalContact}
              </Button>
            </div>
            <div className="mt-8">
              <CertBadge variant="dark" size={48} locale={locale} />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
