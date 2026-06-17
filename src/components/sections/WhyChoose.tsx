import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

type Reason = { icon: IconName; title: string; body: string };

const reasons: Reason[] = [
  {
    icon: "shield",
    title: "R2v3 certified recycler",
    body: "Independently audited to the leading SERI R2v3 standard for secure, responsible recycling and ITAD.",
  },
  {
    icon: "file-check",
    title: "Secure data destruction",
    body: "NIST 800-88 wiping or physical destruction, with a serialized certificate for every asset.",
  },
  {
    icon: "chip",
    title: "Business electronics recycling",
    body: "Built for enterprise, government and commercial volumes — not residential drop-off.",
  },
  {
    icon: "truck",
    title: "Commercial collection services",
    body: "Scheduled, free collection for qualifying volumes, with locked totes and a receipt for everything.",
  },
  {
    icon: "refresh",
    title: "Asset recovery programs",
    body: "Remarketing, e-scrap buyback and IT asset recovery that return value to your balance sheet.",
  },
  {
    icon: "leaf",
    title: "ESG reporting benefits",
    body: "Verified landfill-diversion and recovery data you can drop straight into your ESG reporting.",
  },
];

export function WhyChoose({
  place,
  tone = "light",
}: {
  /** Optional place name to localize the heading. */
  place?: string;
  tone?: "light" | "paper";
}) {
  return (
    <Section tone={tone}>
      <Container>
        <div data-reveal className="max-w-[64ch]">
          <Eyebrow>Why businesses choose SunTech</Eyebrow>
          <h2 className="mt-3.5 text-[clamp(24px,3.6vw,36px)]">
            {place
              ? `Why businesses in ${place} choose SunTech`
              : "A certified commercial recycling partner — not a junk service"}
          </h2>
          <p className="mt-4 text-[17px] text-ink-soft">
            We work with banks, data centres, hospitals, government and
            enterprise: local collection across Greater Montréal, plus secure,
            mail-in IT asset disposition and data destruction for clients across
            North America.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <li
              key={r.title}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 50}ms` } as React.CSSProperties}
              className="rounded-card border border-line bg-paper p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green/10 text-green">
                <Icon name={r.icon} size={20} />
              </span>
              <h3 className="mt-4 text-[17px]">{r.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                {r.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
