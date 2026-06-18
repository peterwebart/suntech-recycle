import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";

export function Pillars({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).pillars;
  return (
    <Section tone="paper" id="why">
      <Container>
        <div data-reveal className="max-w-[64ch]">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="mt-3.5 text-[clamp(28px,4.4vw,44px)]">{t.title}</h2>
          <p className="mt-4 text-[18px] text-ink-soft">{t.intro}</p>
        </div>
        <div className="mt-13 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              className="border-t-2 border-ink pt-5"
            >
              <h3 className="text-[20px]">{p.title}</h3>
              <p className="mt-2.5 text-[15.5px] text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
