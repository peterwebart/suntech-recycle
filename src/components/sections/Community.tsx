import Image from "next/image";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

const cardIcons: IconName[] = ["leaf", "map-pin", "recycle", "shield"];

export function Community({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).community;
  return (
    <Section tone="paper" id="community">
      <Container>
        <div className="grid items-center gap-[clamp(28px,4vw,52px)] lg:grid-cols-2">
          <div
            data-reveal
            className="overflow-hidden rounded-card border border-line shadow-[0_24px_48px_-32px_rgba(15,107,58,0.45)]"
          >
            <Image
              src="/images/suntech-community-team.jpg"
              alt={t.imageAlt}
              width={740}
              height={428}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
          <div data-reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(26px,3.8vw,40px)]">{t.title}</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">{t.intro}</p>
            <div className="mt-6">
              <Button href={lp(locale, "/community-impact")} variant="primary" icon="arrow-right">
                {t.cta}
              </Button>
            </div>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.cards.map((card, i) => (
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
  );
}
