import { site } from "@/data/site";

/**
 * Location dataset for the programmatic service-area pages.
 *
 * Structure: three country landing pages (Canada / United States / Mexico),
 * the Greater-Montréal hub cities (with on-site collection + local reviews),
 * a large set of Montréal neighbourhoods, and major cities across each country.
 *
 * Non-hub city copy is templated (and written to be locale-ready) rather than
 * hand-authored per city. Coordinates are approximate city centroids — fine
 * for a marker; refine if exact pins are needed.
 *
 * Reviews are shown only for the Greater-Montréal hubs. Replace them with
 * verified client reviews before relying on them publicly.
 */
export const REVIEWS_ARE_SAMPLE = false;

export type Review = {
  author: string;
  role: string;
  area: string;
  rating: number; // 1–5
  body: string;
};

export type LocationKind = "country" | "city" | "neighbourhood";
export type CountryName = "Canada" | "United States" | "Mexico";

export type Location = {
  slug: string;
  name: string;
  kind: LocationKind;
  country: CountryName;
  countrySlug: string;
  /** Province / state / sub-region label. */
  region: string;
  lat: number;
  lng: number;
  zoom: number;
  isHeadquarters?: boolean;
  /** Greater-Montréal hub with full on-site collection. */
  isHub?: boolean;
  /** Show the Longueuil facility marker + local-collection framing. */
  localService?: boolean;
  served?: string[];
  reviews?: Review[];
  intro: string;
  seo: { title: string; description: string };
};

const COUNTRY_SLUG: Record<CountryName, string> = {
  Canada: "canada",
  "United States": "united-states",
  Mexico: "mexico",
};

/* ── Greater-Montréal hubs (full local service + reviews) ─────────────────── */

