import type { IconName } from "@/components/ui/Icon";

export type ServiceHighlight = {
  title: string;
  body: string;
};

export type Service = {
  slug: string;
  /** Short label for nav, breadcrumbs and chips. */
  shortName: string;
  /** Full marketing name. */
  name: string;
  /** Mono eyebrow label. */
  kicker: string;
  icon: IconName;
  /** One-line summary for cards and the megamenu. */
  summary: string;
  /** Page H1. */
  title: string;
  /** Opening paragraph on the detail page. */
  lead: string;
  image: string;
  imageAlt: string;
  capabilities: string[];
  highlights: ServiceHighlight[];
  seo: {
    title: string;
    description: string;
  };
};

export const services: Service[] = [
  {
    slug: "electronics-recycling",
    shortName: "Electronics recycling",
    name: "Electronics Recycling",
    kicker: "Electronics recycling",
    icon: "chip",
    summary:
      "Computers, servers, networking and mobile devices sorted, dismantled and processed in our facility — with materials recovered and nothing sent to landfill.",
    title: "Responsible processing, fully documented.",
    lead: "Computers, laptops, servers, monitors, printers, networking gear, mobile devices, cables and power supplies are sorted, dismantled and processed in our facility. Materials are recovered and reintroduced to the supply chain — and nothing is sent to landfill. Everything moves under one chain of custody, so you can prove exactly what happened to every device.",
    image: "suntech-electronics-recycling-facility",
    imageAlt:
      "Modern electronics recycling facility processing computers, laptops and electronic waste",
    capabilities: [
      "Desktops, laptops & workstations",
      "Servers, storage & networking gear",
      "Monitors, displays & TVs",
      "Printers, copiers & peripherals",
      "Phones, tablets & mobile devices",
      "Cables, power supplies & UPS",
      "Telecom & communication-room equipment",
      "Industrial, mechanical, hydraulic & pneumatic equipment",
    ],
    highlights: [
      {
        title: "Zero landfill",
        body: "End-of-life equipment is dismantled and separated into recoverable material streams — never shipped to landfill.",
      },
      {
        title: "Material recovery",
        body: "Metals, plastics and circuit boards are recovered and fed back into the supply chain instead of being lost.",
      },
      {
        title: "One chain of custody",
        body: "Collection, transport and processing are logged end to end, with a diversion and recovery report at the close.",
      },
    ],
    seo: {
      title: "Electronics Recycling in Greater Montréal | SunTech Recycle",
      description:
        "Certified electronics and e-waste recycling for business: computers, servers, networking, monitors and mobile devices processed with full chain of custody. Free collection across Greater Montréal.",
    },
  },
  {
    slug: "secure-data-destruction",
    shortName: "Data destruction",
    name: "Secure Data Destruction",
    kicker: "Secure data destruction",
    icon: "shield",
    summary:
      "Hard drives and SSDs wiped to NIST 800-88 or physically shredded under tamper-evident seal — with a serialized certificate of destruction for every asset.",
    title: "No drive leaves unaccounted for.",
    lead: "Hard drives and SSDs are wiped to the NIST 800-88 standard or physically shredded, under lock and tamper-evident seal. Every asset is tracked by serial number and matched to a certificate of destruction, so your auditors, regulators and clients see a closed loop — not a gap. On-site and witnessed destruction are available for the most sensitive environments.",
    image: "suntech-secure-data-destruction",
    imageAlt:
      "Secure hard drive and SSD data destruction for corporate electronics recycling",
    capabilities: [
      "NIST 800-88 data sanitization",
      "On-site or in-facility shredding",
      "Witnessed destruction option",
      "Degaussing for magnetic media",
      "HDDs, SSDs, tape & mobile media",
      "Tamper-evident sealed transport",
      "Serialized certificate per asset",
      "Full, audit-ready custody trail",
    ],
    highlights: [
      {
        title: "Certificate per asset",
        body: "Each drive is recorded by serial number and tied to a serialized certificate of destruction — not a single blanket receipt.",
      },
      {
        title: "Law 25 & PIPEDA ready",
        body: "Documentation is built for Québec's Law 25, PIPEDA and your clients' frameworks, so disposal stands up to audit.",
      },
      {
        title: "On-site or witnessed",
        body: "For regulated environments, drives can be destroyed at your site or under your witness before anything leaves the building.",
      },
    ],
    seo: {
      title: "Secure Data Destruction & Hard Drive Shredding | SunTech Recycle",
      description:
        "NIST 800-88 data wiping and physical hard-drive shredding with a serialized certificate of destruction for every asset. On-site and witnessed destruction across Greater Montréal and Québec.",
    },
  },
  {
    slug: "itad",
    shortName: "ITAD",
    name: "IT Asset Disposition (ITAD)",
    kicker: "IT asset disposition",
    icon: "refresh",
    summary:
      "Every asset is scanned, audited and triaged: functional equipment is wiped and remarketed, returning value to your balance sheet; the rest is recycled responsibly.",
    title: "Recover value, not just dispose of it.",
    lead: "Every asset is scanned, audited and triaged. Functional equipment is securely wiped and remarketed or refurbished, returning value to your balance sheet; the rest is recycled responsibly. You get a single, accountable partner managing the full hardware lifecycle — with settlement and value-recovery reporting you can take to finance.",
    image: "suntech-itad-solutions",
    imageAlt:
      "IT asset disposition and remarketing services for enterprise hardware lifecycle",
    capabilities: [
      "Asset scanning & audit",
      "Certified data sanitization",
      "Remarketing & resale",
      "Refurbishment & reuse",
      "Lease-return handling",
      "Secure logistics & transport",
      "Value-recovery reporting",
      "Settlement & reconciliation",
    ],
    highlights: [
      {
        title: "Value back to the balance sheet",
        body: "Functional assets are remarketed, not shredded — turning a disposal cost into recovered value.",
      },
      {
        title: "Audited triage",
        body: "Each asset is scanned and reconciled, so what was retired, wiped, resold or recycled is fully accounted for.",
      },
      {
        title: "Finance-ready reporting",
        body: "Settlement and recovery reports give finance clear numbers on what your retired hardware returned.",
      },
    ],
    seo: {
      title: "IT Asset Disposition (ITAD) & Remarketing | SunTech Recycle",
      description:
        "Certified ITAD for enterprise: audited asset triage, secure data wiping, remarketing and value recovery with finance-ready reporting. Serving Greater Montréal and Québec.",
    },
  },
  {
    slug: "data-center-decommissioning",
    shortName: "Data centre decommissioning",
    name: "Data Centre Decommissioning",
    kicker: "Data centre decommissioning",
    icon: "server",
    summary:
      "Full rack and server decommissioning with on-site or witnessed destruction, GPS-tracked transport and end-to-end custody logging — built for live, regulated environments.",
    title: "Server rooms cleared without the risk.",
    lead: "Full rack and server decommissioning with on-site or witnessed destruction, GPS-tracked transport and end-to-end custody logging. Projects are managed floor by floor and reconciled asset by asset — built for live, regulated environments where downtime and data exposure are not options.",
    image: "suntech-data-center-decommissioning",
    imageAlt:
      "Data centre decommissioning and server recycling with chain of custody tracking",
    capabilities: [
      "Rack & cabinet teardown",
      "Server & storage collection",
      "Cable, PDU & UPS collection",
      "On-site data destruction",
      "GPS-tracked transport",
      "Floor-by-floor project management",
      "Asset reconciliation",
      "Custody logging at every handoff",
    ],
    highlights: [
      {
        title: "Built for live environments",
        body: "Decommissioning is sequenced around your operations, with destruction options that keep data inside the building.",
      },
      {
        title: "Tracked end to end",
        body: "GPS-tracked transport and custody logged at every handoff mean nothing moves without a record.",
      },
      {
        title: "Reconciled asset by asset",
        body: "Every rack and device is accounted for against your inventory before the project is closed out.",
      },
    ],
    seo: {
      title: "Data Centre Decommissioning & Server Recycling | SunTech Recycle",
      description:
        "Secure data centre decommissioning: rack teardown, on-site destruction, GPS-tracked transport and asset reconciliation for live, regulated environments across Québec.",
    },
  },
  {
    slug: "metal-recycling",
    shortName: "Metal recycling",
    name: "Metal Recycling",
    kicker: "Metal recycling",
    icon: "layers",
    summary:
      "Aluminium, copper, zinc, stainless steel and precious metals recovered from end-of-life equipment and industrial scrap, then fed back into the supply chain.",
    title: "Copper, aluminium, steel and precious metals, recovered.",
    lead: "Aluminium, copper, zinc, stainless steel and precious metals are recovered from end-of-life equipment and industrial scrap, then fed back into the supply chain. We handle both electronic and industrial sources and report on weight and recovery, so the value of recovered material is visible rather than lost.",
    image: "suntech-metal-recycling",
    imageAlt:
      "Copper, aluminium, stainless steel and precious metal recovery from electronic waste",
    capabilities: [
      "Copper & brass",
      "Aluminium",
      "Stainless & carbon steel",
      "Zinc & lead",
      "Precious-metal recovery",
      "Cable & wire",
      "Transformers & motors",
      "Industrial scrap",
    ],
    highlights: [
      {
        title: "Material recovery",
        body: "Metals are separated and recovered from both electronic and industrial scrap rather than discarded.",
      },
      {
        title: "Back into the supply chain",
        body: "Recovered material is returned to the supply chain, supporting a genuine circular economy.",
      },
      {
        title: "Weight & recovery reporting",
        body: "You receive clear reporting on what was collected and recovered, by weight and material stream.",
      },
    ],
    seo: {
      title: "Metal Recycling & Material Recovery | SunTech Recycle",
      description:
        "Recovery of copper, aluminium, steel, zinc and precious metals from end-of-life equipment and industrial scrap, with weight and recovery reporting. Serving Greater Montréal and Québec.",
    },
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
