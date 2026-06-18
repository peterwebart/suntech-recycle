import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Shot } from "@/components/ui/Shot";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";

const ids = ["CC-01", "CC-02", "CC-03", "CC-04"];

export function ChainOfCustody({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).chainOfCustody;
  return (
    <Section tone="ink" id="custody">
      <Container>
        <div data-reveal className="max-w-[64ch]">
          <Eyebrow light>{t.eyebrow}</Eyebrow>
          <h2 className="mt-3.5 text-[clamp(28px,4.4vw,44px)] text-white">{t.title}</h2>
          <p className="mt-4 text-[18px] text-[#b9c2bb]">{t.intro}</p>
        </div>

        <div data-reveal className="mt-10">
          <Shot
            name="suntech-chain-of-custody"
            alt="Secure chain of custody tracking for retired IT assets from collection to certificate"
            banner
            sizes="(max-width: 1180px) 100vw, 1180px"
          />
        </div>

        <ol className="relative mt-12 grid gap-y-9 md:grid-cols-4 md:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-2 top-0 hidden h-full w-0.5 bg-gradient-to-b from-green-2 to-orange opacity-60 md:left-0 md:right-0 md:top-[13px] md:h-0.5 md:w-full md:bg-gradient-to-r"
          />
          {t.steps.map((s, i) => (
            <li
              key={ids[i]}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              className="relative pl-10 md:pl-0 md:pt-11"
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1 h-[18px] w-[18px] rounded-full md:top-[5px] ${
                  i === t.steps.length - 1
                    ? "bg-orange shadow-[0_0_0_5px_rgba(244,160,0,0.18)]"
                    : "bg-green-2 shadow-[0_0_0_5px_rgba(45,190,96,0.18)]"
                }`}
              />
              <span className="font-mono text-[12px] tracking-[0.12em] text-orange">{ids[i]}</span>
              <h3 className="mt-2 text-[18px] text-white">{s.title}</h3>
              <p className="mt-2 text-[14.5px] text-[#9aa69d]">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
