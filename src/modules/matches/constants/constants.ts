import type { PlayerInMatchStats } from "../api";

export const MAP_IMAGES: Record<string, string> = {
  de_dust2:
    "https://distribution.faceit-cdn.net/images/4eafa800-b504-4dd2-afd0-90882c729140.jpeg",
  de_mirage:
    "https://distribution.faceit-cdn.net/images/c47710c4-4407-4dbd-ac89-2ef3b20a262e.jpeg",
  de_inferno:
    "https://distribution.faceit-cdn.net/images/d71cae42-b38c-470d-a548-0c59d6c71fbe.jpeg",
  de_ancient:
    "https://distribution.faceit-cdn.net/images/6f72ffec-7607-44cf-9c31-09a865fa92f5.jpeg",
  de_anubis:
    "https://distribution.faceit-cdn.net/images/1c2412c7-ae0c-4fa1-ad86-82a3287cb479.jpeg",
  de_nuke:
    "https://distribution.faceit-cdn.net/images/faa7775b-f42b-4627-891a-21ee7cc13637.jpeg",
  de_train:
    "https://distribution.faceit-cdn.net/images/9e2d5b60-e16e-4309-8e77-8d4427938095.jpeg",
  de_vertigo:
    "https://distribution.faceit-cdn.net/images/a8d0572f-8a89-474a-babc-c2009cdc42f7.jpeg",
  de_overpass:
    "https://distribution.faceit-cdn.net/images/8ba6f730-fa31-4dd7-9b41-4cff81d79fef.jpeg",
} as const;

export const MATCH_HEADERS = [
  "Режим",
  "Результат",
  "Счет",
  "K / D / A",
  "K / D",
  "K / R",
  "ADR",
  "Map",
] as const;

export const MATCH_STATS_HEADER: Array<keyof PlayerInMatchStats> = [
  "Kills",
  "Assists",
  "Deaths",
  "K/D Ratio",
  "K/R Ratio",
  "Headshots",
  "Headshots %",
  "MVPs",
  "Triple Kills",
  "Quadro Kills",
  "Penta Kills",
  "ADR",
];
