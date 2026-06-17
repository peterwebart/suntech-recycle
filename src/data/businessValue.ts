import type { IconName } from "@/components/ui/Icon";

export type ValueBlock = {
  id: string;
  icon: IconName;
  title: string;
  lead: string;
  points: string[];
};

/**
 * The four business-value themes that appear on every major service page.
 * Phrased to apply across services, with commercial / business-intent
 * keywords integrated naturally (not stuffed).
 */
export const businessValue: ValueBlock[] = [
  {
    id: "risk-reduction",
    icon: "shield",
    title: "Risk reduction",
    lead: "Retired hardware is a data-breach liability until it is provably handled. Secure data destruction and IT asset disposition close that gap.",
    points: [
      "Secure data destruction and hard drive destruction to recognized standards",
      "Protection from data breaches and the legal exposure they create",
      "Compliance support for Law 25, PIPEDA and client frameworks",
      "Confidential business information protected end to end",
    ],
  },
  {
    id: "cost-savings",
    icon: "refresh",
    title: "Cost savings",
    lead: "Business electronics recycling should reduce cost, not add it. Free collection and asset recovery turn disposal into savings.",
    points: [
      "Free collection opportunities for qualifying volumes",
      "Reduced disposal costs and eliminated storage costs",
      "Improved warehouse and office space utilization",
      "IT asset recovery that returns value to your balance sheet",
    ],
  },
  {
    id: "esg",
    icon: "leaf",
    title: "ESG & sustainability",
    lead: "Sustainable electronics recycling gives you verified numbers for your ESG, CSR and sustainability reporting — not estimates.",
    points: [
      "Corporate sustainability and ESG program support",
      "Landfill diversion and resource recovery",
      "Responsible recycling and e-waste management",
      "Audit-ready diversion and recovery reporting",
    ],
  },
  {
    id: "buyback",
    icon: "layers",
    title: "E-scrap buyback & asset recovery",
    lead: "Some electronic assets retain residual value. Where they do, we recover it — through remarketing, commodity recovery and e-scrap buyback.",
    points: [
      "Asset value recovery and IT asset monetization",
      "E-scrap trading and commodity recovery",
      "Electronics buyback on equipment with residual value",
      "Asset recovery services with settlement reporting",
    ],
  },
];
