import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CertBadge } from "@/components/ui/CertBadge";
import { CollectionForm } from "@/components/collection/CollectionForm";
import { site } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

const stepIcons: IconName[] = ["mail", "clock", "shield", "file-check"];
const contextIcons: IconName[] = ["layers", "truck", "server", "refresh", "shield", "recycle"];

export function CollectionContent({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const c = t.collection;
  const f = t.collectionForm;
  const crumbs = [
    { name: t.breadcrumbs.home, path: lp(locale, "/") },
    { name: t.breadcrumbs.collection, path: lp(locale, "/collection") },
  ];
  const points =
    locale === "fr"
      ? [
          "Certifié R2v3 — chaîne de possession complète",
          "Collecte sur place gratuite dans le Grand Montréal",
          "Destruction sécurisée des données avec certificats sérialisés",
        ]
      : [
          "R2v3 certified — full documented chain of custody",
          "Free on-site collection across Greater Montréal",
          "Secure data destruction with serialized certificates",
        ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {/* Hero + lead form (top of page) */}
      <section id="request-collection" className="bg-near-black py-[clamp(36px,5vw,64px)] text-white">
        <Container>
          <Breadcrumbs light items={crumbs} />
          <div className="mt-2 grid gap-[clamp(28px,4vw,56px)] lg:grid-cols-[1fr_1.02fr]">
            {/* Left: pitch */}
            <div>
              <Eyebrow light>{c.eyebrow}</Eyebrow>
              <h1 className="mt-3 max-w-[18ch] text-[clamp(30px,4.6vw,50px)]">{c.h1}</h1>
              <p className="mt-5 max-w-[52ch] text-[clamp(16px,2vw,18px)] text-[#d6e5db]">{c.intro}</p>
              <ul className="mt-6 grid gap-3">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-2/20 text-green-2">
                      <Icon name="check" size={14} />
                    </span>
                    <span className="text-[15px] text-[#e7efe9]">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${site.phone.tel}`}
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-white transition-colors hover:text-green-2"
                >
                  <Icon name="phone" size={16} className="text-green-2" />
                  {site.phone.display}
                </a>
                <CertBadge variant="dark" size={46} locale={locale} />
              </div>
            </div>

            {/* Right: the form */}
            <div data-reveal className="rounded-xl2 border border-line bg-white p-6 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:p-8">
              <h2 className="text-[clamp(20px,2.6vw,26px)]">{f.title}</h2>
              <p className="mt-1.5 text-[14.5px] text-ink-soft">{f.intro}</p>
              <div className="mt-5">
                <CollectionForm locale={locale} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <Section tone="light">
        <Container>
          <div data-reveal className="max-w-[60ch]">
            <Eyebrow>{c.howEyebrow}</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(24px,3.6vw,36px)]">{c.howTitle}</h2>
          </div>
          <ol className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.steps.map((s, i) => (
              <li
                key={s.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}
                className="relative rounded-card border border-line bg-paper p-6"
              >
                <span className="font-mono text-[12px] font-semibold tracking-[0.1em] text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green/10 text-green">
                  <Icon name={stepIcons[i] ?? "check"} size={20} />
                </span>
                <h3 className="mt-3 text-[18px]">{s.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Who / what we collect */}
      <Section tone="paper">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div data-reveal>
              <Eyebrow>{c.whoEyebrow}</Eyebrow>
              <h2 className="mt-3.5 text-[clamp(24px,3.4vw,34px)]">{c.whoTitle}</h2>
              <p className="mt-4 text-[16px] text-ink-soft">{c.whoBody}</p>
              <ul className="mt-6 grid gap-3">
                {c.contexts.map((label, i) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                      <Icon name={contextIcons[i] ?? "check"} size={18} />
                    </span>
                    <span className="text-[15.5px] font-medium text-ink">{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal>
              <Eyebrow>{c.whatEyebrow}</Eyebrow>
              <h2 className="mt-3.5 text-[clamp(24px,3.4vw,34px)]">{c.whatTitle}</h2>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {c.equipment.map((e) => (
                  <li key={e} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-light px-3.5 py-2 text-[13.5px] font-medium text-ink">
                    <Icon name="check" size={13} className="text-green" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Free vs secure */}
      <Section tone="light">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div data-reveal className="flex flex-col rounded-card border border-green/30 bg-green/[0.04] p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green/15 text-green">
                <Icon name="truck" size={22} />
              </span>
              <h3 className="mt-4 text-[20px]">{c.freeTitle}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{c.freeBody}</p>
              <Link href={lp(locale, "/locations/canada")} className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-green">
                {c.freeLink}
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>

            <div data-reveal className="flex flex-col rounded-card border border-line bg-paper p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink/[0.06] text-ink">
                <Icon name="shield" size={22} />
              </span>
              <h3 className="mt-4 text-[20px]">{c.secureTitle}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{c.secureBody}</p>
              <Link href={lp(locale, "/locations")} className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-green">
                {c.secureLink}
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Closing CTA → scroll back to the form */}
      <section className="bg-forest py-[clamp(40px,5vw,68px)] text-white">
        <Container>
          <div data-reveal className="max-w-[60ch]">
            <h2 className="text-[clamp(24px,3.6vw,36px)]">{c.ctaTitle}</h2>
            <p className="mt-4 text-[clamp(16px,2vw,18px)] text-[#cfe6d6]">{c.ctaBody(site.phone.display)}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <Button href="#request-collection" variant="orange" size="lg" icon="arrow-right">
                {f.submit}
              </Button>
              <Button href={lp(locale, "/contact")} variant="ghost" size="lg">
                {t.common.generalContact}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
