import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CertBadge } from "@/components/ui/CertBadge";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

export function PageCta({
  locale = "en",
  title,
  body,
}: {
  locale?: Locale;
  title?: string;
  body?: string;
}) {
  const t = getDictionary(locale).pageCta;
  const c = getDictionary(locale).common;
  return (
    <Section tone="forest">
      <Container>
        <div data-reveal className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-[clamp(26px,3.6vw,38px)] text-white">{title ?? t.title}</h2>
            <p className="mt-3 max-w-[54ch] text-[17px] text-white/80">{body ?? t.body}</p>
            <div className="mt-5">
              <CertBadge variant="dark" size={52} locale={locale} />
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Button
              href={lp(locale, "/collection")}
              variant="orange"
              size="lg"
              icon="arrow-right"
              className="w-full justify-center sm:w-auto"
            >
              {c.requestCollection}
            </Button>
            <Button
              href={lp(locale, "/contact?intent=assessment")}
              variant="ghost"
              size="md"
              className="w-full justify-center sm:w-auto"
            >
              {c.requestAssessment}
            </Button>
            <Button
              href={lp(locale, "/contact?intent=destruction")}
              variant="ghost"
              size="md"
              className="w-full justify-center sm:w-auto"
            >
              {c.requestDestructionQuote}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
