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

/* ── French overlay (fields omitted fall back to English) ─────────────────── */
import type { Locale } from "@/i18n/config";
import { deepMerge, type DeepPartial } from "@/i18n/merge";

const servicesFr: Record<string, DeepPartial<Service>> = {
  "electronics-recycling": {
    shortName: "Recyclage d’électronique",
    name: "Recyclage d’électronique",
    kicker: "Recyclage d’électronique",
    summary:
      "Ordinateurs, serveurs, équipement réseau et appareils mobiles triés, démantelés et traités dans notre usine — matériaux récupérés et rien envoyé à l’enfouissement.",
    title: "Un traitement responsable, entièrement documenté.",
    lead: "Ordinateurs, portables, serveurs, écrans, imprimantes, équipement réseau, appareils mobiles, câbles et blocs d’alimentation sont triés, démantelés et traités dans notre usine. Les matériaux sont récupérés et réinjectés dans la chaîne d’approvisionnement — et rien n’est envoyé à l’enfouissement. Tout circule sous une seule chaîne de possession, pour que vous puissiez prouver exactement ce qui est arrivé à chaque appareil.",
    capabilities: [
      "Postes de travail, portables et ordinateurs de bureau",
      "Serveurs, stockage et équipement réseau",
      "Écrans, moniteurs et téléviseurs",
      "Imprimantes, copieurs et périphériques",
      "Téléphones, tablettes et appareils mobiles",
      "Câbles, blocs d’alimentation et onduleurs",
      "Équipement télécom et de salle de communication",
      "Équipement industriel, mécanique, hydraulique et pneumatique",
    ],
    highlights: [
      {
        title: "Zéro enfouissement",
        body: "L’équipement en fin de vie est démantelé et séparé en flux de matériaux récupérables — jamais envoyé à l’enfouissement.",
      },
      {
        title: "Récupération des matériaux",
        body: "Métaux, plastiques et circuits imprimés sont récupérés et réinjectés dans la chaîne d’approvisionnement plutôt que perdus.",
      },
      {
        title: "Une seule chaîne de possession",
        body: "Collecte, transport et traitement sont consignés de bout en bout, avec un rapport de détournement et de récupération à la fin.",
      },
    ],
    seo: {
      title: "Recyclage d’électronique dans le Grand Montréal | SunTech Recycle",
      description:
        "Recyclage d’électronique et de rebuts électroniques certifié pour les entreprises : ordinateurs, serveurs, réseau, écrans et appareils mobiles traités avec chaîne de possession complète. Collecte gratuite dans le Grand Montréal.",
    },
  },
  "secure-data-destruction": {
    shortName: "Destruction de données",
    name: "Destruction sécurisée des données",
    kicker: "Destruction sécurisée des données",
    summary:
      "Disques durs et SSD effacés selon NIST 800-88 ou déchiquetés physiquement sous sceau inviolable — avec un certificat de destruction sérialisé pour chaque actif.",
    title: "Aucun disque ne part sans être comptabilisé.",
    lead: "Les disques durs et SSD sont effacés selon la norme NIST 800-88 ou déchiquetés physiquement, sous clé et sceau inviolable. Chaque actif est suivi par numéro de série et associé à un certificat de destruction, pour que vos auditeurs, organismes de réglementation et clients voient une boucle fermée — pas une faille. La destruction sur place et témoin est offerte pour les environnements les plus sensibles.",
    capabilities: [
      "Assainissement des données NIST 800-88",
      "Déchiquetage sur place ou en usine",
      "Option de destruction témoin",
      "Démagnétisation des supports magnétiques",
      "Disques durs, SSD, bandes et supports mobiles",
      "Transport sous sceau inviolable",
      "Certificat sérialisé par actif",
      "Traçabilité complète prête pour l’audit",
    ],
    highlights: [
      {
        title: "Un certificat par actif",
        body: "Chaque disque est consigné par numéro de série et lié à un certificat de destruction sérialisé — pas un simple reçu global.",
      },
      {
        title: "Conforme à la Loi 25 et à la LPRPDE",
        body: "La documentation est conçue pour la Loi 25 du Québec, la LPRPDE et les cadres de vos clients, pour que la disposition résiste à l’audit.",
      },
      {
        title: "Sur place ou témoin",
        body: "Pour les environnements réglementés, les disques peuvent être détruits sur votre site ou sous votre supervision avant que quoi que ce soit ne quitte les lieux.",
      },
    ],
    seo: {
      title: "Destruction sécurisée des données et déchiquetage de disques | SunTech Recycle",
      description:
        "Effacement de données NIST 800-88 et déchiquetage physique de disques avec un certificat de destruction sérialisé pour chaque actif. Destruction sur place et témoin dans le Grand Montréal et au Québec.",
    },
  },
  itad: {
    shortName: "ITAD",
    name: "Disposition des actifs TI (ITAD)",
    kicker: "Disposition des actifs TI",
    summary:
      "Chaque actif est scanné, audité et trié : l’équipement fonctionnel est effacé et remis en marché, renvoyant de la valeur à votre bilan; le reste est recyclé de façon responsable.",
    title: "Récupérez de la valeur, ne faites pas que disposer.",
    lead: "Chaque actif est scanné, audité et trié. L’équipement fonctionnel est effacé de façon sécurisée puis remis en marché ou remis à neuf, renvoyant de la valeur à votre bilan; le reste est recyclé de façon responsable. Vous obtenez un seul partenaire responsable gérant tout le cycle de vie du matériel — avec un rapport de règlement et de récupération de valeur que vous pouvez remettre aux finances.",
    capabilities: [
      "Scan et audit des actifs",
      "Assainissement certifié des données",
      "Remise en marché et revente",
      "Remise à neuf et réemploi",
      "Gestion des retours de location",
      "Logistique et transport sécurisés",
      "Rapport de récupération de valeur",
      "Règlement et rapprochement",
    ],
    highlights: [
      {
        title: "De la valeur de retour au bilan",
        body: "Les actifs fonctionnels sont remis en marché, pas déchiquetés — transformant un coût de disposition en valeur récupérée.",
      },
      {
        title: "Tri audité",
        body: "Chaque actif est scanné et rapproché, pour que ce qui a été retiré, effacé, revendu ou recyclé soit entièrement comptabilisé.",
      },
      {
        title: "Rapports prêts pour les finances",
        body: "Les rapports de règlement et de récupération donnent aux finances des chiffres clairs sur ce que votre matériel retiré a rapporté.",
      },
    ],
    seo: {
      title: "Disposition des actifs TI (ITAD) et remise en marché | SunTech Recycle",
      description:
        "ITAD certifié pour les entreprises : tri audité des actifs, effacement sécurisé des données, remise en marché et récupération de valeur avec rapports prêts pour les finances. Au service du Grand Montréal et du Québec.",
    },
  },
  "data-center-decommissioning": {
    shortName: "Démantèlement de centres de données",
    name: "Démantèlement de centres de données",
    kicker: "Démantèlement de centres de données",
    summary:
      "Démantèlement complet de baies et de serveurs avec destruction sur place ou témoin, transport suivi par GPS et traçabilité de bout en bout — conçu pour les environnements actifs et réglementés.",
    title: "Des salles de serveurs vidées sans le risque.",
    lead: "Démantèlement complet de baies et de serveurs avec destruction sur place ou témoin, transport suivi par GPS et traçabilité de bout en bout. Les projets sont gérés étage par étage et rapprochés actif par actif — conçus pour les environnements actifs et réglementés où les temps d’arrêt et l’exposition des données ne sont pas des options.",
    capabilities: [
      "Démontage de baies et d’armoires",
      "Collecte de serveurs et de stockage",
      "Collecte de câbles, PDU et onduleurs",
      "Destruction des données sur place",
      "Transport suivi par GPS",
      "Gestion de projet étage par étage",
      "Rapprochement des actifs",
      "Possession consignée à chaque transfert",
    ],
    highlights: [
      {
        title: "Conçu pour les environnements actifs",
        body: "Le démantèlement est séquencé autour de vos opérations, avec des options de destruction qui gardent les données à l’intérieur des lieux.",
      },
      {
        title: "Suivi de bout en bout",
        body: "Le transport suivi par GPS et la possession consignée à chaque transfert signifient que rien ne bouge sans trace.",
      },
      {
        title: "Rapproché actif par actif",
        body: "Chaque baie et appareil est comptabilisé par rapport à votre inventaire avant la clôture du projet.",
      },
    ],
    seo: {
      title: "Démantèlement de centres de données et recyclage de serveurs | SunTech Recycle",
      description:
        "Démantèlement sécurisé de centres de données : démontage de baies, destruction sur place, transport suivi par GPS et rapprochement des actifs pour les environnements actifs et réglementés au Québec.",
    },
  },
  "metal-recycling": {
    shortName: "Recyclage des métaux",
    name: "Recyclage des métaux",
    kicker: "Recyclage des métaux",
    summary:
      "Aluminium, cuivre, zinc, acier inoxydable et métaux précieux récupérés de l’équipement en fin de vie et des rebuts industriels, puis réinjectés dans la chaîne d’approvisionnement.",
    title: "Cuivre, aluminium, acier et métaux précieux, récupérés.",
    lead: "L’aluminium, le cuivre, le zinc, l’acier inoxydable et les métaux précieux sont récupérés de l’équipement en fin de vie et des rebuts industriels, puis réinjectés dans la chaîne d’approvisionnement. Nous traitons les sources électroniques et industrielles et faisons rapport sur le poids et la récupération, pour que la valeur des matériaux récupérés soit visible plutôt que perdue.",
    capabilities: [
      "Cuivre et laiton",
      "Aluminium",
      "Acier inoxydable et au carbone",
      "Zinc et plomb",
      "Récupération de métaux précieux",
      "Câbles et fils",
      "Transformateurs et moteurs",
      "Rebuts industriels",
    ],
    highlights: [
      {
        title: "Récupération des matériaux",
        body: "Les métaux sont séparés et récupérés des rebuts électroniques et industriels plutôt que jetés.",
      },
      {
        title: "De retour dans la chaîne d’approvisionnement",
        body: "Les matériaux récupérés sont retournés à la chaîne d’approvisionnement, soutenant une véritable économie circulaire.",
      },
      {
        title: "Rapport de poids et de récupération",
        body: "Vous recevez un rapport clair de ce qui a été collecté et récupéré, par poids et par flux de matériaux.",
      },
    ],
    seo: {
      title: "Recyclage des métaux et récupération de matériaux | SunTech Recycle",
      description:
        "Récupération de cuivre, d’aluminium, d’acier, de zinc et de métaux précieux à partir d’équipement en fin de vie et de rebuts industriels, avec rapport de poids et de récupération. Au service du Grand Montréal et du Québec.",
    },
  },
};

export const serviceSlugs = services.map((s) => s.slug);

function localizeService(s: Service, locale: Locale): Service {
  if (locale === "en") return s;
  const overlay = servicesFr[s.slug];
  return overlay ? deepMerge(s, overlay) : s;
}

export function getServices(locale: Locale): Service[] {
  return services.map((s) => localizeService(s, locale));
}

export function getService(locale: Locale, slug: string): Service | undefined {
  const s = services.find((x) => x.slug === slug);
  return s ? localizeService(s, locale) : undefined;
}
