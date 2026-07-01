/** Unique-ish collection reference, e.g. STR-2026-000842 (no DB; time+random based). */
export function generateReference(): string {
  const year = new Date().getFullYear();
  const n = Math.floor(Math.random() * 900000) + 100000; // 6 digits
  return `STR-${year}-${n}`;
}