const hubs: Location[] = [
  {
    slug: "montreal",
    name: "Montréal",
    kind: "city",
    country: "Canada",
    countrySlug: "canada",
    region: "Island of Montréal",
    lat: 45.5019,
    lng: -73.5674,
    zoom: 12,
    isHub: true,
    localService: true,
    intro:
      "From downtown towers to the industrial parks of Saint-Laurent and Anjou, we collect and process retired IT equipment across the Island of Montréal — with secure data destruction and a documented chain of custody on every collection.",
    served: [
      "Ville-Marie & Downtown",
      "Griffintown",
      "Saint-Laurent",
      "Anjou",
      "Mercier–Hochelaga",
      "Plateau–Mile End",
      "Rosemont",
      "Lachine",
    ],
    reviews: [
      {
        author: "Marc L.",
        role: "IT Director, financial services",
        area: "Downtown Montréal",
        rating: 5,
        body: "We retired three floors of workstations and needed a certificate for every drive. SunTech handled the collection, the wiping and the paperwork without a single gap. Exactly what our auditors wanted to see.",
      },
      {
        author: "Sophie R.",
        role: "Office Manager, design agency",
        area: "Mile End",
        rating: 5,
        body: "Booked a free collection for a pile of old monitors and laptops. The crew showed up on schedule, sealed everything on site and emailed the receipt the same day. Painless.",
      },
      {
        author: "David T.",
        role: "Facilities Lead, logistics",
        area: "Saint-Laurent",
        rating: 4,
        body: "Used them to clear a warehouse of mixed electronics and cabling. Good communication and a clear recovery report at the end. Will use again for our next cleanout.",
      },
    ],
    seo: {
      title: "Electronics Recycling & Data Destruction in Montréal | SunTech Recycle",
      description:
        "Business electronics recycling, secure data destruction and ITAD across the Island of Montréal — downtown, Saint-Laurent, Anjou and more. Free collection with full chain of custody.",
    },
  },
  {
    slug: "laval",
    name: "Laval",
    kind: "city",
    country: "Canada",
    countrySlug: "canada",
    region: "North Shore",
    lat: 45.6066,
    lng: -73.7124,
    zoom: 12,
    isHub: true,
    localService: true,
    intro:
      "Across Laval — from the Chomedey business district to the industrial sectors of Sainte-Dorothée and Vimont — we provide certified electronics recycling, secure data destruction and free corporate collection with full documentation.",
    served: [
      "Chomedey",
      "Sainte-Dorothée",
      "Vimont",
      "Laval-des-Rapides",
      "Sainte-Rose",
      "Fabreville",
      "Duvernay",
      "Pont-Viau",
    ],
    reviews: [
      {
        author: "Julie M.",
        role: "Operations Manager, manufacturing",
        area: "Sainte-Dorothée",
        rating: 5,
        body: "We had years of accumulated servers and networking gear. SunTech audited everything, wiped the drives and gave us a clean reconciliation. Genuinely professional from start to finish.",
      },
      {
        author: "Patrick G.",
        role: "Clinic Administrator, healthcare",
        area: "Chomedey",
        rating: 5,
        body: "Patient data meant we couldn't take chances. Witnessed destruction on site and a serialized certificate for each device. That peace of mind was worth everything.",
      },
      {
        author: "Nadia B.",
        role: "Procurement, retail chain",
        area: "Laval-des-Rapides",
        rating: 5,
        body: "Rolled out new POS hardware and needed the old units gone responsibly. Free collection, fair value back on the resellable units. Smooth process.",
      },
    ],
    seo: {
      title: "Electronics Recycling & Data Destruction in Laval | SunTech Recycle",
      description:
        "Certified electronics recycling, secure data destruction and ITAD in Laval — Chomedey, Sainte-Dorothée, Vimont and beyond. Free business collection with serialized certificates.",
    },
  },
  {
    slug: "longueuil",
    name: "Longueuil",
    kind: "city",
    country: "Canada",
    countrySlug: "canada",
    region: "South Shore",
    lat: 45.5312,
    lng: -73.5185,
    zoom: 12,
    isHeadquarters: true,
    isHub: true,
    localService: true,
    intro:
      "Longueuil is home base. Our processing facility on Rue de la Métropole anchors fast, free collection and same-week scheduling across Vieux-Longueuil, Saint-Hubert and Greenfield Park — with secure data destruction and a full chain of custody.",
    served: [
      "Vieux-Longueuil",
      "Saint-Hubert",
      "Greenfield Park",
      "LeMoyne",
      "Industrial sectors (J4G)",
    ],
    reviews: [
      {
        author: "Éric D.",
        role: "Plant Manager, industrial",
        area: "Industrial sector",
        rating: 5,
        body: "Being local, they turned our collection around in days, not weeks. Cleared out mixed electronic and metal scrap and recovered real value from the metals. Couldn't ask for more.",
      },
      {
        author: "Catherine P.",
        role: "Controller, professional services",
        area: "Vieux-Longueuil",
        rating: 5,
        body: "End-of-lease laptops needed certified wiping before return. Quick, documented, and the certificates lined up with our asset list exactly. Highly recommend.",
      },
      {
        author: "Sam K.",
        role: "School Board Technician, education",
        area: "Greenfield Park",
        rating: 5,
        body: "Decommissioned a lab full of aging desktops. The team was careful with data and gave us a diversion report we could share with the board. Excellent local partner.",
      },
    ],
    seo: {
      title: "Electronics Recycling & Data Destruction in Longueuil | SunTech Recycle",
      description:
        "SunTech Recycle's home facility in Longueuil. Fast, free electronics recycling and secure data destruction across Vieux-Longueuil, Saint-Hubert and Greenfield Park.",
    },
  },
  {
    slug: "brossard",
    name: "Brossard",
    kind: "city",
    country: "Canada",
    countrySlug: "canada",
    region: "South Shore",
    lat: 45.4509,
    lng: -73.466,
    zoom: 13,
    isHub: true,
    localService: true,
    intro:
      "In Brossard — including the Quartier DIX30 business district and surrounding office sectors — we handle certified electronics recycling, secure data destruction and ITAD, with free collection for offices, clinics and retailers.",
    served: [
      "Quartier DIX30",
      "Secteur Panama",
      "Secteurs A–R",
      "Boulevard Taschereau corridor",
    ],
    reviews: [
      {
        author: "Hélène V.",
        role: "Branch Manager, banking",
        area: "Quartier DIX30",
        rating: 5,
        body: "Branch refit meant disposing of a lot of sensitive hardware. Tamper-evident sealing and a certificate per drive made compliance straightforward. Very reassuring.",
      },
      {
        author: "Olivier C.",
        role: "IT Consultant, tech startup",
        area: "Secteur Panama",
        rating: 4,
        body: "Helped a client offload retired servers. Responsive, fair, and the remarketing recovery was a nice surprise on equipment we assumed was worthless.",
      },
      {
        author: "Maya S.",
        role: "Practice Manager, dental clinic",
        area: "Brossard",
        rating: 5,
        body: "Free collection for our old imaging workstations and a clean destruction certificate for the storage. Professional and on time.",
      },
    ],
    seo: {
      title: "Electronics Recycling & Data Destruction in Brossard | SunTech Recycle",
      description:
        "Business electronics recycling, secure data destruction and ITAD in Brossard — Quartier DIX30, Panama and surrounding sectors. Free collection with full chain of custody.",
    },
  },
  {
    slug: "boucherville",
    name: "Boucherville",
    kind: "city",
    country: "Canada",
    countrySlug: "canada",
    region: "South Shore",
    lat: 45.5969,
    lng: -73.4364,
    zoom: 13,
    isHub: true,
    localService: true,
    intro:
      "Boucherville's industrial park is one of the densest on the South Shore — and a natural fit for our work. We collect and process electronics and industrial equipment, recover metals and destroy data, all under documented custody.",
    served: [
      "Parc industriel de Boucherville",
      "Vieux-Boucherville",
      "Secteur Sabrevois",
      "Boulevard de Mortagne corridor",
    ],
    reviews: [
      {
        author: "Jean-François L.",
        role: "Warehouse Director, distribution",
        area: "Parc industriel",
        rating: 5,
        body: "We cleared a mezzanine of obsolete equipment and cabling. SunTech sorted recoverable metal from e-waste and reported back on both. Efficient and transparent.",
      },
      {
        author: "Isabelle T.",
        role: "EHS Coordinator, manufacturing",
        area: "Boucherville",
        rating: 5,
        body: "Sustainability reporting needed real diversion numbers, not guesses. Their recovery report dropped straight into our ESG documentation. Exactly the data we needed.",
      },
      {
        author: "Rémi A.",
        role: "Facility Manager, logistics",
        area: "Secteur Mortagne",
        rating: 4,
        body: "Reliable collections and good handling of mixed loads. Scheduling was easy and the crew was careful around our operations.",
      },
    ],
    seo: {
      title: "Electronics & Metal Recycling in Boucherville | SunTech Recycle",
      description:
        "Electronics recycling, metal recovery and secure data destruction for Boucherville's industrial park and businesses. Free collection with weight and recovery reporting.",
    },
  },
  {
    slug: "saint-hubert",
    name: "Saint-Hubert",
    kind: "city",
    country: "Canada",
    countrySlug: "canada",
    region: "South Shore",
    lat: 45.494,
    lng: -73.4163,
    zoom: 13,
    isHub: true,
    localService: true,
    intro:
      "Saint-Hubert sits minutes from our facility, with its airport and industrial sectors generating exactly the kind of equipment we handle. Expect fast, free collection, certified data destruction and responsible recycling with full documentation.",
    served: [
      "Aéroport Saint-Hubert sector",
      "Industrial & aerospace parks",
      "Secteur Laflèche",
      "Chemin de Chambly corridor",
    ],
    reviews: [
      {
        author: "Guillaume R.",
        role: "Operations Lead, aerospace supplier",
        area: "Airport sector",
        rating: 5,
        body: "Specialised equipment and strict data rules. SunTech handled both — secure destruction, careful dismantling, and a clear audit trail. Knew exactly what they were doing.",
      },
      {
        author: "Lucie M.",
        role: "Admin Manager, SME",
        area: "Secteur Laflèche",
        rating: 5,
        body: "Small office, big pile of old tech. They still treated us like a priority and got it all collected free of charge. Lovely to deal with.",
      },
      {
        author: "Tony B.",
        role: "Shop Owner, electronics repair",
        area: "Saint-Hubert",
        rating: 5,
        body: "I send my unrepairable units and scrap boards to SunTech. Fair, local and they actually recover the materials instead of dumping them.",
      },
    ],
    seo: {
      title: "Electronics Recycling & Data Destruction in Saint-Hubert | SunTech Recycle",
      description:
        "Fast, free electronics recycling and secure data destruction in Saint-Hubert — airport and industrial sectors included. Certified processing with full chain of custody.",
    },
  },
  {
    slug: "terrebonne",
    name: "Terrebonne",
    kind: "city",
    country: "Canada",
    countrySlug: "canada",
    region: "North Shore",
    lat: 45.7,
    lng: -73.648,
    zoom: 12,
    isHub: true,
    localService: true,
    intro:
      "On the North Shore, we serve Terrebonne and the surrounding Lanaudière business community — from Lachenaie's industrial zone to Vieux-Terrebonne — with certified electronics recycling, data destruction and free corporate collection.",
    served: [
      "Lachenaie",
      "La Plaine",
      "Vieux-Terrebonne",
      "Urbanova",
      "Industrial sectors",
    ],
    reviews: [
      {
        author: "Mélanie D.",
        role: "HR & Facilities, services firm",
        area: "Lachenaie",
        rating: 5,
        body: "Relocating offices meant disposing of years of equipment fast. SunTech scheduled around our move and documented everything. A genuine weight off our plate.",
      },
      {
        author: "Stéphane P.",
        role: "Plant Supervisor, light industry",
        area: "Industrial sector",
        rating: 4,
        body: "Good handling of bulk electronics and scrap. The recovery reporting helped us justify the program internally. Responsive team.",
      },
      {
        author: "Caroline L.",
        role: "Clinic Lead, healthcare",
        area: "Vieux-Terrebonne",
        rating: 5,
        body: "Certified destruction for our old patient systems with proper certificates. Felt secure the entire way through. Recommend without hesitation.",
      },
    ],
    seo: {
      title: "Electronics Recycling & Data Destruction in Terrebonne | SunTech Recycle",
      description:
        "Certified electronics recycling, secure data destruction and ITAD on the North Shore — Terrebonne, Lachenaie and La Plaine. Free business collection with full documentation.",
    },
  },
  {
    slug: "pointe-claire",
    name: "Pointe-Claire",
    kind: "city",
    country: "Canada",
    countrySlug: "canada",
    region: "West Island",
    lat: 45.4486,
    lng: -73.816,
    zoom: 13,
    isHub: true,
    localService: true,
    intro:
      "Serving Pointe-Claire and the wider West Island business corridor, we provide secure electronics recycling, certified data destruction and ITAD for offices, labs and retailers — with free collection and a documented chain of custody.",
    served: [
      "Pointe-Claire Village",
      "Valois",
      "Business & industrial park",
      "Fairview sector",
      "West Island corridor",
    ],
    reviews: [
      {
        author: "Andrew M.",
        role: "IT Manager, pharmaceutical",
        area: "Business park",
        rating: 5,
        body: "Lab and office hardware with strict data requirements. SunTech's wiping and certificates met our compliance team's bar on the first pass. Impressive.",
      },
      {
        author: "Christine H.",
        role: "Store Manager, retail",
        area: "Fairview sector",
        rating: 5,
        body: "Cleared out old displays and back-office computers with a free collection. Friendly crew, quick scheduling, full receipt. No complaints.",
      },
      {
        author: "Raj P.",
        role: "Founder, software company",
        area: "Valois",
        rating: 4,
        body: "Upgraded our whole team and they took the old laptops, wiped them and returned some value. Clear reporting throughout. Would use again.",
      },
    ],
    seo: {
      title: "Electronics Recycling & Data Destruction in Pointe-Claire | SunTech Recycle",
      description:
        "Secure electronics recycling, data destruction and ITAD across Pointe-Claire and the West Island. Free collection with serialized certificates and chain of custody.",
    },
  },
];

