"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import "./map-embed.css";
import { KANCELARIA } from "@/lib/kancelaria";

type MapTheme =
  | "paper"
  | "bone"
  | "dark"
  | "champagne"
  | "legacy-dark"
  | "forest";

type Props = {
  theme: MapTheme;
  className?: string;
  caption?: string;
  zoom?: number;
};

type TileSet = { base: string; attribution: string };

const CARTO_LIGHT_BASE =
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
const CARTO_DARK_BASE =
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
const STADIA_DARK =
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png";

const ATTR_CARTO =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';
const ATTR_STADIA =
  '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const TILES: Record<MapTheme, TileSet> = {
  paper: { base: CARTO_LIGHT_BASE, attribution: ATTR_CARTO },
  bone: { base: CARTO_LIGHT_BASE, attribution: ATTR_CARTO },
  dark: { base: CARTO_DARK_BASE, attribution: ATTR_CARTO },
  champagne: { base: CARTO_LIGHT_BASE, attribution: ATTR_CARTO },
  "legacy-dark": { base: STADIA_DARK, attribution: ATTR_STADIA },
  forest: { base: CARTO_LIGHT_BASE, attribution: ATTR_CARTO },
};

export function MapEmbed({ theme, className = "", caption, zoom = 16 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const node = containerRef.current;
    let map: import("leaflet").Map | null = null;
    let cancelled = false;

    (async () => {
      const L = await import("leaflet");
      if (cancelled || !node) return;

      map = L.map(node, {
        center: [KANCELARIA.geo.lat, KANCELARIA.geo.lng],
        zoom,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      map.attributionControl.setPrefix(false);

      const tiles = TILES[theme];

      L.tileLayer(tiles.base, {
        subdomains: "abcd",
        maxZoom: 20,
        attribution: tiles.attribution,
        className: "map-embed__tile-base",
      }).addTo(map);

      const markerIcon = L.divIcon({
        className: "kancelaria-marker",
        html: `<span class="kancelaria-marker__dot"></span><span class="kancelaria-marker__pulse"></span>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });

      L.marker([KANCELARIA.geo.lat, KANCELARIA.geo.lng], {
        icon: markerIcon,
        keyboard: false,
        interactive: false,
      }).addTo(map);

      map.on("click", () => {
        map?.scrollWheelZoom.enable();
      });
      map.on("mouseout", () => {
        map?.scrollWheelZoom.disable();
      });
    })();

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [theme, zoom]);

  return (
    <figure className={`map-embed ${className}`} data-theme={theme}>
      <div
        ref={containerRef}
        className="map-embed__canvas"
        aria-label="Mapa lokalizacji kancelarii"
        role="img"
      />
      {caption ? (
        <figcaption className="map-embed__caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
