import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <Section tone="light" id="services">
      <Container>
        <div data-reveal className="max-w-[64ch]">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-3.5 text-[clamp(28px,4.4vw,44px)]">
            One accountable partner, from dock to certificate.
          </h2>
          <p className="mt-4 text-[18px] text-ink-soft">
            Computers, servers, networking, phones, cables and
            communication-room equipment — collected, processed and documented
            under one chain of custody. Industrial, mechanical, hydraulic and
            pneumatic equipment included.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li
              key={s.slug}
              data-reveal
              style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}
            >
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-card border border-line bg-paper p-6 transition-all hover:-translate-y-1 hover:border-green-2 hover:shadow-[0_24px_48px_-32px_rgba(15,107,58,0.45)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green/10 text-green">
                  <Icon name={s.icon} size={22} />
                </span>
                <h3 className="mt-4 text-[19px]">{s.shortName}</h3>
                <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-ink-soft">
                  {s.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-green">
                  Learn more
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

        <div data-reveal className="mt-10">
          <Button href="/services" variant="ghost-dark" size="md" icon="arrow-right">
            View all services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