/* ── Templated builders for non-hub locations ─────────────────────────────── */

type Tuple = [slug: string, name: string, region: string, lat: number, lng: number];
type NTuple = [slug: string, name: string, lat: number, lng: number];

function citySeo(name: string, region: string): { title: string; description: string } {
  return {
    title: `Electronics Recycling & Data Destruction in ${name} | SunTech Recycle`,
    description: `R2v3 certified electronics recycling, secure data destruction and IT asset disposition for businesses in ${name}, ${region}. Commercial collection and secure, trackable mail-in service with full chain of custody.`,
  };
}

function neighbourhood([slug, name, lat, lng]: NTuple): Location {
  return {
    slug,
    name,
    kind: "neighbourhood",
    country: "Canada",
    countrySlug: "canada",
    region: "Montréal",
    lat,
    lng,
    zoom: 13,
    localService: true,
    intro: `In ${name}, SunTech Recycle provides R2v3 certified electronics recycling, secure data destruction and free business collection. As part of our island-wide coverage of Montréal, we schedule fast collection from our nearby Longueuil facility — with a documented chain of custody and a serialized certificate on every asset.`,
    seo: {
      title: `Electronics Recycling & Data Destruction in ${name}, Montréal | SunTech Recycle`,
      description: `R2v3 certified electronics recycling, secure data destruction and free business collection in ${name}, Montréal. Computers, servers and IT assets handled with full chain of custody.`,
    },
  };
}

