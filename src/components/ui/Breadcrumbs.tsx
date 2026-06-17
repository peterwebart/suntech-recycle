import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({
  items,
  light = false,
}: {
  items: Crumb[];
  light?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={`flex flex-wrap items-center gap-1.5 font-mono text-[12px] tracking-[0.04em] ${
          light ? "text-white/70" : "text-ink-soft"
        }`}
      >
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={light ? "text-white" : "text-ink"}>
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="transition-colors hover:text-green-2"
                >
                  {item.name}
                </Link>
              )}
              {!last && (
                <Icon
                  name="chevron-down"
                  size={13}
                  className="-rotate-90 opacity-50"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
