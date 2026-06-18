/**
 * SERI R2v3 certification content. R2 (Responsible Recycling) is the leading
 * certification standard for the electronics recycling industry, administered
 * by SERI (Sustainable Electronics Recycling International). R2v3 is the
 * current version of the standard.
 *
 * Copy is written to be accurate and non-overstated; confirm SunTech's exact
 * certificate number / certifying body and add it before launch.
 */
import type { IconName } from "@/components/ui/Icon";

export type CertBenefit = {
  icon: IconName;
  title: string;
  body: string;
};

export const r2v3 = {
  name: "SERI R2v3 Certification",
  shortName: "R2v3 Certified",
  standard: "R2v3",
  authority: "SERI (Sustainable Electronics Recycling International)",
  tagline: "The leading global standard for responsible electronics recycling.",
  lead: "SunTech Recycle holds an active SERI R2v3 certification — the most widely recognized standard for responsible, secure and sustainable electronics recycling and IT asset disposition. For your organization, it means the partner handling your retired hardware is independently audited against rigorous requirements for data security, environmental responsibility and downstream accountability.",

  whatItMeans: [
    "R2 (Responsible Recycling) is the leading certification for the electronics recycling and ITAD industry, administered by SERI. R2v3 is its current, most rigorous version.",
    "Certification is granted only after independent, accredited third-party audits — and is maintained through ongoing surveillance audits, not a one-time check.",
    "It sets requirements across the full lifecycle: reuse and repair first, secure data sanitization, environmentally sound recycling, worker health and safety, and verified downstream vendor due diligence.",
  ],

  benefits: [
    {
      icon: "shield",
      title: "Data security you can prove",
      body: "R2v3 mandates documented data sanitization aligned with recognized standards (such as NIST 800-88) and a verifiable record for every device — directly reducing your exposure to data-breach risk and liability.",
    },
    {
      icon: "file-check",
      title: "Compliance & audit readiness",
      body: "Working with an R2v3-certified recycler gives your auditors, regulators and clients independent evidence that retired assets were handled to a recognized standard — supporting Law 25, PIPEDA and your own frameworks.",
    },
    {
      icon: "leaf",
      title: "Environmental responsibility",
      body: "The standard enforces a reuse-first hierarchy, responsible recycling of materials and strict controls on focus materials — keeping electronics out of landfill and feeding recovered materials back into the supply chain.",
    },
    {
      icon: "recycle",
      title: "Verified downstream accountability",
      body: "R2v3 requires due diligence on every downstream vendor, so materials are tracked and managed responsibly all the way through the chain — not handed off and forgotten.",
    },
  ] as CertBenefit[],

  chainOfCustody: [
    "Every asset is tracked from collection through processing under a documented chain of custody.",
    "Data-bearing devices are sanitized or destroyed to standard, each tied to a serialized record.",
    "Material streams and downstream vendors are documented and verified.",
    "You receive certificates and diversion / recovery reporting at close-out.",
  ],

  standards: [
    "Reuse, repair and refurbishment hierarchy",
    "Secure data sanitization & destruction",
    "Environmental, health & safety management system",
    "Focus-material handling controls",
    "Downstream vendor due diligence",
    "Full chain-of-custody documentation",
  ],
} as const;

/* ── French overlay + locale getter ───────────────────────────────────────── */
import type { Locale } from "@/i18n/config";
import { deepMerge } from "@/i18n/merge";

type R2v3 = typeof r2v3;
type R2v3Overlay = {
  name?: string;
  shortName?: string;
  authority?: string;
  tagline?: string;
  lead?: string;
  whatItMeans?: string[];
  benefits?: { title?: string; body?: string }[];
  chainOfCustody?: string[];
  standards?: string[];
};

const r2v3Fr: R2v3Overlay = {
  name: "Certification SERI R2v3",
  shortName: "Certifié R2v3",
  authority: "SERI (Sustainable Electronics Recycling International)",
  tagline: "La principale norme mondiale pour le recyclage responsable de l’électronique.",
  lead: "SunTech Recycle détient une certification SERI R2v3 active — la norme la plus largement reconnue pour le recyclage et la disposition des actifs TI responsables, sécuritaires et durables. Pour votre organisation, cela signifie que le partenaire qui traite votre matériel retiré est audité de façon indépendante selon des exigences rigoureuses en matière de sécurité des données, de responsabilité environnementale et de traçabilité en aval.",
  whatItMeans: [
    "R2 (Responsible Recycling) est la principale certification pour l’industrie du recyclage d’électronique et de l’ITAD, administrée par SERI. R2v3 en est la version actuelle, la plus rigoureuse.",
    "La certification n’est accordée qu’après des audits indépendants par une tierce partie accréditée — et est maintenue par des audits de surveillance continus, pas une vérification unique.",
    "Elle fixe des exigences pour tout le cycle de vie : réemploi et réparation d’abord, assainissement sécurisé des données, recyclage écologique, santé et sécurité des travailleurs, et diligence raisonnable vérifiée sur les fournisseurs en aval.",
  ],
  benefits: [
    {
      title: "Une sécurité des données prouvable",
      body: "R2v3 exige un assainissement des données documenté et aligné sur des normes reconnues (comme NIST 800-88) et un registre vérifiable pour chaque appareil — ce qui réduit directement votre exposition au risque et à la responsabilité liés aux fuites de données.",
    },
    {
      title: "Conformité et préparation à l’audit",
      body: "Travailler avec un recycleur certifié R2v3 donne à vos auditeurs, organismes de réglementation et clients une preuve indépendante que les actifs retirés ont été traités selon une norme reconnue — à l’appui de la Loi 25, de la LPRPDE et de vos propres cadres.",
    },
    {
      title: "Responsabilité environnementale",
      body: "La norme impose une hiérarchie axée sur le réemploi, un recyclage responsable des matériaux et des contrôles stricts sur les matières visées — gardant l’électronique hors de l’enfouissement et réinjectant les matériaux récupérés dans la chaîne d’approvisionnement.",
    },
    {
      title: "Traçabilité en aval vérifiée",
      body: "R2v3 exige une diligence raisonnable sur chaque fournisseur en aval, pour que les matériaux soient suivis et gérés de façon responsable tout au long de la chaîne — pas transférés puis oubliés.",
    },
  ],
  chainOfCustody: [
    "Chaque actif est suivi de la collecte au traitement sous une chaîne de possession documentée.",
    "Les appareils contenant des données sont assainis ou détruits selon la norme, chacun lié à un registre sérialisé.",
    "Les flux de matériaux et les fournisseurs en aval sont documentés et vérifiés.",
    "Vous recevez des certificats et un rapport de détournement / récupération à la clôture.",
  ],
  standards: [
    "Hiérarchie de réemploi, réparation et remise à neuf",
    "Assainissement et destruction sécurisés des données",
    "Système de gestion environnement, santé et sécurité",
    "Contrôles de manutention des matières visées",
    "Diligence raisonnable sur les fournisseurs en aval",
    "Documentation complète de la chaîne de possession",
  ],
};

export function getR2v3(locale: Locale): R2v3 {
  if (locale === "en") return r2v3;
  return deepMerge(r2v3, r2v3Fr);
}
