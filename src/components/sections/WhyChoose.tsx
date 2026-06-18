import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";

const icons: IconName[] = ["shield", "file-check", "chip", "truck", "refresh", "leaf"];

export function WhyChoose({
  locale = "en",
  place,
  tone = "light",
}: {
  locale?: Locale;
  place?: string;
  tone?: "light" | "paper";
}) {
  const t = getDictionary(locale).whyChoose;
  return (
    <Section tone={tone}>
      <Container>
        <div data-reveal className="max-w-[64ch]">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="mt-3.5 text-[clamp(24px,3.6vw,36px)]">
            {place ? t.titlePlace(place) : t.titleDefault}
          </h2>
          <p className="mt-4 text-[17px] text-ink-soft">{t.intro}</p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.reasons.map((r, i) => (
            <li
              key={r.title}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 50}ms` } as React.CSSProperties}
              className="rounded-card border border-line bg-paper p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green/10 text-green">
                <Icon name={icons[i] ?? "check"} size={20} />
              </span>
              <h3 className="mt-4 text-[17px]">{r.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{r.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