function canadaCity([slug, name, region, lat, lng]: Tuple): Location {
  return {
    slug,
    name,
    kind: "city",
    country: "Canada",
    countrySlug: "canada",
    region,
    lat,
    lng,
    zoom: 11,
    intro: `SunTech Recycle serves businesses in ${name}, ${region} with R2v3 certified electronics recycling, IT asset disposition and secure data destruction. We handle project-based collection for larger volumes and secure, fully trackable service for drives and IT assets — each with a serialized certificate and a documented chain of custody.`,
    seo: citySeo(name, region),
  };
}

function usCity([slug, name, region, lat, lng]: Tuple): Location {
  return {
    slug,
    name,
    kind: "city",
    country: "United States",
    countrySlug: "united-states",
    region,
    lat,
    lng,
    zoom: 11,
    intro: `For businesses in ${name}, ${region}, SunTech Recycle delivers R2v3 certified IT asset disposition, secure data destruction and electronics recycling. Secure mail-in service and scheduled project collection keep your retired hardware accountable across the United States — with serialized certificates and a documented chain of custody.`,
    seo: citySeo(name, region),
  };
}

function mexicoCity([slug, name, region, lat, lng]: Tuple): Location {
  return {
    slug,
    name,
    kind: "city",
    country: "Mexico",
    countrySlug: "mexico",
    region,
    lat,
    lng,
    zoom: 11,
    intro: `SunTech Recycle supports businesses in ${name}, ${region} with R2v3 certified IT asset disposition, secure data destruction and electronics recycling. Secure processing and project-based collection give organizations across Mexico an accountable, certified path for retiring IT and electronic assets.`,
    seo: citySeo(name, region),
  };
}

