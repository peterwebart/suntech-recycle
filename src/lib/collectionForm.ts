export const ASSIST_KEYS = [
  "scheduled",
  "donation",
  "data",
  "media",
  "volunteer",
  "other",
] as const;
export type AssistKey = (typeof ASSIST_KEYS)[number];

export type CollectionFormData = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  assist: string;
  businessAddress: string;
  city: string;
  provinceState: string;
  postalZip: string;
  numberOfItems: string;
  estimatedPickupDate: string;
  preferredCollectionTime: string;
  typeOfEquipment: string;
  comments: string;
  consent: boolean;
  /** Honeypot — must stay empty. */
  website?: string;
};

export const EMPTY_FORM: CollectionFormData = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  assist: "",
  businessAddress: "",
  city: "",
  provinceState: "",
  postalZip: "",
  numberOfItems: "",
  estimatedPickupDate: "",
  preferredCollectionTime: "",
  typeOfEquipment: "",
  comments: "",
  consent: false,
  website: "",
};

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_RE = /^[+()\-\s.\d]{7,}$/;

export type FieldErrorCode = "required" | "email" | "phone" | "consent";
export type CollectionErrors = Partial<Record<keyof CollectionFormData, FieldErrorCode>>;

export function validateCollection(d: Partial<CollectionFormData>): CollectionErrors {
  const e: CollectionErrors = {};
  if (!d.firstName?.trim()) e.firstName = "required";
  if (!d.lastName?.trim()) e.lastName = "required";
  if (!d.email?.trim()) e.email = "required";
  else if (!EMAIL_RE.test(d.email.trim())) e.email = "email";
  if (!d.phone?.trim()) e.phone = "required";
  else if (!PHONE_RE.test(d.phone.trim())) e.phone = "phone";
  if (!d.assist?.trim()) e.assist = "required";
  if (!d.consent) e.consent = "consent";
  return e;
}
