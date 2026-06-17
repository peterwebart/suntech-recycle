/**
 * Single source of truth for company / NAP (Name, Address, Phone) details,
 * brand strings and the primary navigation used by the header megamenu,
 * footer and structured data. Update these values in one place.
 */

export const site = {
  name: "SunTech Recycle",
  legalName: "SunTech Recycle",
  tagline: "Electronics recycling, reimagined.",
  description:
    "R2v3 certified IT asset disposition, secure data destruction and electronics recycling for banks, data centres, hospitals, government and enterprise across Greater Montréal and Québec.",
  // Used as a fallback; the canonical value comes from NEXT_PUBLIC_SITE_URL.
  url: "https://suntechrecycle.com",
  email: "nick@suntechrecycle.com",
  phone: {
    display: "(514) 808-4061",
    tel: "+15148084061",
  },
  address: {
    street: "2193 Rue de la Métropole",
    locality: "Longueuil",
    region: "QC",
    regionName: "Québec",
    postalCode: "J4G 1S5",
    country: "CA",
    countryName: "Canada",
  },
  // Approximate coordinates for the Longueuil facility — confirm via precise
  // geocoding before launch (used to centre the contact / HQ map).
  geo: {
    lat: 45.5283,
    lng: -73.469,
  },
  hours: [
    { days: "Monday – Friday", time: "8:00 – 17:00" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`;
