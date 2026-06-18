import { breadcrumbSchema, organizationSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { Shot } from "@/components/ui/Shot";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CertBadge } from "@/components/ui/CertBadge";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { PageCta } from "@/components/sections/PageCta";
import { site, fullAddress } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

const roles: { icon: IconName; title: string; body: string }[] = [
  { icon: "recycle", title: "R2v3 certified recycler", body: "Independently audited to the leading SERI R2v3 standard for responsible electronics recycling." },
  { icon: "refresh", title: "IT asset disposition partner", body: "A single accountable partner for the full retired-hardware lifecycle, dock to certificate." },
  { icon: "chip", title: "Corporate electronics recycling partner", body: "Built for enterprise, government and commercial volumes — not residential drop-off." },
  { icon: "shield", title: "Secure data destruction provider", body: "NIST 800-88 wiping and physical destruction with a serialized certificate per asset." },
  { icon: "layers", title: "E-scrap trading company", body: "Commodity recovery and electronics buyback that surface residual value in retired assets." },
  { icon: "file-check", title: "Asset recovery specialist", body: "Remarketing and IT asset recovery that return value to your balance sheet with clear reporting." },
];

export function AboutContent({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const crumbs = [
    { name: t.breadcrumbs.home, path: lp(locale, "/") },
    { name: t.breadcrumbs.about, path: lp(locale, "/about") },
  ];

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema(crumbs)]} />

      <section className="bg-near-black py-[clamp(40px,6vw,72px)] text-white">
        <Container>
          <Breadcrumbs light items={crumbs} />
          <Eyebrow light>About SunTech Recycle</Eyebrow>
          <h1 className="mt-3 max-w-[22ch] text-[clamp(32px,5vw,54px)]">
            A certified commercial recycling partner — built for accountability.
          </h1>
          <p className="mt-5 max-w-[60ch] text-[clamp(16px,2vw,19px)] text-[#d6e5db]">
            SunTech Recycle is an R2v3 certified electronics recycling, IT asset
            disposition and secure data destruction company. From our facility
            in Longueuil we serve banks, data centres, hospitals, government and
            enterprise — with a documented chain of custody on every asset.
          </p>
          <div className="mt-7">
            <CertBadge variant="dark" size={56} locale={locale} />
          </div>
        </Container>
      </section>

      <Section tone="light">
        <Container>
          <div data-reveal className="max-w-[64ch]">
            <Eyebrow>What we are</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(24px,3.6vw,36px)]">More than a recycler</h2>
            <p className="mt-4 text-[18px] text-ink-soft">
              We position differently from generic recycling or junk services.
              We are a B2B partner for the secure, certified, value-recovering
              retirement of IT and electronic assets.
            </p>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((r, i) => (
              <li
                key={r.title}
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 50}ms` } as React.CSSProperties}
                className="rounded-card border border-line bg-paper p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green/10 text-green">
                  <Icon name={r.icon} size={22} />
                </span>
                <h3 className="mt-4 text-[18px]">{r.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{r.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="grid items-center gap-[clamp(28px,5vw,60px)] lg:grid-cols-2">
            <div data-reveal className="lg:order-2">
              <Shot
                name="suntech-enterprise-industries"
                alt="SunTech Recycle certified commercial electronics recycling for enterprise and government"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div data-reveal className="lg:order-1">
              <Eyebrow>Our approach</Eyebrow>
              <h2 className="mt-3.5 text-[clamp(24px,3.4vw,34px)]">Certified, documented, accountable</h2>
              <p className="mt-4 text-[16.5px] leading-relaxed text-ink-soft">
                When retired hardware leaves your building, the liability
                doesn&rsquo;t — unless it&rsquo;s handled provably. Our R2v3
                certification, serialized destruction certificates and
                end-to-end chain of custody exist to transfer that risk off your
                organization and give your auditors a closed loop.
              </p>
              <p className="mt-4 text-[16.5px] leading-relaxed text-ink-soft">
                We pair that rigor with value recovery: functional assets are
                remarketed and e-scrap is traded for commodity value, so
                responsible disposal returns money to your balance sheet instead
                of being pure cost.
              </p>
              <ul className="mt-5 grid gap-2.5">
                {[
                  "Based in Longueuil — fast, free collection across Greater Montréal",
                  "Mail-in ITAD and data destruction for clients across North America",
                  "Serving regulated, high-stakes environments",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
                      <Icon name="check" size={13} />
                    </span>
                    <span className="text-[15px] text-ink">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-mono text-[12.5px] tracking-[0.04em] text-ink-soft">
                {fullAddress} · {site.phone.display}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <WhyChoose locale={locale} tone="light" />
      <PageCta locale={locale} />
    </>
  );
}
