/* eslint-disable @typescript-eslint/no-explicit-any */

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends (...args: any[]) => any
    ? T[K]
    : T[K] extends Array<infer U>
      ? Array<DeepPartial<U>>
      : T[K] extends object
        ? DeepPartial<T[K]>
        : T[K];
};

function isPlainObject(v: unknown): v is Record<string, any> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** Overlay `overlay` onto `base`; arrays merged element-wise, undefined falls back to base. */
export function deepMerge<T>(base: T, overlay: any): T {
  if (overlay === undefined || overlay === null) return base;
  if (Array.isArray(base)) {
    if (!Array.isArray(overlay)) return base;
    return base.map((item, i) =>
      i < overlay.length ? deepMerge(item, overlay[i]) : item,
    ) as unknown as T;
  }
  if (isPlainObject(base) && isPlainObject(overlay)) {
    const out: any = { ...base };
    for (const key of Object.keys(overlay)) {
      out[key] = deepMerge((base as any)[key], overlay[key]);
    }
    return out as T;
  }
  return (overlay ?? base) as T;
}
