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
