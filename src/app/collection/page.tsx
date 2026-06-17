import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CertBadge } from "@/components/ui/CertBadge";
import { site } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Request a Free Business Collection | SunTech Recycle",
  description:
    "Book a free, R2v3 certified electronics collection for your business. Computers, servers, monitors and IT assets collected with sealed transport, secure data destruction and a serialized certificate. Free on-site collection across Greater Montréal; secure service across Canada, the USA and Mexico.",
  path: "/collection",
});

const subject = encodeURIComponent("Free business collection request");
const body = encodeURIComponent(
  "Hi SunTech,\n\nWe'd like to book a collection.\n\n- Equipment & approximate volume:\n- Pickup location (address / city):\n- Data destruction required (yes/no):\n- Preferred date / timeline:\n- Loading dock or floor access notes:\n\nThanks,",
);
const mailtoCollection = `mailto:${site.email}?subject=${subject}&body=${body}`;

const steps: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "mail",
    title: "Tell us what you have",
    body: "Send a rough inventory — equipment types, volume, location and whether drives need destruction. A photo of the pile is plenty to start.",
  },
  {
    icon: "clock",
    title: "We schedule the collection",
    body: "We confirm a window — often same-week in Greater Montréal — and brief you on access, parking and dock requirements so the day runs clean.",
  },
  {
    icon: "shield",
    title: "Sealed, accountable transport",
    body: "Assets are inventoried, loaded into our vehicles and moved under a documented chain of custody. Storage media stays tracked end to end.",
  },
  {
    icon: "file-check",
    title: "Receipt & certificates",
    body: "You receive a collection receipt, a serialized certificate of data destruction per drive, and a recovery report for your records and ESG reporting.",
  },
];

const equipment: string[] = [
  "Desktops & all-in-ones",
  "Laptops & notebooks",
  "Monitors & displays",
  "Servers & blade chassis",
  "Networking & switches",
  "Storage arrays (SAN / NAS)",
  "Hard drives & SSDs",
  "Backup tapes & media",
  "UPS units & batteries",
  "Printers, copiers & MFPs",
  "Phones, tablets & mobiles",
  "VoIP & telecom gear",
  "POS & kiosk terminals",
  "AV & conferencing equipment",
  "Cabling & accessories",
  "Power supplies & PDUs",
  "Lab & test equipment",
  "Racks & enclosures",
  "Peripherals & docking stations",
  "Mixed end-of-life electronics",
];

const contexts: { icon: IconName; label: string }[] = [
  { icon: "layers", label: "Office cleanouts & relocations" },
  { icon: "truck", label: "Warehouse & facility decommissioning" },
  { icon: "server", label: "Server room & data-centre teardown" },
  { icon: "refresh", label: "End-of-lease returns & refresh swaps" },
  { icon: "shield", label: "Regulated: clinics, finance, government" },
  { icon: "recycle", label: "Schools, retail & SMBs" },
];

export default function CollectionPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Request a collection", path: "/collection" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="bg-near-black py-[clamp(40px,6vw,72px)] text-white">
        <Container>
          <Breadcrumbs light items={crumbs} />
          <Eyebrow light>Request a collection</Eyebrow>
          <h1 className="mt-3 max-w-[22ch] text-[clamp(34px,5.4vw,56px)]">
            Book a free business collection.
          </h1>
          <p className="mt-5 max-w-[58ch] text-[clamp(16px,2vw,19px)] text-[#d6e5db]">
            Free, R2v3 certified collection of your retired computers, servers
            and electronics — sealed transport, secure data destruction and a
            serialized certificate on every drive. Free on-site collection
            across Greater Montréal; secure, trackable service across Canada,
            the United States and Mexico.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <Button href={mailtoCollection} variant="primary" size="lg" icon="arrow-right">
              Request a collection
            </Button>
            <Button href={`tel:${site.phone.tel}`} variant="ghost" size="lg" icon="phone">
              {site.phone.display}
            </Button>
          </div>
          <div className="mt-7">
            <CertBadge variant="dark" size={52} />
          </div>
        </Container>
      </section>

      {/* How it works */}
      <Section tone="light">
        <Container>
          <div data-reveal className="max-w-[60ch]">
            <Eyebrow>How collection works</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(24px,3.6vw,36px)]">
              Four steps, fully documented
            </h2>
          </div>
          <ol className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li
                key={s.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}
                className="relative rounded-card border border-line bg-paper p-6"
              >
                <span className="font-mono text-[12px] font-semibold tracking-[0.1em] text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green/10 text-green">
                  <Icon name={s.icon} size={20} />
                </span>
                <h3 className="mt-3 text-[18px]">{s.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* What we collect */}
      <Section tone="paper">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div data-reveal>
              <Eyebrow>Who we collect for</Eyebrow>
              <h2 className="mt-3.5 text-[clamp(24px,3.4vw,34px)]">
                From a few units to a full teardown
              </h2>
              <p className="mt-4 text-[16px] text-ink-soft">
                Whether you&rsquo;re clearing a closet of old laptops or
                decommissioning a server room, we scale the collection to the
                job and keep the paperwork audit-ready.
              </p>
              <ul className="mt-6 grid gap-3">
                {contexts.map((c) => (
                  <li key={c.label} className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                      <Icon name={c.icon} size={18} />
                    </span>
                    <span className="text-[15.5px] font-medium text-ink">{c.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal>
              <Eyebrow>What we collect</Eyebrow>
              <h2 className="mt-3.5 text-[clamp(24px,3.4vw,34px)]">
                IT &amp; electronic assets
              </h2>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {equipment.map((e) => (
                  <li
                    key={e}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-light px-3.5 py-2 text-[13.5px] font-medium text-ink"
                  >
                    <Icon name="check" size={13} className="text-green" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Free vs secure mail-in */}
      <Section tone="light">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div
              data-reveal
              className="flex flex-col rounded-card border border-green/30 bg-green/[0.04] p-7"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green/15 text-green">
                <Icon name="truck" size={22} />
              </span>
              <h3 className="mt-4 text-[20px]">Free on-site collection</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                For qualifying business volumes across Greater Montréal — the
                South Shore, Island, North Shore and West Island. We collect,
                you get the certificates. No charge for eligible loads.
              </p>
              <Link
                href="/locations/canada"
                className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-green"
              >
                See Greater Montréal coverage
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>

            <div
              data-reveal
              className="flex flex-col rounded-card border border-line bg-paper p-7"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink/[0.06] text-ink">
                <Icon name="shield" size={22} />
              </span>
              <h3 className="mt-4 text-[20px]">Secure service across North America</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                Outside the Montréal region — or for smaller volumes — we
                arrange secure, fully trackable transport and mail-in data
                destruction for businesses across Canada, the USA and Mexico.
              </p>
              <Link
                href="/locations"
                className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-green"
              >
                View all service areas
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-forest py-[clamp(44px,6vw,76px)] text-white">
        <Container>
          <div data-reveal className="max-w-[60ch]">
            <h2 className="text-[clamp(26px,4vw,40px)]">
              Ready to clear out your old hardware?
            </h2>
            <p className="mt-4 text-[clamp(16px,2vw,18px)] text-[#cfe6d6]">
              Send a rough inventory and we&rsquo;ll come back within one
              business day with a collection window and a quote where one
              applies. Prefer to talk it through? Call {site.phone.display}.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <Button href={mailtoCollection} variant="orange" size="lg" icon="arrow-right">
                Request a collection
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                General contact
              </Button>
            </div>
            <div className="mt-8">
              <CertBadge variant="dark" size={48} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
