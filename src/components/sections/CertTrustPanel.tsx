import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

export function CertTrustPanel({
  locale = "en",
  tone = "light",
}: {
  locale?: Locale;
  tone?: "light" | "paper";
}) {
  const t = getDictionary(locale).certPanel;
  const c = getDictionary(locale).common;
  return (
    <Section tone={tone}>
      <Container>
        <div
          data-reveal
          className="flex flex-col items-center gap-6 rounded-xl2 border border-line bg-paper p-7 text-center sm:flex-row sm:text-left sm:p-8"
        >
          <Link
            href={lp(locale, "/r2v3-certification")}
            aria-label="Learn about our SERI R2v3 certification"
            className="shrink-0 transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/r2v3-logo.png"
              alt="SERI R2v3 certified electronics recycler logo"
              width={88}
              height={88}
              className="h-[72px] w-[72px] sm:h-[88px] sm:w-[88px]"
            />
          </Link>
          <div className="flex-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-green">{t.eyebrow}</span>
            <h2 className="mt-1.5 text-[clamp(20px,2.6vw,26px)]">{t.title}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{t.body}</p>
          </div>
          <div className="shrink-0">
            <Button href={lp(locale, "/r2v3-certification")} variant="primary" icon="arrow-right">
              {c.whatR2v3Means}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
