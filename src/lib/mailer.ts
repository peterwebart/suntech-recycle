import nodemailer from "nodemailer";
import type { CollectionFormData } from "./collectionForm";

const MAIL_TO = process.env.MAIL_TO || "nick@suntechrecycle.com";
const MAIL_FROM = process.env.MAIL_FROM || "SunTech Recycle <no-reply@suntechrecycle.com>";
const PHONE = "(514) 808-4061";
const ADDRESS = "2193 Rue de la Métropole, Longueuil, QC J4G 1S5";

function transport() {
  const host = process.env.SMTP_HOST;
  if (!host) return null;
  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined,
  });
}

const LABELS: { key: keyof CollectionFormData; label: string }[] = [
  { key: "firstName", label: "First name" },
  { key: "lastName", label: "Last name" },
  { key: "company", label: "Company" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "assist", label: "How can we assist?" },
  { key: "businessAddress", label: "Business address" },
  { key: "city", label: "City" },
  { key: "provinceState", label: "Province / State" },
  { key: "postalZip", label: "Postal / ZIP" },
  { key: "numberOfItems", label: "Number of items" },
  { key: "estimatedPickupDate", label: "Estimated pickup date" },
  { key: "preferredCollectionTime", label: "Preferred collection time" },
  { key: "typeOfEquipment", label: "Type of equipment" },
  { key: "comments", label: "Comments" },
];

function esc(s: string): string {
  return s.replace(/[<>&]/g, (c) => (c === "<" ? "&lt;" : c === ">" ? "&gt;" : "&amp;"));
}

function rows(d: CollectionFormData): string {
  return LABELS.filter(({ key }) => {
    const v = d[key];
    return typeof v === "string" && v.trim() !== "";
  })
    .map(
      ({ key, label }) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f8faf9;font-weight:600;white-space:nowrap">${label}</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${esc(String(d[key]))}</td></tr>`,
    )
    .join("");
}

function adminHtml(d: CollectionFormData, reference: string): string {
  return `<div style="font-family:Arial,Helvetica,sans-serif;color:#111;max-width:640px">
  <h2 style="color:#0f6b3a;margin:0 0 4px">New collection request</h2>
  <p style="margin:0 0 16px;color:#374151">Reference <strong>${reference}</strong></p>
  <table style="border-collapse:collapse;width:100%;font-size:14px">${rows(d)}</table>
  <p style="margin:16px 0 0;font-size:12px;color:#6b7280">Sent from suntechrecycle.com — reply to this email to reach the customer.</p>
</div>`;
}

function customerHtml(d: CollectionFormData, reference: string, locale: "en" | "fr"): string {
  const fr = locale === "fr";
  const hi = fr ? `Bonjour ${esc(d.firstName)},` : `Hi ${esc(d.firstName)},`;
  const thanks = fr
    ? "Merci d’avoir demandé une collecte auprès de SunTech Recycle. Nous avons bien reçu votre demande et un membre de notre équipe vous répondra sous un jour ouvrable."
    : "Thank you for requesting a collection with SunTech Recycle. We’ve received your request and a member of our team will get back to you within one business day.";
  const refLine = fr ? "Votre numéro de référence" : "Your reference number";
  const details = fr ? "Détails soumis" : "Details submitted";
  const contact = fr ? "Nous joindre" : "Contact us";
  return `<div style="font-family:Arial,Helvetica,sans-serif;color:#111;max-width:640px">
  <h2 style="color:#0f6b3a;margin:0 0 12px">${fr ? "Merci pour votre demande de collecte" : "Thank you for your collection request"}</h2>
  <p style="margin:0 0 12px;color:#374151">${hi}</p>
  <p style="margin:0 0 16px;color:#374151">${thanks}</p>
  <p style="margin:0 0 16px;font-size:15px">${refLine}: <strong style="color:#0f6b3a">${reference}</strong></p>
  <h3 style="margin:0 0 8px;font-size:15px">${details}</h3>
  <table style="border-collapse:collapse;width:100%;font-size:14px">${rows(d)}</table>
  <h3 style="margin:20px 0 6px;font-size:15px">${contact}</h3>
  <p style="margin:0;color:#374151;font-size:14px">${PHONE} · ${MAIL_TO}<br>${ADDRESS}</p>
</div>`;
}

export async function sendCollectionEmails(
  d: CollectionFormData,
  reference: string,
  locale: "en" | "fr" = "en",
): Promise<{ sent: boolean }> {
  const t = transport();
  if (!t) {
    console.warn(`[collection] SMTP not configured — email skipped. Reference ${reference}`);
    return { sent: false };
  }
  await t.sendMail({
    from: MAIL_FROM,
    to: MAIL_TO,
    replyTo: d.email,
    subject: `New Collection Request - ${reference}`,
    html: adminHtml(d, reference),
  });
  await t.sendMail({
    from: MAIL_FROM,
    to: d.email,
    subject:
      locale === "fr"
        ? `Votre demande de collecte SunTech - ${reference}`
        : `Your SunTech collection request - ${reference}`,
    html: customerHtml(d, reference, locale),
  });
  return { sent: true };
}
