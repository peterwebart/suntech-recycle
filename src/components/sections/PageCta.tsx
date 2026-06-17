import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CertBadge } from "@/components/ui/CertBadge";

/**
 * Inner-page CTA band carrying the three standard conversion actions:
 * Request a Collection (primary), Request a Recycling Assessment, and
 * Request a Secure Destruction Quote.
 */
export function PageCta({
  title = "Ready to retire hardware the accountable way?",
  body = "Tell us roughly what you need to collect or destroy. We respond within one business day with a scope and a quote.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <Section tone="forest">
      <Container>
        <div data-reveal className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-[clamp(26px,3.6vw,38px)] text-white">{title}</h2>
            <p className="mt-3 max-w-[54ch] text-[17px] text-white/80">{body}</p>
            <div className="mt-5">
              <CertBadge variant="dark" size={52} />
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Button
              href="/collection"
              variant="orange"
              size="lg"
              icon="arrow-right"
              className="w-full justify-center sm:w-auto"
            >
              Request a collection
            </Button>
            <Button
              href="/contact?intent=assessment"
              variant="ghost"
              size="md"
              className="w-full justify-center sm:w-auto"
            >
              Request a recycling assessment
            </Button>
            <Button
              href="/contact?intent=destruction"
              variant="ghost"
              size="md"
              className="w-full justify-center sm:w-auto"
            >
              Request a secure destruction quote
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
