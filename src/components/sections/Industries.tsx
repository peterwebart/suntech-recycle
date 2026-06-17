import { Container, Section } from "@/components/ui/Container";
import { FeatureRow } from "@/components/sections/FeatureRow";

const industries = [
  "Financial institutions",
  "Data centres",
  "Healthcare",
  "Government",
  "Telecommunications",
  "Education",
  "Manufacturing",
  "Technology",
  "Retail",
  "Logistics",
  "Energy",
];

export function Industries() {
  return (
    <Section tone="light" id="industries">
      <Container>
        <FeatureRow
          kicker="Industries"
          title="Built for regulated, high-stakes environments"
          image="suntech-enterprise-industries"
          imageAlt="Electronics recycling services for banks, hospitals, government, telecom and enterprises"
        >
          <p>
            The sectors where a disposal mistake makes headlines — and where our
            documentation earns its keep.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {industries.map((name) => (
              <li
                key={name}
                className="rounded-full border border-line bg-paper px-4 py-2.5 text-[14.5px] font-medium text-ink transition-colors hover:border-green-2 hover:text-green"
              >
                {name}
              </li>
            ))}
          </ul>
        </FeatureRow>
      </Container>
    </Section>
  );
}
