import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { CertBadge } from "@/components/ui/CertBadge";

/** Slim trust band: R2v3 certification badge + supporting line. */
export function CertStrip() {
  return (
    <section className="border-b border-line bg-paper">
      <Container>
        <div className="flex flex-col items-center gap-5 py-7 text-center sm:flex-row sm:justify-between sm:text-left">
          <CertBadge size={60} />
          <p className="max-w-[56ch] text-[15px] text-ink-soft">
            SunTech Recycle is a{" "}
            <Link
              href="/r2v3-certification"
              className="font-semibold text-green hover:underline"
            >
              SERI R2v3 certified
            </Link>{" "}
            electronics recycler — independently audited for secure data
            destruction, responsible recycling and downstream accountability.
          </p>
          <Link
            href="/r2v3-certification"
            className="inline-flex shrink-0 items-center gap-1.5 text-[14px] font-semibold text-green"
          >
            What R2v3 means
            <Icon name="arrow-right" size={15} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
