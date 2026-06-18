import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HomeContent } from "@/views/HomeView";

export const metadata: Metadata = buildMetadata({
  title:
    "SunTech Recycle — Recyclage d’électronique certifié R2v3, ITAD et destruction de données | Grand Montréal",
  description:
    "Disposition des actifs TI certifiée R2v3, destruction sécurisée des données et recyclage d’électronique commercial pour banques, centres de données, hôpitaux, gouvernement et entreprises dans le Grand Montréal. Collecte d’entreprise gratuite avec chaîne de possession complète.",
  path: "/",
  locale: "fr",
});

export default function HomePageFr() {
  return <HomeContent locale="fr" />;
}
