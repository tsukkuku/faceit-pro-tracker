export const NO_BACKGROUND =
  "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/faceit_assets_images_profile_header.jpg";

export const STATS_CARD = [
  "Matches",
  "Win Rate %",
  "Longest Win Streak",
  "Recent Results",
  "Average K/D Ratio",
  "Average Headshots %",
] as const;

export const KEYS = [
  "Matches",
  "Win Rate %",
  "Average Kills",
  "Average Deaths",
  "Average Assists",
  "Average K/R Ratio",
  "Average K/D Ratio",
  "Headshots per Match",
  "Average Headshots %",
  "Average Triple Kills",
  "Average Quadro Kills",
  "Average Penta Kills",
] as const;

export const levels = [
  { level: 1, min: 100, max: 500 },
  { level: 2, min: 501, max: 750 },
  { level: 3, min: 751, max: 900 },
  { level: 4, min: 901, max: 1050 },
  { level: 5, min: 1051, max: 1200 },
  { level: 6, min: 1201, max: 1350 },
  { level: 7, min: 1351, max: 1530 },
  { level: 8, min: 1531, max: 1750 },
  { level: 9, min: 1751, max: 2000 },
];

export const REGION_FLAG: Record<string, string> = {
  EU: "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/europe.svg",
  NA: "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/north_america.svg",
  SA: "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/south_america.svg",
  SEA: "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/asia.svg",
  OCE: "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/oceania.svg",
};
