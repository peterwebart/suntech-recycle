import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";

export function Metrics({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).metrics;
  const metrics = [
    { value: "12", unit: "+", label: t.yearsLabel },
    { value: "8,400", unit: " t", label: t.tonnesLabel },
    { value: "240", unit: "+", label: t.clientsLabel },
    { value: "5,000", unit: "+", label: t.collectionsLabel },
  ];
  return (
    <section className="border-b border-line bg-paper">
      <Container>
        <dl className="grid grid-cols-2 gap-x-5 gap-y-9 py-10 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} data-reveal>
              <dt className="sr-only">{m.label}</dt>
              <dd className="m-0">
                <span className="font-display text-[clamp(28px,4.2vw,44px)] font-bold tracking-[-0.03em] text-green">
                  {m.value}
                  {m.unit && <span className="text-orange">{m.unit}</span>}
                </span>
                <span className="mt-1 block text-[13.5px] text-ink-soft">{m.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
