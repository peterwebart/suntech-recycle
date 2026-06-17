import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { businessValue } from "@/data/businessValue";

export function BusinessValue({
  heading = "The business case, not just the green case",
  intro = "Electronics recycling is an environmental good — but for your organization it is also a risk, cost and recovery decision. Here is what it does for the business.",
}: {
  heading?: string;
  intro?: string;
}) {
  return (
    <Section tone="paper">
      <Container>
        <div data-reveal className="max-w-[64ch]">
          <Eyebrow>Why it pays off</Eyebrow>
          <h2 className="mt-3.5 text-[clamp(24px,3.6vw,36px)]">{heading}</h2>
          <p className="mt-4 text-[18px] text-ink-soft">{intro}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {businessValue.map((block, i) => (
            <div
              key={block.id}
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 60}ms` } as React.CSSProperties}
              className="rounded-card border border-line bg-light p-7"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green text-white">
                <Icon name={block.icon} size={22} />
              </span>
              <h3 className="mt-4 text-[20px]">{block.title}</h3>
              <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft">
                {block.lead}
              </p>
              <ul className="mt-4 grid gap-2.5">
                {block.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
                      <Icon name="check" size={13} />
                    </span>
                    <span className="text-[14.5px] text-ink">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
