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

/* ── French overlay + locale getter ───────────────────────────────────────── */
import type { Locale } from "@/i18n/config";
import { deepMerge, type DeepPartial } from "@/i18n/merge";

const businessValueFr: DeepPartial<ValueBlock>[] = [
  {
    title: "Réduction du risque",
    lead: "Le matériel retiré est une responsabilité en matière de fuite de données tant qu’il n’est pas traité de façon prouvable. La destruction sécurisée des données et la disposition des actifs TI comblent cette faille.",
    points: [
      "Destruction sécurisée des données et des disques selon des normes reconnues",
      "Protection contre les fuites de données et l’exposition juridique qu’elles créent",
      "Soutien à la conformité pour la Loi 25, la LPRPDE et les cadres des clients",
      "Information d’affaires confidentielle protégée de bout en bout",
    ],
  },
  {
    title: "Économies de coûts",
    lead: "Le recyclage d’électronique d’entreprise devrait réduire les coûts, pas en ajouter. La collecte gratuite et la récupération d’actifs transforment la disposition en économies.",
    points: [
      "Possibilités de collecte gratuite pour les volumes admissibles",
      "Coûts de disposition réduits et coûts d’entreposage éliminés",
      "Meilleure utilisation de l’espace d’entrepôt et de bureau",
      "Récupération d’actifs TI qui renvoie de la valeur à votre bilan",
    ],
  },
  {
    title: "ESG et durabilité",
    lead: "Le recyclage d’électronique durable vous donne des chiffres vérifiés pour vos rapports ESG, RSE et de durabilité — pas des estimations.",
    points: [
      "Soutien aux programmes de durabilité corporative et ESG",
      "Détournement de l’enfouissement et récupération des ressources",
      "Recyclage responsable et gestion des rebuts électroniques",
      "Rapports de détournement et de récupération prêts pour l’audit",
    ],
  },
  {
    title: "Rachat de rebuts et récupération d’actifs",
    lead: "Certains actifs électroniques conservent une valeur résiduelle. Lorsque c’est le cas, nous la récupérons — par la remise en marché, la récupération de matières et le rachat de rebuts électroniques.",
    points: [
      "Récupération de la valeur des actifs et monétisation des actifs TI",
      "Négoce de rebuts électroniques et récupération de matières",
      "Rachat d’électronique sur l’équipement à valeur résiduelle",
      "Services de récupération d’actifs avec rapport de règlement",
    ],
  },
];

export function getBusinessValue(locale: Locale): ValueBlock[] {
  if (locale === "en") return businessValue;
  return businessValue.map((b, i) => deepMerge(b, businessValueFr[i]));
}
