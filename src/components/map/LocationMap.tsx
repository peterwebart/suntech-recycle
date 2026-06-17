"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";

export type MapMarker = {
  lat: number;
  lng: number;
  label: string;
  /** Highlighted (orange) marker — used for the SunTech facility. */
  primary?: boolean;
};

type Props = {
  center: { lat: number; lng: number };
  zoom?: number;
  markers: MapMarker[];
  className?: string;
  /** Accessible description of what the map shows. */
  ariaLabel: string;
};

function pin(color: string) {
  return `
    <svg width="30" height="40" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M15 0C6.7 0 0 6.7 0 15c0 10.5 15 25 15 25s15-14.5 15-25C30 6.7 23.3 0 15 0z" fill="${color}"/>
      <circle cx="15" cy="15" r="6" fill="#ffffff"/>
    </svg>`;
}

/**
 * Leaflet is loaded imperatively inside an effect so it never runs during SSR
 * (it touches `window`). OpenStreetMap raster tiles need no API key and are
 * fetched directly by the browser.
 */
export function LocationMap({
  center,
  zoom = 12,
  markers,
  className = "",
  ariaLabel,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    let cancelled = false;
    const el = containerRef.current;
    if (!el) return;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: [center.lat, center.lng],
        zoom,
        scrollWheelZoom: false,
        attributionControl: true,
      });
      mapRef.current = map;

      L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        },
      ).addTo(map);

      const bounds: [number, number][] = [];
      for (const m of markers) {
        const icon = L.divIcon({
          className: "",
          html: pin(m.primary ? "#F4A000" : "#0F6B3A"),
          iconSize: [30, 40],
          iconAnchor: [15, 40],
          popupAnchor: [0, -36],
        });
        L.marker([m.lat, m.lng], {
          icon,
          title: m.label,
          alt: m.label,
        })
          .addTo(map)
          .bindPopup(`<strong>${m.label}</strong>`);
        bounds.push([m.lat, m.lng]);
      }

      if (bounds.length > 1) {
        map.fitBounds(bounds, { padding: [48, 48], maxZoom: 13 });
      }
    })();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
    // Re-init only when the target location changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [center.lat, center.lng, zoom]);

  return (
    <div
      ref={containerRef}
      role="application"
      aria-label={ariaLabel}
      className={`h-full w-full ${className}`}
    />
  );
}
