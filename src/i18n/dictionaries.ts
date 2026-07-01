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
    areasFeaturedTitle: "Across Canada & the US",
    areasFeaturedBody:
      "Local collection across Greater Montréal, plus secure mail-in ITAD and data destruction North-America-wide.",
    areasFeaturedCta: "See all areas",
    areaAllCanada: "All Canadian cities",
    areaAllUs: "All US cities",
    regionIslandMontreal: "Island of Montréal",
    regionNorthShore: "North Shore",
    regionSouthShoreFacility: "South Shore · facility",
    regionOntario: "Ontario",
    regionBC: "British Columbia",
    regionUS: "United States",
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
    trustLine: "Certified electronics recycling & secure IT asset disposition",
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
    metaTitle: "Service Areas — Canada & USA | SunTech Recycle",
    metaDescription:
      "R2v3 certified electronics recycling, secure data destruction and ITAD. Free on-site collection across Greater Montréal, plus secure service for businesses across Canada and the United States.",
    eyebrow: "Service areas",
    h1: "Local in Montréal. Certified across North America.",
    intro:
      "From our facility in Longueuil we provide fast, free on-site collection across Greater Montréal — and secure, fully trackable IT asset disposition and data destruction for businesses across Canada and the United States.",
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
      "Book a free, R2v3 certified electronics collection for your business. Computers, servers, monitors and IT assets collected with sealed transport, secure data destruction and a serialized certificate. Free on-site collection across Greater Montréal; secure service across Canada and the USA.",
    eyebrow: "Request a collection",
    h1: "Book a free business collection.",
    intro:
      "Free, R2v3 certified collection of your retired computers, servers and electronics — sealed transport, secure data destruction and a serialized certificate on every drive. Free on-site collection across Greater Montréal; secure, trackable service across Canada and the United States.",
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
      "Outside the Montréal region — or for smaller volumes — we arrange secure, fully trackable transport and mail-in data destruction for businesses across Canada and the USA.",
    secureLink: "View all service areas",
    ctaTitle: "Ready to clear out your old hardware?",
    ctaBody: (phone: string) =>
      `Send a rough inventory and we’ll come back within one business day with a collection window and a quote where one applies. Prefer to talk it through? Call ${phone}.`,
    mailSubject: "Free business collection request",
    mailBody:
      "Hi SunTech,\n\nWe'd like to book a collection.\n\n- Equipment & approximate volume:\n- Collection location (address / city):\n- Data destruction required (yes/no):\n- Preferred date / timeline:\n- Loading dock or floor access notes:\n\nThanks,",
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
    bookingPickup: "Booking a collection?",
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
    industriesTitle: "Industries we serve",
  },
  certPanel: {
    eyebrow: "Certified",
    title: "R2v3-certified electronics recycling & secure ITAD",
    body: "Every asset SunTech handles is processed under our SERI R2v3 certification — independently audited for secure data destruction, responsible recycling and downstream accountability. For your organization that means industry best practices, data security, environmental stewardship and corporate compliance on every job.",
  },
  community: {
    eyebrow: "Community impact",
    title: "Recycling that gives back to our community",
    intro:
      "When businesses recycle their electronics with SunTech, the impact reaches beyond e-waste diversion. A portion of the value we recover from retired IT assets is reinvested locally — including a recent donation to École Saint-Lawrence, a bilingual school in Candiac on Montréal's South Shore. Responsible electronics recycling and IT asset disposition, done well, create environmental and social value at the same time.",
    imageAlt:
      "The SunTech Recycle team presenting a donation to École Saint-Lawrence in Candiac, Québec",
    cta: "Learn about our community impact",
    cards: [
      {
        title: "ESG reporting",
        body: "Strengthen your sustainability and social-responsibility objectives with verified diversion data and a partner who reinvests in the community.",
      },
      {
        title: "Community impact",
        body: "Help fund local initiatives — like our donation to École Saint-Lawrence — every time you retire hardware responsibly.",
      },
      {
        title: "Responsible recycling",
        body: "Retired electronics are processed through certified, responsible recycling channels — never landfilled, never dumped downstream.",
      },
      {
        title: "Corporate reputation",
        body: "Demonstrate a real commitment to environmental and social initiatives that customers, staff and auditors increasingly expect.",
      },
    ],
  },
  communityPage: {
    metaTitle:
      "Community Impact — Responsible Electronics Recycling That Gives Back | SunTech Recycle",
    metaDescription:
      "SunTech Recycle turns corporate electronics recycling and IT asset disposition into community impact — reinvesting recovered value into local initiatives like École Saint-Lawrence, while helping businesses strengthen their ESG and CSR commitments.",
    eyebrow: "Community impact",
    h1: "Technology recycling that creates real community impact",
    heroIntro:
      "We believe responsible electronics recycling should benefit both the environment and the communities we operate in. When your business recycles electronics or retires IT assets with SunTech, you help fund local initiatives — and strengthen your own ESG and CSR commitments at the same time.",
    commitmentTitle: "Our commitment",
    commitmentBody:
      "Secure electronics recycling and IT asset disposition are about more than diverting e-waste from landfill. As an R2v3 certified recycler we hold ourselves to industry best practices for data security and environmental stewardship — and we reinvest a portion of the value we recover from retired electronics back into the community.",
    givingTitle: "Supporting local schools and families",
    givingBody:
      "We recently made a donation to École Saint-Lawrence, a bilingual school in Candiac on Montréal's South Shore, to support its students and learning environment. Giving back to local schools and families is how we want corporate electronics recycling to translate into real, measurable good close to home.",
    letterCaption: "Thank-you letter from École Saint-Lawrence, Candiac (Québec)",
    teamCaption: "The SunTech Recycle team — Greater Montréal",
    techTitle: "Technology for good",
    techBody:
      "Functional equipment we recover through IT asset disposition is securely wiped and remarketed or refurbished, extending its useful life instead of being shredded. Recovered materials re-enter the supply chain. The result is a circular model where responsible recycling, value recovery and community support reinforce one another.",
    esgTitle: "ESG & CSR benefits for businesses",
    esgIntro:
      "Partnering with a certified, community-minded recycler lets your organization manage retired IT assets responsibly while advancing measurable ESG and CSR goals.",
    howTitle: "How corporate electronics recycling creates impact",
    howIntro: "Every responsibly recycled load contributes on three fronts at once:",
    howPoints: [
      "Environmental — e-waste is diverted from landfill and materials are recovered back into the supply chain.",
      "Social — a portion of recovered value supports local community initiatives and schools.",
      "Governance — serialized data-destruction certificates and an audited chain of custody keep your disposal compliant and defensible.",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "How does recycling with SunTech support the community?",
        a: "A portion of the value we recover from retired electronics and IT assets is reinvested into local initiatives — for example, a recent donation to École Saint-Lawrence in Candiac. Choosing responsible electronics recycling with SunTech turns routine hardware disposal into local impact.",
      },
      {
        q: "Can this support our company's ESG or CSR reporting?",
        a: "Yes. We provide verified landfill-diversion and recovery data for your ESG and sustainability reporting, and working with an R2v3 certified, community-minded recycler is a concrete CSR story you can document.",
      },
      {
        q: "Is my data still secure if recycling supports community programs?",
        a: "Always. Community impact never changes our process: drives are wiped to NIST 800-88 or physically destroyed, each with a serialized certificate of destruction and a documented chain of custody.",
      },
      {
        q: "Who can partner with SunTech for corporate electronics recycling?",
        a: "We work with enterprise, government, healthcare, finance and other organizations across Greater Montréal and beyond — with free on-site collection locally and secure, trackable service elsewhere.",
      },
    ],
    ctaTitle: "Retire your hardware the responsible way",
    ctaBody:
      "Recycle your business electronics with a certified partner that turns secure IT asset disposition into environmental and community impact.",
  },
  collectionForm: {
    title: "Request a collection",
    intro: "Tell us what you need to retire — we respond within one business day.",
    moreTitle: "Collection details",
    moreHint: "Optional — the more you share, the faster we can scope your collection.",
    optional: "optional",
    firstName: "First name",
    lastName: "Last name",
    company: "Company name",
    email: "Email",
    phone: "Phone number",
    assistLabel: "How can we assist you?",
    assistPlaceholder: "Select an option",
    assistOptions: {
      scheduled: "Scheduled collection service",
      donation: "Donation program",
      data: "Data security and data destruction options",
      media: "Media enquiry",
      volunteer: "Volunteering at ERA",
      other: "Other",
    },
    businessAddress: "Business address",
    city: "City",
    provinceState: "Province / State",
    postalZip: "Postal / ZIP code",
    numberOfItems: "Number of items",
    estimatedPickupDate: "Estimated pickup date",
    preferredCollectionTime: "Preferred collection time",
    typeOfEquipment: "Type of equipment",
    comments: "Comments",
    consent: "I agree to be contacted regarding this request.",
    submit: "Request collection",
    submitting: "Sending…",
    errRequired: "This field is required",
    errEmail: "Enter a valid email address",
    errPhone: "Enter a valid phone number",
    errConsent: "Please confirm you agree to be contacted",
    errSubmit: "Something went wrong. Please try again or call us at (514) 808-4061.",
  },
  thankYou: {
    metaTitle: "Thank You — Collection Request Received | SunTech Recycle",
    metaDescription:
      "Your business electronics collection request has been received. A SunTech Recycle team member will respond within one business day.",
    eyebrow: "Request received",
    h1: "Thank you for your collection request",
    confirm:
      "We’ve received your request and a member of our team will be in touch within one business day.",
    refLabel: "Your reference number",
    summaryTitle: "What you submitted",
    responseTitle: "What happens next",
    responseBody:
      "Our team reviews your request and replies within one business day with next steps, scheduling and any documentation you need. A confirmation email is on its way to you.",
    contactTitle: "Contact us",
    btnHome: "Return home",
    btnAnother: "Request another collection",
    btnContact: "Contact us",
    noData:
      "Your request has been received. A confirmation email is on its way — keep your reference number for your records.",
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
    areasFeaturedTitle: "Au Canada, aux États-Unis",
    areasFeaturedBody:
      "Collecte locale dans le Grand Montréal, plus disposition des actifs TI et destruction des données par envoi sécurisé partout en Amérique du Nord.",
    areasFeaturedCta: "Voir toutes les zones",
    areaAllCanada: "Toutes les villes canadiennes",
    areaAllUs: "Toutes les villes américaines",
    regionIslandMontreal: "Île de Montréal",
    regionNorthShore: "Rive-Nord",
    regionSouthShoreFacility: "Rive-Sud · usine",
    regionOntario: "Ontario",
    regionBC: "Colombie-Britannique",
    regionUS: "États-Unis",
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
    trustLine: "Recyclage d’électronique certifié et disposition sécurisée des actifs TI",
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
    metaTitle: "Zones desservies — Canada et États-Unis | SunTech Recycle",
    metaDescription:
      "Recyclage d’électronique certifié R2v3, destruction sécurisée des données et ITAD. Collecte gratuite sur place dans le Grand Montréal, plus service sécurisé pour les entreprises au Canada et aux États-Unis.",
    eyebrow: "Zones desservies",
    h1: "Local à Montréal. Certifié partout en Amérique du Nord.",
    intro:
      "Depuis notre usine de Longueuil, nous offrons une collecte sur place rapide et gratuite dans le Grand Montréal — et une disposition des actifs TI et une destruction des données sécurisées et entièrement traçables pour les entreprises au Canada et aux États-Unis.",
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
      "Réservez une collecte d’électronique gratuite et certifiée R2v3 pour votre entreprise. Ordinateurs, serveurs, écrans et actifs TI collectés avec transport scellé, destruction sécurisée des données et certificat sérialisé. Collecte gratuite sur place dans le Grand Montréal; service sécurisé au Canada et aux États-Unis.",
    eyebrow: "Demander une collecte",
    h1: "Réservez une collecte d’entreprise gratuite.",
    intro:
      "Collecte gratuite et certifiée R2v3 de vos ordinateurs, serveurs et appareils électroniques retirés — transport scellé, destruction sécurisée des données et certificat sérialisé sur chaque disque. Collecte gratuite sur place dans le Grand Montréal; service sécurisé et traçable au Canada et aux États-Unis.",
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
      "À l’extérieur de la région de Montréal — ou pour de plus petits volumes — nous organisons un transport sécurisé et entièrement traçable et une destruction des données par envoi pour les entreprises au Canada et aux États-Unis.",
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
    industriesTitle: "Les secteurs que nous servons",
  },
  certPanel: {
    eyebrow: "Certifié",
    title: "Recyclage d’électronique et ITAD sécurisé, certifiés R2v3",
    body: "Chaque actif que traite SunTech passe par notre certification SERI R2v3 — auditée de façon indépendante pour la destruction sécurisée des données, le recyclage responsable et la traçabilité en aval. Pour votre organisation, cela signifie des pratiques exemplaires, la sécurité des données, l’intendance environnementale et la conformité corporative à chaque mandat.",
  },
  community: {
    eyebrow: "Engagement communautaire",
    title: "Un recyclage qui redonne à notre communauté",
    intro:
      "Quand les entreprises recyclent leur électronique avec SunTech, l’impact dépasse le simple détournement des déchets électroniques. Une partie de la valeur récupérée de vos actifs TI retirés est réinvestie localement — incluant un don récent à l’École Saint-Lawrence, une école bilingue de Candiac, sur la Rive-Sud de Montréal. Le recyclage informatique responsable et la disposition des actifs TI, bien faits, créent une valeur environnementale et sociale à la fois.",
    imageAlt:
      "L’équipe de SunTech Recycle remettant un don à l’École Saint-Lawrence à Candiac, au Québec",
    cta: "Découvrir notre engagement communautaire",
    cards: [
      {
        title: "Rapports ESG",
        body: "Renforcez vos objectifs de durabilité et de responsabilité sociale avec des données de détournement vérifiées et un partenaire qui réinvestit dans la communauté.",
      },
      {
        title: "Impact communautaire",
        body: "Contribuez à financer des initiatives locales — comme notre don à l’École Saint-Lawrence — chaque fois que vous retirez du matériel de façon responsable.",
      },
      {
        title: "Recyclage responsable",
        body: "L’électronique retirée est traitée par des filières de recyclage certifiées et responsables — jamais enfouie, jamais abandonnée en aval.",
      },
      {
        title: "Réputation corporative",
        body: "Démontrez un engagement réel envers des initiatives environnementales et sociales que clients, employés et auditeurs attendent de plus en plus.",
      },
    ],
  },
  communityPage: {
    metaTitle:
      "Engagement communautaire — Un recyclage d’électronique responsable qui redonne | SunTech Recycle",
    metaDescription:
      "SunTech Recycle transforme le recyclage informatique d’entreprise et la disposition des actifs TI en impact communautaire — en réinvestissant la valeur récupérée dans des initiatives locales comme l’École Saint-Lawrence, tout en aidant les entreprises à renforcer leurs engagements ESG et RSE.",
    eyebrow: "Engagement communautaire",
    h1: "Un recyclage technologique qui crée un véritable impact communautaire",
    heroIntro:
      "Nous croyons que le recyclage d’électronique responsable devrait profiter à la fois à l’environnement et aux communautés où nous intervenons. Quand votre entreprise recycle son électronique ou retire ses actifs TI avec SunTech, vous aidez à financer des initiatives locales — tout en renforçant vos propres engagements ESG et RSE.",
    commitmentTitle: "Notre engagement",
    commitmentBody:
      "Le recyclage d’électronique sécurisé et la disposition des actifs TI, c’est plus que détourner les déchets électroniques de l’enfouissement. À titre de recycleur certifié R2v3, nous nous imposons des pratiques exemplaires en matière de sécurité des données et d’intendance environnementale — et nous réinvestissons une partie de la valeur récupérée dans la communauté.",
    givingTitle: "Appuyer les écoles et les familles d’ici",
    givingBody:
      "Nous avons récemment fait un don à l’École Saint-Lawrence, une école bilingue de Candiac sur la Rive-Sud de Montréal, pour appuyer ses élèves et son milieu d’apprentissage. Redonner aux écoles et aux familles locales, c’est ainsi que nous voulons que le recyclage informatique d’entreprise se traduise par un bien réel et mesurable, tout près de chez nous.",
    letterCaption: "Lettre de remerciement de l’École Saint-Lawrence, Candiac (Québec)",
    teamCaption: "L’équipe de SunTech Recycle — Grand Montréal",
    techTitle: "La technologie au service du bien",
    techBody:
      "L’équipement fonctionnel que nous récupérons par la disposition des actifs TI est effacé de façon sécurisée puis remis en marché ou remis à neuf, prolongeant sa vie utile plutôt que d’être déchiqueté. Les matériaux récupérés réintègrent la chaîne d’approvisionnement. Le résultat est un modèle circulaire où recyclage responsable, récupération de valeur et soutien communautaire se renforcent mutuellement.",
    esgTitle: "Avantages ESG et RSE pour les entreprises",
    esgIntro:
      "S’associer à un recycleur certifié et engagé dans sa communauté permet à votre organisation de gérer ses actifs TI retirés de façon responsable tout en faisant progresser des objectifs ESG et RSE mesurables.",
    howTitle: "Comment le recyclage informatique d’entreprise crée de l’impact",
    howIntro: "Chaque chargement recyclé de façon responsable contribue sur trois plans à la fois :",
    howPoints: [
      "Environnemental — les déchets électroniques sont détournés de l’enfouissement et les matériaux sont récupérés dans la chaîne d’approvisionnement.",
      "Social — une partie de la valeur récupérée appuie des initiatives communautaires et des écoles locales.",
      "Gouvernance — des certificats de destruction sérialisés et une chaîne de possession auditée gardent votre disposition conforme et défendable.",
    ],
    faqTitle: "Foire aux questions",
    faq: [
      {
        q: "Comment le recyclage avec SunTech appuie-t-il la communauté?",
        a: "Une partie de la valeur que nous récupérons de l’électronique et des actifs TI retirés est réinvestie dans des initiatives locales — par exemple, un don récent à l’École Saint-Lawrence à Candiac. Choisir le recyclage informatique responsable avec SunTech transforme une simple disposition de matériel en impact local.",
      },
      {
        q: "Est-ce que cela peut appuyer nos rapports ESG ou RSE?",
        a: "Oui. Nous fournissons des données vérifiées de détournement et de récupération pour vos rapports ESG et de durabilité, et travailler avec un recycleur certifié R2v3 engagé dans sa communauté est une histoire RSE concrète et documentable.",
      },
      {
        q: "Mes données restent-elles sécurisées si le recyclage appuie des programmes communautaires?",
        a: "Toujours. L’impact communautaire ne change jamais notre processus : les disques sont effacés selon NIST 800-88 ou détruits physiquement, chacun avec un certificat de destruction sérialisé et une chaîne de possession documentée.",
      },
      {
        q: "Qui peut s’associer à SunTech pour le recyclage d’électronique d’entreprise?",
        a: "Nous travaillons avec des entreprises, le gouvernement, la santé, la finance et d’autres organisations dans le Grand Montréal et au-delà — avec collecte sur place gratuite localement et service sécurisé et traçable ailleurs.",
      },
    ],
    ctaTitle: "Retirez votre matériel de façon responsable",
    ctaBody:
      "Recyclez l’électronique de votre entreprise avec un partenaire certifié qui transforme la disposition sécurisée des actifs TI en impact environnemental et communautaire.",
  },
  collectionForm: {
    title: "Demander une collecte",
    intro: "Dites-nous ce que vous devez retirer — nous répondons sous un jour ouvrable.",
    moreTitle: "Détails de la collecte",
    moreHint: "Facultatif — plus vous en dites, plus vite nous pouvons planifier votre collecte.",
    optional: "facultatif",
    firstName: "Prénom",
    lastName: "Nom",
    company: "Nom de l’entreprise",
    email: "Courriel",
    phone: "Numéro de téléphone",
    assistLabel: "Comment pouvons-nous vous aider?",
    assistPlaceholder: "Sélectionnez une option",
    assistOptions: {
      scheduled: "Service de collecte planifiée",
      donation: "Programme de dons",
      data: "Options de sécurité et de destruction des données",
      media: "Demande des médias",
      volunteer: "Bénévolat chez ERA",
      other: "Autre",
    },
    businessAddress: "Adresse de l’entreprise",
    city: "Ville",
    provinceState: "Province / État",
    postalZip: "Code postal / ZIP",
    numberOfItems: "Nombre d’articles",
    estimatedPickupDate: "Date de collecte estimée",
    preferredCollectionTime: "Heure de collecte préférée",
    typeOfEquipment: "Type d’équipement",
    comments: "Commentaires",
    consent: "J’accepte d’être contacté concernant cette demande.",
    submit: "Demander une collecte",
    submitting: "Envoi…",
    errRequired: "Ce champ est requis",
    errEmail: "Entrez une adresse courriel valide",
    errPhone: "Entrez un numéro de téléphone valide",
    errConsent: "Veuillez confirmer que vous acceptez d’être contacté",
    errSubmit: "Une erreur est survenue. Réessayez ou appelez-nous au (514) 808-4061.",
  },
  thankYou: {
    metaTitle: "Merci — Demande de collecte reçue | SunTech Recycle",
    metaDescription:
      "Votre demande de collecte d’électronique d’entreprise a été reçue. Un membre de l’équipe SunTech Recycle vous répondra sous un jour ouvrable.",
    eyebrow: "Demande reçue",
    h1: "Merci pour votre demande de collecte",
    confirm:
      "Nous avons bien reçu votre demande et un membre de notre équipe vous contactera sous un jour ouvrable.",
    refLabel: "Votre numéro de référence",
    summaryTitle: "Ce que vous avez soumis",
    responseTitle: "Les prochaines étapes",
    responseBody:
      "Notre équipe examine votre demande et répond sous un jour ouvrable avec les prochaines étapes, la planification et toute documentation nécessaire. Un courriel de confirmation vous a été envoyé.",
    contactTitle: "Nous joindre",
    btnHome: "Retour à l’accueil",
    btnAnother: "Faire une autre demande",
    btnContact: "Nous contacter",
    noData:
      "Votre demande a été reçue. Un courriel de confirmation est en route — conservez votre numéro de référence.",
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
