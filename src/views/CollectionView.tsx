import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CertBadge } from "@/components/ui/CertBadge";
import { site } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

const stepIcons: IconName[] = ["mail", "clock", "shield", "file-check"];
const contextIcons: IconName[] = ["layers", "truck", "server", "refresh", "shield", "recycle"];

export function CollectionContent({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const c = t.collection;
  const subject = encodeURIComponent(c.mailSubject);
  const body = encodeURIComponent(c.mailBody);
  const mailtoCollection = `mailto:${site.email}?subject=${subject}&body=${body}`;
  const crumbs = [
    { name: t.breadcrumbs.home, path: lp(locale, "/") },
    { name: t.breadcrumbs.collection, path: lp(locale, "/collection") },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="bg-near-black py-[clamp(40px,6vw,72px)] text-white">
        <Container>
          <Breadcrumbs light items={crumbs} />
          <Eyebrow light>{c.eyebrow}</Eyebrow>
          <h1 className="mt-3 max-w-[22ch] text-[clamp(34px,5.4vw,56px)]">{c.h1}</h1>
          <p className="mt-5 max-w-[58ch] text-[clamp(16px,2vw,19px)] text-[#d6e5db]">{c.intro}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <Button href={mailtoCollection} variant="primary" size="lg" icon="arrow-right">
              {t.common.requestCollection}
            </Button>
            <Button href={`tel:${site.phone.tel}`} variant="ghost" size="lg" icon="phone">
              {site.phone.display}
            </Button>
          </div>
          <div className="mt-7">
            <CertBadge variant="dark" size={52} locale={locale} />
          </div>
        </Container>
      </section>

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

      <section className="bg-forest py-[clamp(44px,6vw,76px)] text-white">
        <Container>
          <div data-reveal className="max-w-[60ch]">
            <h2 className="text-[clamp(26px,4vw,40px)]">{c.ctaTitle}</h2>
            <p className="mt-4 text-[clamp(16px,2vw,18px)] text-[#cfe6d6]">{c.ctaBody(site.phone.display)}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <Button href={mailtoCollection} variant="orange" size="lg" icon="arrow-right">
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
      </section>
    </>
  );
}