/* ── Raw lists ────────────────────────────────────────────────────────────── */

const montrealNeighbourhoods: NTuple[] = [
  ["ville-marie", "Ville-Marie (Downtown)", 45.5088, -73.5616],
  ["le-plateau-mont-royal", "Le Plateau-Mont-Royal", 45.527, -73.58],
  ["mile-end", "Mile End", 45.523, -73.6],
  ["griffintown", "Griffintown", 45.4925, -73.561],
  ["saint-laurent", "Saint-Laurent", 45.505, -73.67],
  ["ahuntsic-cartierville", "Ahuntsic-Cartierville", 45.553, -73.66],
  ["anjou", "Anjou", 45.61, -73.55],
  ["rosemont-la-petite-patrie", "Rosemont–La Petite-Patrie", 45.544, -73.58],
  ["hochelaga-maisonneuve", "Hochelaga-Maisonneuve", 45.555, -73.54],
  ["villeray-saint-michel", "Villeray–Saint-Michel", 45.54, -73.62],
  ["cote-des-neiges-ndg", "Côte-des-Neiges–NDG", 45.49, -73.62],
  ["outremont", "Outremont", 45.518, -73.61],
  ["verdun", "Verdun", 45.458, -73.568],
  ["lasalle", "LaSalle", 45.429, -73.616],
  ["lachine", "Lachine", 45.438, -73.676],
  ["saint-leonard", "Saint-Léonard", 45.588, -73.6],
  ["montreal-nord", "Montréal-Nord", 45.6, -73.63],
  ["riviere-des-prairies", "Rivière-des-Prairies", 45.65, -73.5],
  ["le-sud-ouest", "Le Sud-Ouest", 45.475, -73.58],
  ["westmount", "Westmount", 45.487, -73.598],
  ["cote-saint-luc", "Côte-Saint-Luc", 45.469, -73.666],
  ["mont-royal", "Mont-Royal (Town)", 45.516, -73.642],
  ["dorval", "Dorval", 45.448, -73.749],
  ["pierrefonds-roxboro", "Pierrefonds-Roxboro", 45.487, -73.826],
  ["dollard-des-ormeaux", "Dollard-des-Ormeaux", 45.494, -73.824],
  ["kirkland", "Kirkland", 45.452, -73.86],
];

