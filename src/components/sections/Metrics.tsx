import { Container } from "@/components/ui/Container";

type Metric = { value: string; unit?: string; label: string };

const metrics: Metric[] = [
  { value: "12", unit: "+", label: "Years in operation" },
  { value: "8,400", unit: " t", label: "Tonnes recycled" },
  { value: "240", unit: "+", label: "Corporate clients served" },
  { value: "5,000", unit: "+", label: "Collections completed" },
];

export function Metrics() {
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
                <span className="mt-1 block text-[13.5px] text-ink-soft">
                  {m.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
