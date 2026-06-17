import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/data/services";

export default function NotFound() {
  return (
    <section className="bg-near-black text-white">
      <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="font-mono text-[13px] uppercase tracking-[0.18em] text-green-2">
          404 — Page not found
        </span>
        <h1 className="mt-4 max-w-[18ch] text-[clamp(32px,5vw,52px)]">
          This page has been recycled.
        </h1>
        <p className="mt-4 max-w-[46ch] text-[17px] text-[#d6e5db]">
          The page you&rsquo;re looking for isn&rsquo;t here. Let&rsquo;s get you
          back to something useful.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <Button href="/" variant="primary" size="lg" icon="arrow-right">
            Back to home
          </Button>
          <Button href="/contact" variant="ghost" size="lg">
            Contact us
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-[13.5px] font-medium text-white/80 transition-colors hover:border-green-2 hover:text-white"
            >
              <Icon name={s.icon} size={14} />
              {s.shortName}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
