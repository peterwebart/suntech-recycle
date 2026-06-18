import { Container, Section } from "@/components/ui/Container";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";

export function Industries({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).industries;
  return (
    <Section tone="light" id="industries">
      <Container>
        <FeatureRow
          kicker={t.kicker}
          title={t.title}
          image="suntech-enterprise-industries"
          imageAlt="Electronics recycling services for banks, hospitals, government, telecom and enterprises"
        >
          <p>{t.intro}</p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {t.names.map((name) => (
              <li
                key={name}
                className="rounded-full border border-line bg-paper px-4 py-2.5 text-[14.5px] font-medium text-ink transition-colors hover:border-green-2 hover:text-green"
              >
                {name}
              </li>
            ))}
          </ul>
        </FeatureRow>
      </Container>
    </Section>
  );
}
