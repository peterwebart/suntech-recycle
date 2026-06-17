import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FeatureRow } from "@/components/sections/FeatureRow";

const stats = [
  { n: "98%", l: "Landfill diversion rate" },
  { n: "8.4 kt", l: "Materials recovered" },
  { n: "—", l: "tCO₂e avoided" },
  { n: "100%", l: "Downstream audited" },
];

export function ESG() {
  return (
    <section
      id="esg"
      className="bg-gradient-to-br from-green to-forest py-16 text-white sm:py-20 lg:py-[100px]"
    >
      <Container>
        <FeatureRow
          kicker="ESG & circular economy"
          title="Your hardware, accounted for in your ESG report."
          image="suntech-esg-circular-economy"
          imageAlt="ESG reporting, circular economy and landfill diversion for corporate sustainability"
          light
        >
          <p className="text-[18px] text-[#dcebe0]">
            We keep electronics out of landfill and feed recovered materials
            back into the supply chain — and give you verified numbers to prove
            it.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.l}
                className="rounded-card border border-white/15 bg-white/[0.08] p-5"
              >
                <div className="font-display text-[32px] font-bold tracking-[-0.03em] text-white">
                  {s.n}
                </div>
                <div className="mt-1.5 text-[13px] text-[#cfe2d4]">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button href="/contact" variant="orange" icon="arrow-right">
              See our sustainability approach
            </Button>
          </div>
        </FeatureRow>
      </Container>
    </section>
  );
}
