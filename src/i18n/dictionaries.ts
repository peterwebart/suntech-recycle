import type { Locale } from "@/i18n/config";

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * English is the source of truth; French overlays it. Any French string left
 * out falls back to English via deepMerge, so the build is always green and
 * functional while translation fills in.
 */

const en = {
  common: {
    skipToContent: "Skip to content",
    learnMore: "Learn more",
    viewAllServices: "View all services",
    seeServiceAreas: "See service areas",
    allServiceAreas: "All service areas",
    viewAllAreas: "View all areas",
    requestCollection: "Request a collection",
    explore: "Explore",
    requestAssessment: "Request a recycling assessment",
    requestDestructionQuote: "Request a secure destruction quote",
    whatR2v3Means: "What R2v3 means",
    getDirections: "Get directions",
    callNow: "Call now",
    orCall: "Or call",
    generalContact: "General contact",
    facility: "Facility",
    ourFacility: "Our facility",
  },
  nav: {
    services: "Services",
    serviceAreas: "Service areas",
    r2v3Certified: "R2v3 Certified",
    about: "About",
    contact: "Contact",
    servicesColumn: "What we handle",
    servicesFeaturedTitle: "One R2v3-certified partner, dock to certificate",
    servicesFeaturedBody:
      "Collection, secure data destruction, IT asset disposition and recovery under a single chain of custody.",
    servicesFeaturedCta: "View all services",
    areasColumn: "Where we operate",
    areasFeaturedTitle: "Across Canada, the US & Mexico",
    areasFeaturedBody:
      "Local collection across Greater Montréal, plus secure mail-in ITAD and data destruction North-America-wide.",
    areasFeaturedCta: "See all areas",
    areaAllCanada: "All Canadian cities",
    areaAllUs: "All US cities",
    areaAllMexico: "All Mexican cities",
    regionIslandMontreal: "Island of Montréal",
    regionNorthShore: "North Shore",
    regionSouthShoreFacility: "South Shore · facility",
    regionOntario: "Ontario",
    regionBC: "British Columbia",
    regionUS: "United States",
    regionMexico: "Mexico",
  },
  footer: {
    blurb:
      "R2v3 certified IT asset disposition, secure data destruction and business electronics recycling for enterprise and government across Greater Montréal — with a documented chain of custody on every asset.",
    company: "Company",
    services: "Services",
    serviceAreas: "Service areas",
    contact: "Contact",
    allServiceAreas: "All service areas →",
    rights: "All rights reserved.",
  },
  breadcrumbs: {
    home: "Home",
    serviceAreas: "Service areas",
    services: "Services",
    contact: "Contact",
    about: "About",
    certification: "R2v3 certification",
    collection: "Request a collection",
  },
  hero: {
    eyebrow:
      "R2v3 Certified ITAD · Secure data destruction · Electronics recycling",
    title: "Electronics recycling, reimagined.",
    body: "Secure. Certified. Sustainable. End-to-end hardware lifecycle management for organizations that can’t afford a gap in the chain of custody.",
    clientLine:
      "Banks · Data centres · Hospitals · Government · Telecom — across Greater Montréal & Québec",
  },
  certStrip: {
    pre: "SunTech Recycle is a",
    link: "SERI R2v3 certified",
    post: "electronics recycler — independently audited for secure data destruction, responsible recycling and downstream accountability.",
  },
  metrics: {
    yearsLabel: "Years in operation",
    tonnesLabel: "Tonnes recycled",
    clientsLabel: "Corporate clients served",
    collectionsLabel: "Collections completed",
  },
  pillars: {
    eyebrow: "Why enterprises choose us",
    title: "You’re not buying recycling. You’re buying certainty.",
    intro:
      "When retired hardware leaves your building, the liability doesn’t. We close the loop — provably.",
    items: [
      {
        title: "Data security",
        body: "No drive leaves unaccounted for. Wiped to NIST 800-88 or physically destroyed, with a serialized certificate for every asset.",
      },
      {
        title: "Regulatory compliance",
        body: "Audit-ready documentation for Law 25, PIPEDA and your clients' frameworks — so your auditors see a closed loop.",
      },
      {
        title: "ESG reporting",
        body: "Verified diversion and recovery data you can drop straight into your sustainability report — not estimates.",
      },
      {
        title: "Recovered value",
        body: "Functional assets are remarketed, not shredded — returning value to your balance sheet instead of pure cost.",
      },
    ],
  },
  servicesPreview: {
    eyebrow: "Services",
    title: "One accountable partner, from dock to certificate.",
    intro:
      "Computers, servers, networking, phones, cables and communication-room equipment — collected, processed and documented under one chain of custody. Industrial, mechanical, hydraulic and pneumatic equipment included.",
  },
  chainOfCustody: {
    eyebrow: "Chain of custody",
    title: "Every asset, tracked from your dock to its certificate.",
    intro:
      "A breach during disposal is still your breach. Our custody trail lets you prove exactly what happened to every device — to any auditor, regulator or client.",
    steps: [
      {
        title: "Secure collection",
        body: "Locked totes or trailers on site, tamper-evident seals, GPS-tracked transport.",
      },
      {
        title: "Custody transit",
        body: "Custody logged at every handoff. Optional witnessed or on-site destruction.",
      },
      {
        title: "Audited processing",
        body: "Data sanitized or destroyed; assets triaged for reuse, refurbishment or recovery.",
      },
      {
        title: "Certificate & data",
        body: "Serialized certificate of destruction plus a diversion and recovery report.",
      },
    ],
  },
  freePickup: {
    kicker: "Free collection",
    title: "Free business collection across Greater Montréal.",
    body: "20 items or more? We collect at no charge — offices, warehouses, server rooms and bulk commercial. Locked totes, scheduled routes, and a receipt for everything we collect.",
    areas:
      "Montréal · Laval · Longueuil · South & North Shore · West Island",
  },
  industries: {
    kicker: "Industries",
    title: "Built for regulated, high-stakes environments",
    intro:
      "The sectors where a disposal mistake makes headlines — and where our documentation earns its keep.",
    names: [
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
    ],
  },
  esg: {
    kicker: "ESG & circular economy",
    title: "Your hardware, accounted for in your ESG report.",
    intro:
      "We keep electronics out of landfill and feed recovered materials back into the supply chain — and give you verified numbers to prove it.",
    cta: "See our sustainability approach",
    stats: [
      { n: "98%", l: "Landfill diversion rate" },
      { n: "8.4 kt", l: "Materials recovered" },
      { n: "—", l: "tCO₂e avoided" },
      { n: "100%", l: "Downstream audited" },
    ],
  },
  businessValue: {
    eyebrow: "Why it pays off",
    heading: "The business case, not just the green case",
    intro:
      "Electronics recycling is an environmental good — but for your organization it is also a risk, cost and recovery decision. Here is what it does for the business.",
  },
  whyChoose: {
    eyebrow: "Why businesses choose SunTech",
    titleDefault:
      "A certified commercial recycling partner — not a junk service",
    titlePlace: (place: string) => `Why businesses in ${place} choose SunTech`,
    intro:
      "We work with banks, data centres, hospitals, government and enterprise: local collection across Greater Montréal, plus secure, mail-in IT asset disposition and data destruction for clients across North America.",
    reasons: [
      {
        title: "R2v3 certified recycler",
        body: "Independently audited to the leading SERI R2v3 standard for secure, responsible recycling and ITAD.",
      },
      {
        title: "Secure data destruction",
        body: "NIST 800-88 wiping or physical destruction, with a serialized certificate for every asset.",
      },
      {
        title: "Business electronics recycling",
        body: "Built for enterprise, government and commercial volumes — not residential drop-off.",
      },
      {
        title: "Commercial collection services",
        body: "Scheduled, free collection for qualifying volumes, with locked totes and a receipt for everything.",
      },
      {
        title: "Asset recovery programs",
        body: "Remarketing, e-scrap buyback and IT asset recovery that return value to your balance sheet.",
      },
      {
        title: "ESG reporting benefits",
        body: "Verified landfill-diversion and recovery data you can drop straight into your ESG reporting.",
      },
    ],
  },
  pageCta: {
    title: "Ready to retire hardware the accountable way?",
    body: "Tell us roughly what you need to collect or destroy. We respond within one business day with a scope and a quote.",
  },
  finalCta: {
    eyebrow: "Free corporate recycling assessment",
    title: "Find out what your retired hardware is costing — and what it’s worth.",
    body: "Tell us roughly what you need to collect or destroy. We respond within one business day with a scope and a quote.",
  },
  certBadge: {
    caption: "R2v3 Certified",
    sub: "SERI R2v3 Standard",
  },
  reviews: {
    eyebrow: "What clients say",
    title: (place: string) => `Trusted by businesses across ${place}`,
  },
  servicesIndex: {
    metaTitle:
      "Services — Recycling, Data Destruction & ITAD | SunTech Recycle",
    metaDescription:
      "R2v3 certified electronics recycling, secure data destruction, IT asset disposition, data-centre decommissioning and metal recycling for businesses across North America.",
    eyebrow: "Services",
    h1: "One R2v3-certified partner, from dock to certificate.",
    intro:
      "Collection, secure data destruction, IT asset disposition, decommissioning and recovery — handled under a single, documented chain of custody.",
  },
  serviceDetail: {
    capabilitiesTitle: "What's included",
    highlightsTitle: "Why it matters",
    r2v3LinkText: "This service is delivered under our SERI R2v3 certification.",
    r2v3LinkCta: "See what R2v3 covers",
    otherServices: "Other services",
  },
  locationsIndex: {
    metaTitle: "Service Areas — Canada, USA & Mexico | SunTech Recycle",
    metaDescription:
      "R2v3 certified electronics recycling, secure data destruction and ITAD. Free on-site collection across Greater Montréal, plus secure service for businesses across Canada, the United States and Mexico.",
    eyebrow: "Service areas",
    h1: "Local in Montréal. Certified across North America.",
    intro:
      "From our facility in Longueuil we provide fast, free on-site collection across Greater Montréal — and secure, fully trackable IT asset disposition and data destruction for businesses across Canada, the United States and Mexico.",
    mapCaption: "Orange marks our Longueuil facility · green marks cities we serve",
    hubsEyebrow: "Greater Montréal — our home region",
    hubsTitle: "Free on-site collection, same-week scheduling",
    hubsIntro:
      "Across the South Shore, the Island, the North Shore and the West Island — with the same documented chain of custody on every asset.",
    countriesEyebrow: "Across North America",
    countriesTitle: "Secure ITAD & data destruction, country-wide",
    servicesSuffix: "services",
    allCountryAreas: (c: string) => `All ${c} areas`,
    moreSuffix: "more",
  },
  locationDetail: {
    citiesWeServe: (c: string) => `Cities we serve in ${c}`,
    montrealNeighbourhoods: "Montréal neighbourhoods",
    coverageIn: (n: string) => `Coverage in ${n}`,
    areasServed: "Areas served",
    howWeServe: "How we serve you",
    servedIntro: "Neighbourhoods and sectors we regularly collect from:",
    available: (where: string) => `Available in ${where}`,
    everyService: "Every service, same chain of custody",
    otherAreas: (c: string) => `Other areas in ${c}`,
    region: "the region",
    facilityCaption: (street: string) => `Our processing facility — ${street}`,
    localCaption: (n: string) => `${n} coverage · orange marks our Longueuil facility`,
    serveBullets: {
      onsiteFree: "Fast, free on-site collection for qualifying volumes",
      onsiteProject: "Project-based on-site collection for larger volumes",
      mailIn: "Secure, fully trackable mail-in service for drives & IT assets",
      certificate: "Serialized certificate of destruction per asset",
      custody: "Documented chain of custody, end to end",
    },
    countryH1: (c: string) => `Electronics recycling & ITAD in ${c}.`,
    cityH1: (n: string) => `Electronics recycling & data destruction in ${n}.`,
    countryCtaTitle: (c: string) => `Retire hardware anywhere in ${c}`,
    cityCtaTitle: (n: string) =>
      `Electronics recycling & data destruction in ${n}`,
    cityCtaBody: (phone: string, where: string) =>
      `Request a collection or a secure destruction quote. Call ${phone} — local collection in Greater Montréal and secure service ${where}.`,
    acrossCanada: "across Canada",
    inCountry: (c: string) => `in ${c}`,
  },
  collection: {
    metaTitle: "Request a Free Business Collection | SunTech Recycle",
    metaDescription:
      "Book a free, R2v3 certified electronics collection for your business. Computers, servers, monitors and IT assets collected with sealed transport, secure data destruction and a serialized certificate. Free on-site collection across Greater Montréal; secure service across Canada, the USA and Mexico.",
    eyebrow: "Request a collection",
    h1: "Book a free business collection.",
    intro:
      "Free, R2v3 certified collection of your retired computers, servers and electronics — sealed transport, secure data destruction and a serialized certificate on every drive. Free on-site collection across Greater Montréal; secure, trackable service across Canada, the United States and Mexico.",
    howEyebrow: "How collection works",
    howTitle: "Four steps, fully documented",
    steps: [
      {
        title: "Tell us what you have",
        body: "Send a rough inventory — equipment types, volume, location and whether drives need destruction. A photo of the pile is plenty to start.",
      },
      {
        title: "We schedule the collection",
        body: "We confirm a window — often same-week in Greater Montréal — and brief you on access, parking and dock requirements so the day runs clean.",
      },
      {
        title: "Sealed, accountable transport",
        body: "Assets are inventoried, loaded into our vehicles and moved under a documented chain of custody. Storage media stays tracked end to end.",
      },
      {
        title: "Receipt & certificates",
        body: "You receive a collection receipt, a serialized certificate of data destruction per drive, and a recovery report for your records and ESG reporting.",
      },
    ],
    whoEyebrow: "Who we collect for",
    whoTitle: "From a few units to a full teardown",
    whoBody:
      "Whether you’re clearing a closet of old laptops or decommissioning a server room, we scale the collection to the job and keep the paperwork audit-ready.",
    contexts: [
      "Office cleanouts & relocations",
      "Warehouse & facility decommissioning",
      "Server room & data-centre teardown",
      "End-of-lease returns & refresh swaps",
      "Regulated: clinics, finance, government",
      "Schools, retail & SMBs",
    ],
    whatEyebrow: "What we collect",
    whatTitle: "IT & electronic assets",
    equipment: [
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
    ],
    freeTitle: "Free on-site collection",
    freeBody:
      "For qualifying business volumes across Greater Montréal — the South Shore, Island, North Shore and West Island. We collect, you get the certificates. No charge for eligible loads.",
    freeLink: "See Greater Montréal coverage",
    secureTitle: "Secure service across North America",
    secureBody:
      "Outside the Montréal region — or for smaller volumes — we arrange secure, fully trackable transport and mail-in data destruction for businesses across Canada, the USA and Mexico.",
    secureLink: "View all service areas",
    ctaTitle: "Ready to clear out your old hardware?",
    ctaBody: (phone: string) =>
      `Send a rough inventory and we’ll come back within one business day with a collection window and a quote where one applies. Prefer to talk it through? Call ${phone}.`,
    mailSubject: "Free business collection request",
    mailBody:
      "Hi SunTech,\n\nWe'd like to book a collection.\n\n- Equipment & approximate volume:\n- Pickup location (address / city):\n- Data destruction required (yes/no):\n- Preferred date / timeline:\n- Loading dock or floor access notes:\n\nThanks,",
  },
  contact: {
    metaTitle: "Contact SunTech Recycle | Free Corporate Recycling Quote",
    metaDescription:
      "Contact SunTech Recycle in Longueuil for R2v3 certified electronics recycling, secure data destruction and ITAD. Request a collection, a recycling assessment or a secure destruction quote across Greater Montréal.",
    eyebrow: "Contact",
    h1: "Request a collection or a secure destruction quote.",
    intro:
      "Tell us roughly what you need to retire and we respond within one business day with a scope and a quote. For active server rooms and regulated environments, we’ll scope on-site or witnessed destruction.",
    getInTouch: "Get in touch",
    phone: "Phone",
    email: "Email",
    hours: "Hours",
    emailQuote: "Email a quote request",
    bookingPickup: "Booking a pickup?",
    mailSubject: "Corporate recycling quote request",
    mailBody:
      "Hi SunTech,\n\nWe'd like a quote. Roughly what we need to retire:\n- Equipment / volume:\n- Location:\n- Data destruction required (yes/no):\n- Timeline:\n\nThanks,",
  },
  about: {
    metaTitle: "About SunTech Recycle | R2v3 Certified ITAD Partner",
    metaDescription:
      "SunTech Recycle is an R2v3 certified electronics recycler and ITAD partner based in Greater Montréal, serving businesses across North America with secure data destruction and asset recovery.",
    eyebrow: "About",
    h1: "A certified partner for the full hardware lifecycle.",
    intro:
      "SunTech Recycle helps organizations retire IT and electronic assets securely, compliantly and profitably — from a single, accountable chain of custody.",
    rolesTitle: "What we are",
    roles: [
      {
        title: "R2v3 certified recycler",
        body: "Independently audited to the SERI R2v3 standard for secure, responsible recycling and downstream accountability.",
      },
      {
        title: "ITAD partner",
        body: "IT asset disposition for enterprise, government and commercial fleets — wiped, recovered and reported.",
      },
      {
        title: "Secure data destruction provider",
        body: "NIST 800-88 wiping and physical destruction with a serialized certificate for every asset.",
      },
      {
        title: "Asset recovery specialist",
        body: "E-scrap buyback, remarketing and recovery that return value to your balance sheet.",
      },
    ],
    approachTitle: "How we work",
    approachBody:
      "Every engagement runs on the same principle: nothing leaves unaccounted for. We collect, sanitize or destroy, recover value, and hand you the documentation your auditors, regulators and clients expect.",
  },
  certification: {
    metaTitle:
      "SERI R2v3 Certification | Secure, Responsible Recycling | SunTech Recycle",
    metaDescription:
      "SunTech Recycle is a SERI R2v3 certified electronics recycler. Learn what R2v3 means for secure data destruction, regulatory compliance, environmental responsibility and downstream accountability.",
    eyebrow: "Certification",
    h1: "A SERI R2v3 certified electronics recycler.",
    whatTitle: "What R2v3 means",
    benefitsTitle: "What certification gives you",
    chainTitle: "Chain of custody & standards",
    standardsTitle: "Standards we operate to",
  },
} satisfies Record<string, unknown>;