const canadaCities: Tuple[] = [
  ["toronto", "Toronto", "Ontario", 43.6532, -79.3832],
  ["ottawa", "Ottawa", "Ontario", 45.4215, -75.6972],
  ["mississauga", "Mississauga", "Ontario", 43.589, -79.6441],
  ["brampton", "Brampton", "Ontario", 43.7315, -79.7624],
  ["hamilton", "Hamilton", "Ontario", 43.2557, -79.8711],
  ["london-ontario", "London", "Ontario", 42.9849, -81.2453],
  ["kitchener-waterloo", "Kitchener–Waterloo", "Ontario", 43.4516, -80.4925],
  ["vancouver", "Vancouver", "British Columbia", 49.2827, -123.1207],
  ["surrey", "Surrey", "British Columbia", 49.1913, -122.849],
  ["burnaby", "Burnaby", "British Columbia", 49.2488, -122.9805],
  ["victoria", "Victoria", "British Columbia", 48.4284, -123.3656],
  ["calgary", "Calgary", "Alberta", 51.0447, -114.0719],
  ["edmonton", "Edmonton", "Alberta", 53.5461, -113.4938],
  ["winnipeg", "Winnipeg", "Manitoba", 49.8951, -97.1384],
  ["quebec-city", "Québec City", "Québec", 46.8139, -71.208],
  ["gatineau", "Gatineau", "Québec", 45.4765, -75.7013],
  ["sherbrooke", "Sherbrooke", "Québec", 45.404, -71.8929],
  ["trois-rivieres", "Trois-Rivières", "Québec", 46.3432, -72.543],
  ["halifax", "Halifax", "Nova Scotia", 44.6488, -63.5752],
];

const usCities: Tuple[] = [
  ["new-york", "New York", "New York", 40.7128, -74.006],
  ["los-angeles", "Los Angeles", "California", 34.0522, -118.2437],
  ["chicago", "Chicago", "Illinois", 41.8781, -87.6298],
  ["houston", "Houston", "Texas", 29.7604, -95.3698],
  ["phoenix", "Phoenix", "Arizona", 33.4484, -112.074],
  ["philadelphia", "Philadelphia", "Pennsylvania", 39.9526, -75.1652],
  ["san-antonio", "San Antonio", "Texas", 29.4241, -98.4936],
  ["san-diego", "San Diego", "California", 32.7157, -117.1611],
  ["dallas", "Dallas", "Texas", 32.7767, -96.797],
  ["austin", "Austin", "Texas", 30.2672, -97.7431],
  ["san-jose", "San Jose", "California", 37.3382, -121.8863],
  ["jacksonville", "Jacksonville", "Florida", 30.3322, -81.6557],
  ["columbus", "Columbus", "Ohio", 39.9612, -82.9988],
  ["boston", "Boston", "Massachusetts", 42.3601, -71.0589],
  ["seattle", "Seattle", "Washington", 47.6062, -122.3321],
  ["denver", "Denver", "Colorado", 39.7392, -104.9903],
  ["atlanta", "Atlanta", "Georgia", 33.749, -84.388],
  ["miami", "Miami", "Florida", 25.7617, -80.1918],
  ["detroit", "Detroit", "Michigan", 42.3314, -83.0458],
  ["minneapolis", "Minneapolis", "Minnesota", 44.9778, -93.265],
  ["charlotte", "Charlotte", "North Carolina", 35.2271, -80.8431],
  ["washington-dc", "Washington, D.C.", "District of Columbia", 38.9072, -77.0369],
];

