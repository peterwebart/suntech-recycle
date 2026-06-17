"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { mainNav, type MainNavItem } from "@/lib/navigation";

const CLOSE_DELAY = 120;

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtons = useRef(new Map<string, HTMLButtonElement | null>());
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const drawerCloseRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Desktop megamenu: label of the open panel (or null).
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  // Mobile drawer open/closed.
  const [mobileOpen, setMobileOpen] = useState(false);
  // Mobile accordion: label of the expanded section (or null).
  const [openSection, setOpenSection] = useState<string | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const openPanel = useCallback(
    (label: string) => {
      clearCloseTimer();
      setOpenMenu(label);
    },
    [clearCloseTimer],
  );

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY);
  }, [clearCloseTimer]);

  const closeAll = useCallback(() => {
    clearCloseTimer();
    setOpenMenu(null);
    setMobileOpen(false);
  }, [clearCloseTimer]);

  // Close everything on route change.
  useEffect(() => {
    closeAll();
    setOpenSection(null);
  }, [pathname, closeAll]);

  // Escape closes panels / drawer; outside click closes the desktop panel.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (mobileOpen) {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      } else if (openMenu) {
        const trigger = menuButtons.current.get(openMenu);
        setOpenMenu(null);
        trigger?.focus();
      }
    }
    function onPointerDown(e: MouseEvent) {
      if (!openMenu) return;
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [openMenu, mobileOpen]);

  // Lock body scroll while the mobile drawer is open; focus the close button.
  useEffect(() => {
    if (!mobileOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    drawerCloseRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [mobileOpen]);

  const activeItem =
    openMenu !== null
      ? (mainNav.find(
          (i): i is Extract<MainNavItem, { kind: "menu" }> =>
            i.kind === "menu" && i.label === openMenu,
        ) ?? null)
      : null;

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-line bg-light/85 backdrop-blur-md"
      onMouseLeave={scheduleClose}
    >
      <div className="mx-auto flex h-[70px] w-full max-w-[1180px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Logo onClick={closeAll} />

        {/* ── Desktop primary nav ─────────────────────────────────────── */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              item.kind === "menu" ? (
                <li
                  key={item.label}
                  onMouseEnter={() => openPanel(item.label)}
                >
                  <button
                    type="button"
                    ref={(el) => {
                      menuButtons.current.set(item.label, el);
                    }}
                    aria-haspopup="true"
                    aria-expanded={openMenu === item.label}
                    aria-controls={`menu-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                    onClick={() =>
                      setOpenMenu((cur) =>
                        cur === item.label ? null : item.label,
                      )
                    }
                    className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors ${
                      openMenu === item.label
                        ? "text-green"
                        : "text-ink-soft hover:text-green"
                    }`}
                  >
                    {item.label}
                    <Icon
                      name="chevron-down"
                      size={15}
                      className={`transition-transform duration-200 ${
                        openMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </li>
              ) : (
                <li key={item.label} onMouseEnter={scheduleClose}>
                  <Link
                    href={item.href}
                    className="inline-block rounded-full px-3.5 py-2 text-[15px] font-medium text-ink-soft transition-colors hover:text-green"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* ── Desktop right side ──────────────────────────────────────── */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phone.tel}`}
            className="inline-flex items-center gap-2 text-[15px] font-medium text-ink-soft transition-colors hover:text-green"
          >
            <Icon name="phone" size={16} className="text-green" />
            {site.phone.display}
          </a>
          <Button href="/collection" variant="dark" size="md" onMouseEnter={scheduleClose}>
            Request a collection
          </Button>
        </div>

        {/* ── Mobile hamburger ────────────────────────────────────────── */}
        <button
          ref={hamburgerRef}
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-line p-2.5 text-ink transition-colors hover:border-ink lg:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-drawer"
          onClick={() => setMobileOpen(true)}
        >
          <Icon name="menu" size={22} />
        </button>
      </div>

      {/* ── Desktop megamenu panel ────────────────────────────────────── */}
      {activeItem && (
        <div
          id={`menu-${activeItem.label.replace(/\s+/g, "-").toLowerCase()}`}
          className="absolute inset-x-0 top-full hidden border-b border-line bg-paper shadow-[0_24px_48px_-28px_rgba(11,15,13,0.35)] lg:block"
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto grid w-full max-w-[1180px] grid-cols-[1.05fr_2fr] gap-8 px-5 py-8 sm:px-8 lg:px-10">
            <Link
              href={activeItem.featured.href}
              onClick={closeAll}
              className="group flex flex-col justify-between rounded-card bg-gradient-to-br from-green to-forest p-6 text-white transition-transform hover:-translate-y-0.5"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-green-2">
                  {activeItem.columnTitle}
                </span>
                <p className="mt-3 font-display text-[22px] font-semibold leading-tight">
                  {activeItem.featured.title}
                </p>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/80">
                  {activeItem.featured.body}
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-orange">
                {activeItem.featured.cta}
                <Icon
                  name="arrow-right"
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 self-center">
              {activeItem.items.map((entry) => (
                <li key={entry.href}>
                  <Link
                    href={entry.href}
                    onClick={closeAll}
                    className="group block rounded-xl px-3 py-2.5 transition-colors hover:bg-light"
                  >
                    <span className="flex items-center gap-1.5 font-display text-[16px] font-semibold text-ink">
                      {entry.label}
                      <Icon
                        name="arrow-right"
                        size={15}
                        className="text-green opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </span>
                    {entry.description && (
                      <span className="mt-0.5 block text-[13px] leading-snug text-ink-soft">
                        {entry.description}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ── Mobile drawer + overlay ───────────────────────────────────── */}
      <div
        className={`lg:hidden ${mobileOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`fixed inset-0 z-40 bg-near-black/55 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <aside
          id="mobile-drawer"
          aria-label="Menu"
          className={`fixed right-0 top-0 z-50 flex h-full w-[min(88vw,360px)] flex-col bg-paper shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-[70px] shrink-0 items-center justify-between border-b border-line px-5">
            <Logo onClick={closeAll} />
            <button
              ref={drawerCloseRef}
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-line p-2 text-ink transition-colors hover:border-ink"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="flex-1 overflow-y-auto overscroll-contain px-4 py-5"
          >
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) =>
                item.kind === "menu" ? (
                  <li key={item.label} className="border-b border-line/70 pb-1">
                    <button
                      type="button"
                      aria-expanded={openSection === item.label}
                      aria-controls={`acc-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                      onClick={() =>
                        setOpenSection((cur) =>
                          cur === item.label ? null : item.label,
                        )
                      }
                      className="flex w-full items-center justify-between px-2 py-3 text-left font-display text-[17px] font-semibold text-ink"
                    >
                      {item.label}
                      <Icon
                        name="chevron-down"
                        size={18}
                        className={`text-ink-soft transition-transform duration-200 ${
                          openSection === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      id={`acc-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        openSection === item.label
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <ul className="overflow-hidden">
                        <li>
                          <Link
                            href={item.href}
                            onClick={closeAll}
                            className="block rounded-lg px-2 py-2 text-[14px] font-medium text-green"
                          >
                            {item.featured.cta}
                          </Link>
                        </li>
                        {item.items.map((entry) => (
                          <li key={entry.href}>
                            <Link
                              href={entry.href}
                              onClick={closeAll}
                              className="block rounded-lg px-2 py-2 text-[15px] text-ink-soft transition-colors hover:bg-light hover:text-ink"
                            >
                              {entry.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.label} className="border-b border-line/70">
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      className="block px-2 py-3 font-display text-[17px] font-semibold text-ink transition-colors hover:text-green"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="shrink-0 space-y-3 border-t border-line px-5 py-5">
            <a
              href={`tel:${site.phone.tel}`}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-ink"
            >
              <Icon name="phone" size={16} className="text-green" />
              {site.phone.display}
            </a>
            <Button
              href="/collection"
              variant="primary"
              size="md"
              icon="arrow-right"
              className="w-full"
              onClick={closeAll}
            >
              Request a collection
            </Button>
          </div>
        </aside>
      </div>
    </header>
  );
}
