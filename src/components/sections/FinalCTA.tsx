import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

/** Homepage closing CTA carrying the three standard conversion actions. */
export function FinalCTA() {
  return (
    <Section tone="paper" id="contact">
      <Container>
        <div
          data-reveal
          className="relative overflow-hidden rounded-xl2 border border-line bg-light px-6 py-[clamp(34px,6vw,64px)] text-center"
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[5px] bg-gradient-to-r from-green via-green-2 to-orange"
          />
          <Eyebrow>Free corporate recycling assessment</Eyebrow>
          <h2 className="mx-auto mt-3.5 max-w-[22ch] text-[clamp(26px,4vw,40px)]">
            Find out what your retired hardware is costing — and what it&rsquo;s
            worth.
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-[18px] text-ink-soft">
            Tell us roughly what you need to collect or destroy. We respond
            within one business day with a scope and a quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Button href="/collection" variant="primary" size="lg" icon="arrow-right">
              Request a collection
            </Button>
            <Button href="/contact?intent=assessment" variant="ghost-dark" size="lg">
              Request a recycling assessment
            </Button>
            <Button href="/contact?intent=destruction" variant="ghost-dark" size="lg">
              Request a secure destruction quote
            </Button>
          </div>
          <p className="mt-6 text-[14.5px] text-ink-soft">
            Or call{" "}
            <a
              href={`tel:${site.phone.tel}`}
              className="font-semibold text-green hover:underline"
            >
              {site.phone.display}
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
