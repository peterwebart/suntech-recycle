import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

export function ESG({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).esg;
  return (
    <section
      id="esg"
      className="bg-gradient-to-br from-green to-forest py-16 text-white sm:py-20 lg:py-[100px]"
    >
      <Container>
        <FeatureRow
          kicker={t.kicker}
          title={t.title}
          image="suntech-esg-circular-economy"
          imageAlt="ESG reporting, circular economy and landfill diversion for corporate sustainability"
          light
        >
          <p className="text-[18px] text-[#dcebe0]">{t.intro}</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {t.stats.map((s) => (
              <div key={s.l} className="rounded-card border border-white/15 bg-white/[0.08] p-5">
                <div className="font-display text-[32px] font-bold tracking-[-0.03em] text-white">{s.n}</div>
                <div className="mt-1.5 text-[13px] text-[#cfe2d4]">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button href={lp(locale, "/contact")} variant="orange" icon="arrow-right">
              {t.cta}
            </Button>
          </div>
        </FeatureRow>
      </Container>
    </section>
  );
}
