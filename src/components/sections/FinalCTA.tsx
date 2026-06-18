import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

export function FinalCTA({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).finalCta;
  const c = getDictionary(locale).common;
  return (
    <Section tone="paper" id="contact">
      <Container>
        <div
          data-reveal
          className="relative overflow-hidden rounded-xl2 border border-line bg-light px-6 py-[clamp(34px,6vw,64px)] text-center"
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[5px] bg-gradient-to-r from-green via-green-2 to-orange"
          />
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="mx-auto mt-3.5 max-w-[22ch] text-[clamp(26px,4vw,40px)]">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-[18px] text-ink-soft">{t.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Button href={lp(locale, "/collection")} variant="primary" size="lg" icon="arrow-right">
              {c.requestCollection}
            </Button>
            <Button href={lp(locale, "/contact?intent=assessment")} variant="ghost-dark" size="lg">
              {c.requestAssessment}
            </Button>
            <Button href={lp(locale, "/contact?intent=destruction")} variant="ghost-dark" size="lg">
              {c.requestDestructionQuote}
            </Button>
          </div>
          <p className="mt-6 text-[14.5px] text-ink-soft">
            {c.orCall}{" "}
            <a href={`tel:${site.phone.tel}`} className="font-semibold text-green hover:underline">
              {site.phone.display}
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
