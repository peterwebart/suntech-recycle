import { Container, Section, Eyebrow } from "@/components/ui/Container";

const pillars = [
  {
    title: "Data security",
    body: "No drive leaves unaccounted for. Wiped to NIST 800-88 or physically destroyed, with a serialized certificate for every asset.",
  },
  {
    title: "Regulatory compliance",
    body: "Audit-ready documentation for Law 25, PIPEDA and your clients' frameworks — so your auditors see a closed loop.",
  },
  {
    title: "ESG reporting",
    body: "Verified diversion and recovery data you can drop straight into your sustainability report — not estimates.",
  },
  {
    title: "Recovered value",
    body: "Functional assets are remarketed, not shredded — returning value to your balance sheet instead of pure cost.",
  },
];

export function Pillars() {
  return (
    <Section tone="paper" id="why">
      <Container>
        <div data-reveal className="max-w-[64ch]">
          <Eyebrow>Why enterprises choose us</Eyebrow>
          <h2 className="mt-3.5 text-[clamp(28px,4.4vw,44px)]">
            You&rsquo;re not buying recycling. You&rsquo;re buying certainty.
          </h2>
          <p className="mt-4 text-[18px] text-ink-soft">
            When retired hardware leaves your building, the liability
            doesn&rsquo;t. We close the loop — provably.
          </p>
        </div>
        <div className="mt-13 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              className="border-t-2 border-ink pt-5"
            >
              <h3 className="text-[20px]">{p.title}</h3>
              <p className="mt-2.5 text-[15.5px] text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
