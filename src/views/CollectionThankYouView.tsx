"use client";

import { useEffect, useState } from "react";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { site, fullAddress } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";
import { type CollectionFormData } from "@/lib/collectionForm";

type Stored = { reference: string; data: CollectionFormData; locale: string };

export function CollectionThankYouContent({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const ty = t.thankYou;
  const cf = t.collectionForm;
  const [stored, setStored] = useState<Stored | null>(null);
  const [ref, setRef] = useState<string>("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let reference = "";
    try {
      reference = new URLSearchParams(window.location.search).get("ref") ?? "";
    } catch {
      /* ignore */
    }
    try {
      const raw = sessionStorage.getItem("suntech_collection");
      if (raw) {
        const parsed = JSON.parse(raw) as Stored;
        setStored(parsed);
        if (parsed.reference) reference = parsed.reference;
      }
    } catch {
      /* ignore */
    }
    setRef(reference);
    setLoaded(true);
  }, []);

  const pairs: [string, string | undefined][] = stored
    ? [
        [cf.firstName, stored.data.firstName],
        [cf.lastName, stored.data.lastName],
        [cf.company, stored.data.company],
        [cf.email, stored.data.email],
        [cf.phone, stored.data.phone],
        [cf.assistLabel, stored.data.assist],
        [cf.businessAddress, stored.data.businessAddress],
        [cf.city, stored.data.city],
        [cf.provinceState, stored.data.provinceState],
        [cf.postalZip, stored.data.postalZip],
        [cf.numberOfItems, stored.data.numberOfItems],
        [cf.estimatedPickupDate, stored.data.estimatedPickupDate],
        [cf.preferredCollectionTime, stored.data.preferredCollectionTime],
        [cf.typeOfEquipment, stored.data.typeOfEquipment],
        [cf.comments, stored.data.comments],
      ]
    : [];
  const summary = pairs.filter(
    (p): p is [string, string] => typeof p[1] === "string" && p[1].trim() !== "",
  );

  return (
    <>
      <section className="bg-forest py-[clamp(48px,7vw,88px)] text-white">
        <Container>
          <div className="mx-auto max-w-[54ch] text-center">
            <span className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/15 ring-8 ring-white/5">
              <Icon name="check" size={40} className="text-white" />
            </span>
            <Eyebrow light className="mt-6 block">{ty.eyebrow}</Eyebrow>
            <h1 className="mt-3 text-[clamp(30px,4.6vw,46px)]">{ty.h1}</h1>
            <p className="mt-4 text-[clamp(16px,2vw,18px)] text-white/85">{ty.confirm}</p>
            {loaded && ref && (
              <div className="mx-auto mt-7 inline-flex flex-col items-center rounded-card border border-white/20 bg-white/[0.06] px-8 py-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
                  {ty.refLabel}
                </span>
                <span className="mt-1 font-display text-[clamp(22px,3vw,30px)] font-bold text-white">
                  {ref}
                </span>
              </div>
            )}
          </div>
        </Container>
      </section>

      <Section tone="light">
        <Container>
          <div className="mx-auto grid max-w-[820px] gap-6 lg:grid-cols-2">
            {summary.length > 0 && (
              <div data-reveal className="rounded-card border border-line bg-paper p-6">
                <h2 className="text-[18px]">{ty.summaryTitle}</h2>
                <dl className="mt-4 grid gap-2.5">
                  {summary.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[minmax(120px,40%)_1fr] gap-3 border-b border-line pb-2.5 text-[14px] last:border-0">
                      <dt className="font-medium text-ink-soft">{label}</dt>
                      <dd className="text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className={summary.length > 0 ? "" : "lg:col-span-2"}>
              <div data-reveal className="rounded-card border border-line bg-paper p-6">
                <h2 className="text-[18px]">{ty.responseTitle}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{ty.responseBody}</p>
                {!ref && loaded && (
                  <p className="mt-3 text-[14px] text-ink-soft">{ty.noData}</p>
                )}
              </div>
              <div data-reveal className="mt-6 rounded-card border border-line bg-paper p-6">
                <h2 className="text-[18px]">{ty.contactTitle}</h2>
                <ul className="mt-4 grid gap-3 text-[14.5px]">
                  <li className="flex items-start gap-2.5">
                    <Icon name="map-pin" size={17} className="mt-0.5 shrink-0 text-green" />
                    <span className="text-ink">{fullAddress}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Icon name="phone" size={16} className="shrink-0 text-green" />
                    <a href={`tel:${site.phone.tel}`} className="text-ink transition-colors hover:text-green">
                      {site.phone.display}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Icon name="mail" size={16} className="shrink-0 text-green" />
                    <a href={`mailto:${site.email}`} className="break-all text-ink transition-colors hover:text-green">
                      {site.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3.5">
            <Button href={lp(locale, "/")} variant="dark" size="lg">
              {ty.btnHome}
            </Button>
            <Button href={lp(locale, "/collection")} variant="primary" size="lg" icon="arrow-right">
              {ty.btnAnother}
            </Button>
            <Button href={lp(locale, "/contact")} variant="ghost-dark" size="lg">
              {ty.btnContact}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
