import type { PlayerPlaceVariants } from "@/shared/ui";

export const getVariant = (position: number): PlayerPlaceVariants => {
  if (position === 1) return "top1";
  if (position === 2) return "top2";
  if (position === 3) return "top3";
  return "default";
};
