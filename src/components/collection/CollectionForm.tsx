"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";
import {
  EMPTY_FORM,
  validateCollection,
  ASSIST_KEYS,
  type CollectionFormData,
  type CollectionErrors,
  type FieldErrorCode,
} from "@/lib/collectionForm";

const inputBase =
  "mt-1.5 w-full rounded-lg border bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-green focus:ring-2 focus:ring-green/20";

export function CollectionForm({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).collectionForm;
  const router = useRouter();
  const [data, setData] = useState<CollectionFormData>({ ...EMPTY_FORM });
  const [errors, setErrors] = useState<CollectionErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  function msg(code: FieldErrorCode): string {
    return code === "email"
      ? t.errEmail
      : code === "phone"
        ? t.errPhone
        : code === "consent"
          ? t.errConsent
          : t.errRequired;
  }

  function set<K extends keyof CollectionFormData>(key: K, value: CollectionFormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validateCollection(data);
    setErrors(v);
    if (Object.keys(v).length > 0) {
      const first = Object.keys(v)[0];
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/collection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      const json: { ok: boolean; reference?: string } = await res.json();
      if (!res.ok || !json.ok || !json.reference) throw new Error("submit");
      try {
        sessionStorage.setItem(
          "suntech_collection",
          JSON.stringify({ reference: json.reference, data, locale }),
        );
      } catch {
        /* sessionStorage may be unavailable; thank-you page falls back to ?ref */
      }
      const thankYou = locale === "fr" ? "/fr/collecte/merci" : "/collection/thank-you";
      router.push(`${thankYou}?ref=${encodeURIComponent(json.reference)}`);
    } catch {
      setSubmitError(true);
      setSubmitting(false);
    }
  }

  const labelCls = "block text-[13px] font-semibold text-ink";
  const optional = (
    <span className="font-normal text-ink-soft"> ({t.optional})</span>
  );

  function Text({
    name,
    label,
    type = "text",
    required = false,
    autoComplete,
  }: {
    name: keyof CollectionFormData;
    label: string;
    type?: string;
    required?: boolean;
    autoComplete?: string;
  }) {
    const err = errors[name];
    return (
      <div>
        <label htmlFor={`cf-${name}`} className={labelCls}>
          {label}
          {required ? <span className="text-orange"> *</span> : optional}
        </label>
        <input
          id={`cf-${name}`}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          aria-invalid={err ? "true" : undefined}
          aria-describedby={err ? `cf-${name}-err` : undefined}
          value={String(data[name] ?? "")}
          onChange={(e) => set(name, e.target.value as CollectionFormData[typeof name])}
          className={`${inputBase} ${err ? "border-red-400" : "border-line"}`}
        />
        {err && (
          <p id={`cf-${name}-err`} className="mt-1 text-[12.5px] text-red-600">
            {msg(err)}
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      {/* Honeypot (hidden from users, catches bots) */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="cf-website">Website</label>
        <input
          id="cf-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={data.website ?? ""}
          onChange={(e) => set("website", e.target.value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Text name="firstName" label={t.firstName} required autoComplete="given-name" />
        <Text name="lastName" label={t.lastName} required autoComplete="family-name" />
      </div>
      <Text name="company" label={t.company} autoComplete="organization" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Text name="email" label={t.email} type="email" required autoComplete="email" />
        <Text name="phone" label={t.phone} type="tel" required autoComplete="tel" />
      </div>

      <div>
        <label htmlFor="cf-assist" className={labelCls}>
          {t.assistLabel}
          <span className="text-orange"> *</span>
        </label>
        <select
          id="cf-assist"
          name="assist"
          required
          aria-invalid={errors.assist ? "true" : undefined}
          aria-describedby={errors.assist ? "cf-assist-err" : undefined}
          value={data.assist}
          onChange={(e) => set("assist", e.target.value)}
          className={`${inputBase} ${errors.assist ? "border-red-400" : "border-line"}`}
        >
          <option value="" disabled>
            {t.assistPlaceholder}
          </option>
          {ASSIST_KEYS.map((k) => (
            <option key={k} value={t.assistOptions[k]}>
              {t.assistOptions[k]}
            </option>
          ))}
        </select>
        {errors.assist && (
          <p id="cf-assist-err" className="mt-1 text-[12.5px] text-red-600">
            {msg(errors.assist)}
          </p>
        )}
      </div>

      {/* Optional details */}
      <div className="mt-2 border-t border-line pt-4">
        <p className="font-display text-[15px] font-semibold text-ink">{t.moreTitle}</p>
        <p className="mt-0.5 text-[13px] text-ink-soft">{t.moreHint}</p>
      </div>
      <Text name="businessAddress" label={t.businessAddress} autoComplete="street-address" />
      <div className="grid gap-4 sm:grid-cols-3">
        <Text name="city" label={t.city} autoComplete="address-level2" />
        <Text name="provinceState" label={t.provinceState} autoComplete="address-level1" />
        <Text name="postalZip" label={t.postalZip} autoComplete="postal-code" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Text name="numberOfItems" label={t.numberOfItems} />
        <Text name="estimatedPickupDate" label={t.estimatedPickupDate} type="date" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Text name="preferredCollectionTime" label={t.preferredCollectionTime} />
        <Text name="typeOfEquipment" label={t.typeOfEquipment} />
      </div>
      <div>
        <label htmlFor="cf-comments" className={labelCls}>
          {t.comments}
          {optional}
        </label>
        <textarea
          id="cf-comments"
          name="comments"
          rows={4}
          value={data.comments}
          onChange={(e) => set("comments", e.target.value)}
          className={`${inputBase} border-line resize-y`}
        />
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-2.5 text-[14px] text-ink">
          <input
            id="cf-consent"
            name="consent"
            type="checkbox"
            checked={data.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={errors.consent ? "true" : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-line text-green focus:ring-green/30"
          />
          <span>{t.consent}</span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-[12.5px] text-red-600">{msg(errors.consent)}</p>
        )}
      </div>

      {submitError && (
        <p role="alert" className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-[13.5px] text-red-700">
          {t.errSubmit}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-green-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? t.submitting : t.submit}
        {!submitting && <Icon name="arrow-right" size={16} />}
      </button>
    </form>
  );
}
