import { Container, Eyebrow } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Shot } from "@/components/ui/Shot";

export function Hero() {
  return (
    <section className="overflow-hidden bg-near-black text-white">
      <Container className="grid items-center gap-[clamp(28px,4vw,48px)] py-[clamp(36px,5vw,60px)] lg:grid-cols-[1.02fr_1fr]">
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <Eyebrow light>
            R2v3 Certified ITAD · Secure data destruction · Electronics
            recycling
          </Eyebrow>
          <h1 className="mt-5 max-w-[13ch] text-[clamp(38px,6.4vw,66px)]">
            Electronics recycling, reimagined.
          </h1>
          <p className="mt-5 max-w-[46ch] text-[clamp(16px,2vw,20px)] text-[#d6e5db]">
            Secure. Certified. Sustainable. End-to-end hardware lifecycle
            management for organizations that can&rsquo;t afford a gap in the
            chain of custody.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button href="/collection" variant="primary" size="lg" icon="arrow-right">
              Request a collection
            </Button>
            <Button href="/locations" variant="ghost" size="lg">
              See service areas
            </Button>
          </div>
          <p className="mt-7 font-mono text-[12.5px] tracking-[0.05em] text-[#7fa389]">
            Banks · Data centres · Hospitals · Government · Telecom — across
            Greater Montréal &amp; Québec
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <Shot
            name="suntech-homepage-hero"
            alt="SunTech Recycle certified electronics recycling and secure ITAD services in Greater Montréal"
            priority
            sizes="(max-width: 860px) 100vw, 50vw"
          />
        </div>
      </Container>
    </section>
  );
}
