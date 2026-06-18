import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { CertBadge } from "@/components/ui/CertBadge";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

export function CertStrip({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).certStrip;
  const c = getDictionary(locale).common;
  return (
    <section className="border-b border-line bg-paper">
      <Container>
        <div className="flex flex-col items-center gap-5 py-7 text-center sm:flex-row sm:justify-between sm:text-left">
          <CertBadge size={60} locale={locale} />
          <p className="max-w-[56ch] text-[15px] text-ink-soft">
            {t.pre}{" "}
            <Link href={lp(locale, "/r2v3-certification")} className="font-semibold text-green hover:underline">
              {t.link}
            </Link>{" "}
            {t.post}
          </p>
          <Link
            href={lp(locale, "/r2v3-certification")}
            className="inline-flex shrink-0 items-center gap-1.5 text-[14px] font-semibold text-green"
          >
            {c.whatR2v3Means}
            <Icon name="arrow-right" size={15} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
