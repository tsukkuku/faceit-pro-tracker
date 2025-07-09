export const NO_AVATAR =
  "https://assets.faceit-cdn.net/organizer_avatar/880b1f9a-6cc3-4b26-a4b6-d112e0282c91_1551450421698.jpg";

export const NO_BACKGROUND =
  "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/faceit_assets_images_profile_header.jpg";

export const ELO =
  "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/fuse_foundations_icons_platform_elo.svg";

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

export const LEVEL_ICONS = {
  10: "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/10_v2.svg",
  9: "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/09_v2.svg",
  8: "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/08_v2.svg",
  7: "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/07_v2.svg",
  6: "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/06_v2.svg",
  5: "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/05_v2.svg",
  4: "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/04_v2.svg",
  3: "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/03_v2.svg",
  2: "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/02_v2.svg",
  1: "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/01_v2.svg",
};

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
