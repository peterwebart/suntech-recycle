import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FeatureRow } from "@/components/sections/FeatureRow";

export function FreePickup() {
  return (
    <Section tone="paper" id="collection">
      <Container>
        <FeatureRow
          kicker="Free collection"
          title="Free business collection across Greater Montréal."
          image="suntech-free-pickup"
          imageAlt="Free commercial electronics collection service across Greater Montréal"
          reversed
        >
          <p>
            20 items or more? We collect at no charge — offices, warehouses,
            server rooms and bulk commercial. Locked totes, scheduled routes,
            and a receipt for everything we collect.
          </p>
          <p className="mt-4 font-mono text-[12.5px] tracking-[0.04em] text-ink-soft">
            Montréal · Laval · Longueuil · South &amp; North Shore · West Island
          </p>
          <div className="mt-6 flex flex-wrap gap-3.5">
            <Button href="/collection" variant="primary" icon="arrow-right">
              Request a collection
            </Button>
            <Button href="/locations" variant="ghost-dark">
              See service areas
            </Button>
          </div>
        </FeatureRow>
      </Container>
    </Section>
  );
}