type Dict = typeof en;
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends (...args: any[]) => any
    ? T[K]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

/* ── French overlay ───────────────────────────────────────────────────────── */
const fr: DeepPartial<Dict> = {
  common: {
    skipToContent: "Aller au contenu",
    learnMore: "En savoir plus",
    viewAllServices: "Voir tous les services",
    seeServiceAreas: "Voir les zones desservies",
    allServiceAreas: "Toutes les zones desservies",
    viewAllAreas: "Voir toutes les zones",
    requestCollection: "Demander une collecte",
    explore: "Découvrir",
    requestAssessment: "Demander une évaluation de recyclage",
    requestDestructionQuote: "Demander une soumission de destruction sécurisée",
    whatR2v3Means: "Ce que signifie R2v3",
    getDirections: "Obtenir l’itinéraire",
    callNow: "Appeler maintenant",
    orCall: "Ou composez le",
    generalContact: "Coordonnées générales",
    facility: "Usine",
    ourFacility: "Notre usine",
  },
  nav: {
    services: "Services",
    serviceAreas: "Zones desservies",
    r2v3Certified: "Certifié R2v3",
    about: "À propos",
    contact: "Contact",
    servicesColumn: "Ce que nous traitons",
    servicesFeaturedTitle: "Un partenaire certifié R2v3, du quai au certificat",
    servicesFeaturedBody:
      "Collecte, destruction sécurisée des données, disposition des actifs TI et récupération sous une seule chaîne de possession.",
    servicesFeaturedCta: "Voir tous les services",
    areasColumn: "Où nous intervenons",
    areasFeaturedTitle: "Au Canada, aux États-Unis et au Mexique",
    areasFeaturedBody:
      "Collecte locale dans le Grand Montréal, plus disposition des actifs TI et destruction des données par envoi sécurisé partout en Amérique du Nord.",
    areasFeaturedCta: "Voir toutes les zones",
    areaAllCanada: "Toutes les villes canadiennes",
    areaAllUs: "Toutes les villes américaines",
    areaAllMexico: "Toutes les villes mexicaines",
    regionIslandMontreal: "Île de Montréal",
    regionNorthShore: "Rive-Nord",
    regionSouthShoreFacility: "Rive-Sud · usine",
    regionOntario: "Ontario",
    regionBC: "Colombie-Britannique",
    regionUS: "États-Unis",
    regionMexico: "Mexique",
  },
  footer: {
    blurb:
      "Disposition des actifs TI certifiée R2v3, destruction sécurisée des données et recyclage d’électronique d’entreprise pour les organisations et le gouvernement dans le Grand Montréal — avec une chaîne de possession documentée sur chaque actif.",
    company: "Entreprise",
    services: "Services",
    serviceAreas: "Zones desservies",
    contact: "Contact",
    allServiceAreas: "Toutes les zones desservies →",
    rights: "Tous droits réservés.",
  },
  breadcrumbs: {
    home: "Accueil",
    serviceAreas: "Zones desservies",
    services: "Services",
    contact: "Contact",
    about: "À propos",
    certification: "Certification R2v3",
    collection: "Demander une collecte",
  },
  hero: {
    eyebrow:
      "ITAD certifié R2v3 · Destruction sécurisée des données · Recyclage d’électronique",
    title: "Le recyclage d’électronique, repensé.",
    body: "Sécuritaire. Certifié. Durable. Gestion complète du cycle de vie du matériel pour les organisations qui ne peuvent tolérer aucune faille dans la chaîne de possession.",
    clientLine:
      "Banques · Centres de données · Hôpitaux · Gouvernement · Télécoms — dans le Grand Montréal et au Québec",
  },
  certStrip: {
    pre: "SunTech Recycle est un recycleur d’électronique",
    link: "certifié SERI R2v3",
    post: "— audité de façon indépendante pour la destruction sécurisée des données, le recyclage responsable et la traçabilité en aval.",
  },
  metrics: {
    yearsLabel: "Années d’activité",
    tonnesLabel: "Tonnes recyclées",
    clientsLabel: "Clients corporatifs servis",
    collectionsLabel: "Collectes réalisées",
  },
  pillars: {
    eyebrow: "Pourquoi les entreprises nous choisissent",
    title: "Vous n’achetez pas du recyclage. Vous achetez la certitude.",
    intro:
      "Quand le matériel retiré quitte vos locaux, la responsabilité, elle, demeure. Nous fermons la boucle — de façon prouvable.",
    items: [
      {
        title: "Sécurité des données",
        body: "Aucun disque ne part sans être comptabilisé. Effacé selon NIST 800-88 ou détruit physiquement, avec un certificat sérialisé pour chaque actif.",
      },
      {
        title: "Conformité réglementaire",
        body: "Documentation prête pour l’audit pour la Loi 25, la LPRPDE et les cadres de vos clients — pour que vos auditeurs voient une boucle fermée.",
      },
      {
        title: "Rapports ESG",
        body: "Des données vérifiées de détournement et de récupération que vous intégrez directement à votre rapport de durabilité — pas des estimations.",
      },
      {
        title: "Valeur récupérée",
        body: "Les actifs fonctionnels sont remis en marché, pas déchiquetés — ce qui renvoie de la valeur à votre bilan plutôt qu’un pur coût.",
      },
    ],
  },
  servicesPreview: {
    eyebrow: "Services",
    title: "Un seul partenaire responsable, du quai au certificat.",
    intro:
      "Ordinateurs, serveurs, équipement réseau, téléphones, câbles et matériel de salle de communication — collectés, traités et documentés sous une seule chaîne de possession. Équipement industriel, mécanique, hydraulique et pneumatique inclus.",
  },
  chainOfCustody: {
    eyebrow: "Chaîne de possession",
    title: "Chaque actif, suivi de votre quai jusqu’à son certificat.",
    intro:
      "Une fuite pendant la disposition demeure votre fuite. Notre traçabilité vous permet de prouver exactement ce qui est arrivé à chaque appareil — à tout auditeur, organisme de réglementation ou client.",
    steps: [
      {
        title: "Collecte sécurisée",
        body: "Bacs ou remorques verrouillés sur place, sceaux inviolables, transport suivi par GPS.",
      },
      {
        title: "Transit sous possession",
        body: "Possession consignée à chaque transfert. Destruction témoin ou sur place en option.",
      },
      {
        title: "Traitement audité",
        body: "Données effacées ou détruites; actifs triés pour réemploi, remise à neuf ou récupération.",
      },
      {
        title: "Certificat et données",
        body: "Certificat de destruction sérialisé ainsi qu’un rapport de détournement et de récupération.",
      },
    ],
  },
  freePickup: {
    kicker: "Collecte gratuite",
    title: "Collecte d’entreprise gratuite dans le Grand Montréal.",
    body: "20 articles ou plus? Nous collectons sans frais — bureaux, entrepôts, salles de serveurs et volumes commerciaux. Bacs verrouillés, trajets planifiés et un reçu pour tout ce que nous collectons.",
    areas: "Montréal · Laval · Longueuil · Rive-Sud et Rive-Nord · Ouest-de-l’Île",
  },
  industries: {
    kicker: "Secteurs",
    title: "Conçu pour les environnements réglementés à enjeux élevés",
    intro:
      "Les secteurs où une erreur de disposition fait les manchettes — et où notre documentation prend toute sa valeur.",
    names: [
      "Institutions financières",
      "Centres de données",
      "Santé",
      "Gouvernement",
      "Télécommunications",
      "Éducation",
      "Fabrication",
      "Technologie",
      "Commerce de détail",
      "Logistique",
      "Énergie",
    ],
  },
  esg: {
    kicker: "ESG et économie circulaire",
    title: "Votre matériel, comptabilisé dans votre rapport ESG.",
    intro:
      "Nous gardons l’électronique hors des sites d’enfouissement et réinjectons les matériaux récupérés dans la chaîne d’approvisionnement — avec des chiffres vérifiés à l’appui.",
    cta: "Voir notre approche en durabilité",
    stats: [
      { n: "98 %", l: "Taux de détournement de l’enfouissement" },
      { n: "8,4 kt", l: "Matériaux récupérés" },
      { n: "—", l: "tCO₂e évitées" },
      { n: "100 %", l: "Filière aval auditée" },
    ],
  },
  businessValue: {
    eyebrow: "Pourquoi c’est rentable",
    heading: "L’argument d’affaires, pas seulement l’argument écologique",
    intro:
      "Le recyclage d’électronique est un bien environnemental — mais pour votre organisation, c’est aussi une décision de risque, de coût et de récupération. Voici ce qu’il apporte à l’entreprise.",
  },
  whyChoose: {
    eyebrow: "Pourquoi les entreprises choisissent SunTech",
    titleDefault:
      "Un partenaire de recyclage commercial certifié — pas un service de rebuts",
    titlePlace: (place: string) =>
      `Pourquoi les entreprises de ${place} choisissent SunTech`,
    intro:
      "Nous travaillons avec des banques, des centres de données, des hôpitaux, le gouvernement et les grandes entreprises : collecte locale dans le Grand Montréal, plus disposition des actifs TI et destruction des données par envoi sécurisé pour des clients partout en Amérique du Nord.",
    reasons: [
      {
        title: "Recycleur certifié R2v3",
        body: "Audité de façon indépendante selon la norme de référence SERI R2v3 pour un recyclage et un ITAD sécuritaires et responsables.",
      },
      {
        title: "Destruction sécurisée des données",
        body: "Effacement NIST 800-88 ou destruction physique, avec un certificat sérialisé pour chaque actif.",
      },
      {
        title: "Recyclage d’électronique d’entreprise",
        body: "Conçu pour les volumes d’entreprise, gouvernementaux et commerciaux — pas pour le dépôt résidentiel.",
      },
      {
        title: "Services de collecte commerciale",
        body: "Collecte gratuite et planifiée pour les volumes admissibles, avec bacs verrouillés et un reçu pour tout.",
      },
      {
        title: "Programmes de récupération d’actifs",
        body: "Remise en marché, rachat de rebuts électroniques et récupération d’actifs TI qui renvoient de la valeur à votre bilan.",
      },
      {
        title: "Avantages pour vos rapports ESG",
        body: "Des données vérifiées de détournement et de récupération à intégrer directement à vos rapports ESG.",
      },
    ],
  },
  pageCta: {
    title: "Prêt à retirer votre matériel de façon responsable?",
    body: "Dites-nous approximativement ce que vous devez collecter ou détruire. Nous répondons en un jour ouvrable avec une portée et une soumission.",
  },
  finalCta: {
    eyebrow: "Évaluation corporative de recyclage gratuite",
    title:
      "Découvrez ce que votre matériel retiré vous coûte — et ce qu’il vaut.",
    body: "Dites-nous approximativement ce que vous devez collecter ou détruire. Nous répondons en un jour ouvrable avec une portée et une soumission.",
  },
  certBadge: {
    caption: "Certifié R2v3",
    sub: "Norme SERI R2v3",
  },
  reviews: {
    eyebrow: "Avis de clients",
    title: (place: string) => `Reconnu par les entreprises de ${place}`,
  },
  servicesIndex: {
    metaTitle: "Services — Recyclage, destruction de données et ITAD | SunTech Recycle",
    metaDescription:
      "Recyclage d’électronique certifié R2v3, destruction sécurisée des données, disposition des actifs TI, démantèlement de centres de données et recyclage des métaux pour les entreprises partout en Amérique du Nord.",
    eyebrow: "Services",
    h1: "Un partenaire certifié R2v3, du quai au certificat.",
    intro:
      "Collecte, destruction sécurisée des données, disposition des actifs TI, démantèlement et récupération — sous une seule chaîne de possession documentée.",
  },
  serviceDetail: {
    capabilitiesTitle: "Ce qui est inclus",
    highlightsTitle: "Pourquoi c’est important",
    r2v3LinkText: "Ce service est offert sous notre certification SERI R2v3.",
    r2v3LinkCta: "Voir ce que couvre R2v3",
    otherServices: "Autres services",
  },
  locationsIndex: {
    metaTitle: "Zones desservies — Canada, États-Unis et Mexique | SunTech Recycle",
    metaDescription:
      "Recyclage d’électronique certifié R2v3, destruction sécurisée des données et ITAD. Collecte gratuite sur place dans le Grand Montréal, plus service sécurisé pour les entreprises au Canada, aux États-Unis et au Mexique.",
    eyebrow: "Zones desservies",
    h1: "Local à Montréal. Certifié partout en Amérique du Nord.",
    intro:
      "Depuis notre usine de Longueuil, nous offrons une collecte sur place rapide et gratuite dans le Grand Montréal — et une disposition des actifs TI et une destruction des données sécurisées et entièrement traçables pour les entreprises au Canada, aux États-Unis et au Mexique.",
    mapCaption:
      "L’orange indique notre usine de Longueuil · le vert indique les villes desservies",
    hubsEyebrow: "Grand Montréal — notre région d’attache",
    hubsTitle: "Collecte gratuite sur place, planifiée dans la semaine",
    hubsIntro:
      "Sur la Rive-Sud, l’Île, la Rive-Nord et l’Ouest-de-l’Île — avec la même chaîne de possession documentée sur chaque actif.",
    countriesEyebrow: "Partout en Amérique du Nord",
    countriesTitle: "ITAD et destruction de données sécurisés, à l’échelle nationale",
    servicesSuffix: "— services",
    allCountryAreas: (c: string) => `Toutes les zones — ${c}`,
    moreSuffix: "de plus",
  },
  locationDetail: {
    citiesWeServe: (c: string) => `Villes desservies — ${c}`,
    montrealNeighbourhoods: "Quartiers de Montréal",
    coverageIn: (n: string) => `Couverture — ${n}`,
    areasServed: "Secteurs desservis",
    howWeServe: "Comment nous vous servons",
    servedIntro: "Quartiers et secteurs où nous collectons régulièrement :",
    available: (where: string) => `Offert à ${where}`,
    everyService: "Tous les services, la même chaîne de possession",
    otherAreas: (c: string) => `Autres zones — ${c}`,
    region: "la région",
    facilityCaption: (street: string) => `Notre usine de traitement — ${street}`,
    localCaption: (n: string) =>
      `Couverture de ${n} · l’orange indique notre usine de Longueuil`,
    serveBullets: {
      onsiteFree: "Collecte sur place rapide et gratuite pour les volumes admissibles",
      onsiteProject: "Collecte sur place par projet pour les volumes plus importants",
      mailIn:
        "Service par envoi sécurisé et entièrement traçable pour les disques et actifs TI",
      certificate: "Certificat de destruction sérialisé par actif",
      custody: "Chaîne de possession documentée, de bout en bout",
    },
    countryH1: (c: string) => `Recyclage d’électronique et ITAD — ${c}.`,
    cityH1: (n: string) =>
      `Recyclage d’électronique et destruction de données à ${n}.`,
    countryCtaTitle: (c: string) => `Retirez du matériel partout — ${c}`,
    cityCtaTitle: (n: string) =>
      `Recyclage d’électronique et destruction de données à ${n}`,
    cityCtaBody: (phone: string, where: string) =>
      `Demandez une collecte ou une soumission de destruction sécurisée. Composez le ${phone} — collecte locale dans le Grand Montréal et service sécurisé ${where}.`,
    acrossCanada: "partout au Canada",
    inCountry: (c: string) => `${c}`,
  },
  collection: {
    metaTitle: "Demander une collecte d’entreprise gratuite | SunTech Recycle",
    metaDescription:
      "Réservez une collecte d’électronique gratuite et certifiée R2v3 pour votre entreprise. Ordinateurs, serveurs, écrans et actifs TI collectés avec transport scellé, destruction sécurisée des données et certificat sérialisé. Collecte gratuite sur place dans le Grand Montréal; service sécurisé au Canada, aux États-Unis et au Mexique.",
    eyebrow: "Demander une collecte",
    h1: "Réservez une collecte d’entreprise gratuite.",
    intro:
      "Collecte gratuite et certifiée R2v3 de vos ordinateurs, serveurs et appareils électroniques retirés — transport scellé, destruction sécurisée des données et certificat sérialisé sur chaque disque. Collecte gratuite sur place dans le Grand Montréal; service sécurisé et traçable au Canada, aux États-Unis et au Mexique.",
    howEyebrow: "Comment se déroule la collecte",
    howTitle: "Quatre étapes, entièrement documentées",
    steps: [
      {
        title: "Dites-nous ce que vous avez",
        body: "Envoyez un inventaire approximatif — types d’équipement, volume, emplacement et besoin de destruction des disques. Une photo de la pile suffit pour commencer.",
      },
      {
        title: "Nous planifions la collecte",
        body: "Nous confirmons une plage horaire — souvent dans la semaine dans le Grand Montréal — et précisons les accès, le stationnement et le quai pour que tout roule.",
      },
      {
        title: "Transport scellé et traçable",
        body: "Les actifs sont inventoriés, chargés dans nos véhicules et déplacés sous une chaîne de possession documentée. Les supports de stockage restent suivis de bout en bout.",
      },
      {
        title: "Reçu et certificats",
        body: "Vous recevez un reçu de collecte, un certificat de destruction des données sérialisé par disque et un rapport de récupération pour vos dossiers et vos rapports ESG.",
      },
    ],
    whoEyebrow: "Pour qui nous collectons",
    whoTitle: "De quelques appareils à un démantèlement complet",
    whoBody:
      "Que vous vidiez un placard de vieux portables ou démanteliez une salle de serveurs, nous adaptons la collecte à l’ampleur du travail et gardons la documentation prête pour l’audit.",
    contexts: [
      "Vidange et déménagement de bureaux",
      "Démantèlement d’entrepôts et d’installations",
      "Démantèlement de salles de serveurs et de centres de données",
      "Retours de fin de bail et remplacements",
      "Réglementé : cliniques, finance, gouvernement",
      "Écoles, commerces et PME",
    ],
    whatEyebrow: "Ce que nous collectons",
    whatTitle: "Actifs TI et électroniques",
    equipment: [
      "Ordinateurs de bureau et tout-en-un",
      "Portables",
      "Écrans et moniteurs",
      "Serveurs et châssis lames",
      "Équipement réseau et commutateurs",
      "Baies de stockage (SAN / NAS)",
      "Disques durs et SSD",
      "Bandes et supports de sauvegarde",
      "Onduleurs et batteries",
      "Imprimantes, copieurs et multifonctions",
      "Téléphones, tablettes et mobiles",
      "Équipement VoIP et télécom",
      "Terminaux PDV et bornes",
      "Équipement audiovisuel et de conférence",
      "Câblage et accessoires",
      "Blocs d’alimentation et PDU",
      "Équipement de laboratoire et de test",
      "Baies et armoires",
      "Périphériques et stations d’accueil",
      "Électronique de fin de vie diverse",
    ],
    freeTitle: "Collecte gratuite sur place",
    freeBody:
      "Pour les volumes d’entreprise admissibles dans le Grand Montréal — la Rive-Sud, l’Île, la Rive-Nord et l’Ouest-de-l’Île. Nous collectons, vous obtenez les certificats. Sans frais pour les chargements admissibles.",
    freeLink: "Voir la couverture du Grand Montréal",
    secureTitle: "Service sécurisé partout en Amérique du Nord",
    secureBody:
      "À l’extérieur de la région de Montréal — ou pour de plus petits volumes — nous organisons un transport sécurisé et entièrement traçable et une destruction des données par envoi pour les entreprises au Canada, aux États-Unis et au Mexique.",
    secureLink: "Voir toutes les zones desservies",
    ctaTitle: "Prêt à vous débarrasser de votre vieux matériel?",
    ctaBody: (phone: string) =>
      `Envoyez un inventaire approximatif et nous reviendrons en un jour ouvrable avec une plage de collecte et une soumission s’il y a lieu. Vous préférez en discuter? Composez le ${phone}.`,
    mailSubject: "Demande de collecte d’entreprise gratuite",
    mailBody:
      "Bonjour SunTech,\n\nNous aimerions réserver une collecte.\n\n- Équipement et volume approximatif :\n- Lieu de collecte (adresse / ville) :\n- Destruction des données requise (oui/non) :\n- Date / échéancier souhaité :\n- Notes sur le quai ou l’accès à l’étage :\n\nMerci,",
  },
  contact: {
    metaTitle: "Contacter SunTech Recycle | Soumission corporative gratuite",
    metaDescription:
      "Contactez SunTech Recycle à Longueuil pour le recyclage d’électronique certifié R2v3, la destruction sécurisée des données et l’ITAD. Demandez une collecte, une évaluation de recyclage ou une soumission de destruction sécurisée dans le Grand Montréal.",
    eyebrow: "Contact",
    h1: "Demandez une collecte ou une soumission de destruction sécurisée.",
    intro:
      "Dites-nous approximativement ce que vous devez retirer et nous répondons en un jour ouvrable avec une portée et une soumission. Pour les salles de serveurs actives et les environnements réglementés, nous évaluons une destruction sur place ou témoin.",
    getInTouch: "Nous joindre",
    phone: "Téléphone",
    email: "Courriel",
    hours: "Heures",
    emailQuote: "Envoyer une demande de soumission",
    bookingPickup: "Vous réservez une collecte?",
    mailSubject: "Demande de soumission corporative de recyclage",
    mailBody:
      "Bonjour SunTech,\n\nNous aimerions une soumission. Approximativement ce que nous devons retirer :\n- Équipement / volume :\n- Emplacement :\n- Destruction des données requise (oui/non) :\n- Échéancier :\n\nMerci,",
  },
  about: {
    metaTitle: "À propos de SunTech Recycle | Partenaire ITAD certifié R2v3",
    metaDescription:
      "SunTech Recycle est un recycleur d’électronique certifié R2v3 et un partenaire ITAD établi dans le Grand Montréal, au service des entreprises partout en Amérique du Nord avec destruction sécurisée des données et récupération d’actifs.",
    eyebrow: "À propos",
    h1: "Un partenaire certifié pour tout le cycle de vie du matériel.",
    intro:
      "SunTech Recycle aide les organisations à retirer leurs actifs TI et électroniques de façon sécuritaire, conforme et rentable — à partir d’une seule chaîne de possession responsable.",
    rolesTitle: "Ce que nous sommes",
    roles: [
      {
        title: "Recycleur certifié R2v3",
        body: "Audité de façon indépendante selon la norme SERI R2v3 pour un recyclage responsable et une traçabilité en aval.",
      },
      {
        title: "Partenaire ITAD",
        body: "Disposition des actifs TI pour les parcs d’entreprise, gouvernementaux et commerciaux — effacés, récupérés et documentés.",
      },
      {
        title: "Fournisseur de destruction sécurisée des données",
        body: "Effacement NIST 800-88 et destruction physique avec un certificat sérialisé pour chaque actif.",
      },
      {
        title: "Spécialiste de la récupération d’actifs",
        body: "Rachat de rebuts électroniques, remise en marché et récupération qui renvoient de la valeur à votre bilan.",
      },
    ],
    approachTitle: "Comment nous travaillons",
    approachBody:
      "Chaque mandat suit le même principe : rien ne part sans être comptabilisé. Nous collectons, effaçons ou détruisons, récupérons la valeur et vous remettons la documentation qu’attendent vos auditeurs, organismes de réglementation et clients.",
  },
  certification: {
    metaTitle:
      "Certification SERI R2v3 | Recyclage sécuritaire et responsable | SunTech Recycle",
    metaDescription:
      "SunTech Recycle est un recycleur d’électronique certifié SERI R2v3. Découvrez ce que signifie R2v3 pour la destruction sécurisée des données, la conformité réglementaire, la responsabilité environnementale et la traçabilité en aval.",
    eyebrow: "Certification",
    h1: "Un recycleur d’électronique certifié SERI R2v3.",
    whatTitle: "Ce que signifie R2v3",
    benefitsTitle: "Ce que la certification vous apporte",
    chainTitle: "Chaîne de possession et normes",
    standardsTitle: "Les normes que nous appliquons",
  },
};

/* ── Merge + accessor ─────────────────────────────────────────────────────── */
function isPlainObject(v: unknown): v is Record<string, any> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function deepMerge<T>(base: T, overlay: any): T {
  if (!isPlainObject(base) || !isPlainObject(overlay)) {
    return (overlay ?? base) as T;
  }
  const out: any = Array.isArray(base) ? [...(base as any)] : { ...base };
  for (const key of Object.keys(overlay)) {
    out[key] = deepMerge((base as any)[key], overlay[key]);
  }
  return out as T;
}

const dictionaries: Record<Locale, Dict> = {
  en,
  fr: deepMerge(en, fr),
};

export type Dictionary = Dict;

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale] ?? dictionaries.en;
}