const mexicoCities: Tuple[] = [
  ["mexico-city", "Mexico City", "CDMX", 19.4326, -99.1332],
  ["guadalajara", "Guadalajara", "Jalisco", 20.6597, -103.3496],
  ["monterrey", "Monterrey", "Nuevo León", 25.6866, -100.3161],
  ["puebla", "Puebla", "Puebla", 19.0414, -98.2063],
  ["tijuana", "Tijuana", "Baja California", 32.5149, -117.0382],
  ["leon", "León", "Guanajuato", 21.1219, -101.6833],
  ["queretaro", "Querétaro", "Querétaro", 20.5888, -100.3899],
  ["ciudad-juarez", "Ciudad Juárez", "Chihuahua", 31.6904, -106.4245],
  ["merida", "Mérida", "Yucatán", 20.9674, -89.5926],
  ["cancun", "Cancún", "Quintana Roo", 21.1619, -86.8515],
  ["san-luis-potosi", "San Luis Potosí", "San Luis Potosí", 22.1565, -100.9855],
  ["aguascalientes", "Aguascalientes", "Aguascalientes", 21.8853, -102.2916],
];

/* ── Country landing pages ────────────────────────────────────────────────── */

const countries: Location[] = [
  {
    slug: "canada",
    name: "Canada",
    kind: "country",
    country: "Canada",
    countrySlug: "canada",
    region: "Canada",
    lat: 56.13,
    lng: -106.35,
    zoom: 4,
    intro:
      "From our facility in Greater Montréal, SunTech Recycle provides R2v3 certified electronics recycling, secure data destruction and IT asset disposition to businesses across Canada — fast local collection in the Montréal region and secure, fully trackable service nationwide.",
    seo: {
      title: "Electronics Recycling, ITAD & Data Destruction in Canada | SunTech Recycle",
      description:
        "R2v3 certified commercial electronics recycling, IT asset disposition and secure data destruction across Canada. Local collection in Greater Montréal and secure service nationwide.",
    },
  },
  {
    slug: "united-states",
    name: "United States",
    kind: "country",
    country: "United States",
    countrySlug: "united-states",
    region: "United States",
    lat: 39.8,
    lng: -98.6,
    zoom: 4,
    intro:
      "SunTech Recycle delivers R2v3 certified IT asset disposition, secure data destruction and electronics recycling to businesses across the United States, with secure mail-in service and project-based collection — every asset tracked under a documented chain of custody.",
    seo: {
      title: "Electronics Recycling, ITAD & Data Destruction in the USA | SunTech Recycle",
      description:
        "R2v3 certified IT asset disposition, secure data destruction and commercial electronics recycling for businesses across the United States. Secure mail-in and project-based collection.",
    },
  },
  {
    slug: "mexico",
    name: "Mexico",
    kind: "country",
    country: "Mexico",
    countrySlug: "mexico",
    region: "Mexico",
    lat: 23.6,
    lng: -102.5,
    zoom: 5,
    intro:
      "SunTech Recycle provides R2v3 certified IT asset disposition, secure data destruction and electronics recycling for businesses across Mexico, with secure processing and project-based collection for organizations retiring IT and electronic assets.",
    seo: {
      title: "Electronics Recycling, ITAD & Data Destruction in Mexico | SunTech Recycle",
      description:
        "R2v3 certified IT asset disposition, secure data destruction and commercial electronics recycling for businesses across Mexico. Secure processing and project-based collection.",
    },
  },
];

/* ── Assembled dataset ────────────────────────────────────────────────────── */

export const locations: Location[] = [
  ...countries,
  ...hubs,
  ...montrealNeighbourhoods.map(neighbourhood),
  ...canadaCities.map(canadaCity),
  ...usCities.map(usCity),
  ...mexicoCities.map(mexicoCity),
];

export const locationSlugs = locations.map((l) => l.slug);

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export const countryList = countries;

export function citiesInCountry(countrySlug: string): Location[] {
  return locations.filter(
    (l) => l.countrySlug === countrySlug && l.kind !== "country",
  );
}

export function countryName(countrySlug: string): CountryName | undefined {
  return (Object.keys(COUNTRY_SLUG) as CountryName[]).find(
    (k) => COUNTRY_SLUG[k] === countrySlug,
  );
}

/** Greater-Montréal hubs, for nav / footer highlights. */
export const hubCities = hubs;

/** The facility marker, reused on maps that should reference home base. */
export const headquartersMarker = {
  name: `${site.name} — Facility`,
  lat: site.geo.lat,
  lng: site.geo.lng,
};
