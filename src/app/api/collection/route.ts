import { NextResponse } from "next/server";
import { validateCollection, type CollectionFormData } from "@/lib/collectionForm";
import { sendCollectionEmails } from "@/lib/mailer";
import { generateReference } from "@/lib/reference";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: Partial<CollectionFormData>;
  try {
    body = (await req.json()) as Partial<CollectionFormData>;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot: silently accept (bots think they succeeded) but send nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true, reference: generateReference() });
  }

  const errors = validateCollection(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const reference = generateReference();
  const locale = (body as { locale?: string }).locale === "fr" ? "fr" : "en";
  try {
    await sendCollectionEmails(body as CollectionFormData, reference, locale);
  } catch (err) {
    // Never lose the lead over an email hiccup; log and still return the reference.
    console.error("[collection] email error", err);
  }

  return NextResponse.json({ ok: true, reference });
}
