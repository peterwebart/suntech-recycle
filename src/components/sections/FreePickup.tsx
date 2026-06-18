import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

export function FreePickup({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).freePickup;
  const c = getDictionary(locale).common;
  return (
    <Section tone="paper" id="collection">
      <Container>
        <FeatureRow
          kicker={t.kicker}
          title={t.title}
          image="suntech-free-pickup"
          imageAlt="Free commercial electronics collection service across Greater Montréal"
          reversed
        >
          <p>{t.body}</p>
          <p className="mt-4 font-mono text-[12.5px] tracking-[0.04em] text-ink-soft">{t.areas}</p>
          <div className="mt-6 flex flex-wrap gap-3.5">
            <Button href={lp(locale, "/collection")} variant="primary" icon="arrow-right">
              {c.requestCollection}
            </Button>
            <Button href={lp(locale, "/locations")} variant="ghost-dark">
              {c.seeServiceAreas}
            </Button>
          </div>
        </FeatureRow>
      </Container>
    </Section>
  );
}
