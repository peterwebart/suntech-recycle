import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CertBadge } from "@/components/ui/CertBadge";
import { PageCta } from "@/components/sections/PageCta";
import { services } from "@/data/services";

export const metadata: Metadata = buildMetadata({
  title: "Services — Electronics Recycling, ITAD & Data Destruction | SunTech Recycle",
  description:
    "Certified electronics recycling, secure data destruction, IT asset disposition, data centre decommissioning and metal recovery for enterprise across Greater Montréal and Québec.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <section className="bg-near-black py-[clamp(40px,6vw,72px)] text-white">
        <Container>
          <Breadcrumbs
            light
            items={[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]}
          />
          <Eyebrow light>Services</Eyebrow>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(34px,5.4vw,56px)]">
            One accountable partner, from dock to certificate.
          </h1>
          <p className="mt-5 max-w-[58ch] text-[clamp(16px,2vw,19px)] text-[#d6e5db]">
            Every service runs under a single, documented chain of custody — so
            collection, data destruction, value recovery and reporting all tie
            back to the same record.
          </p>
          <div className="mt-7">
            <CertBadge variant="dark" size={52} />
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
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-card border border-line bg-paper p-7 transition-all hover:-translate-y-1 hover:border-green-2 hover:shadow-[0_24px_48px_-32px_rgba(15,107,58,0.45)]"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <h2 className="mt-5 text-[21px]">{s.name}</h2>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-soft">
                    {s.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-green">
                    Explore {s.shortName.toLowerCase()}
                    <Icon
                      name="arrow-right"
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <PageCta />
    </>
  );
}
