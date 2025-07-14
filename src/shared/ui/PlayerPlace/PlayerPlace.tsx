import type { FC, ReactNode } from "react";
import { Button } from "@/shared/ui";
import { RankSVG } from "@/shared/assets";
import clsx from "clsx";
import style from "./PlayerPlace.module.scss";

export type PlayerPlaceVariants = "top1" | "top2" | "top3" | "default";

interface PlayerPlaceProps {
  children?: ReactNode;
  variant?: PlayerPlaceVariants;
}

export const PlayerPlace: FC<PlayerPlaceProps> = ({
  children,
  variant = "default",
}) => {
  return (
    <>
      <Button variant="player-place" className={clsx(style[variant])}>
        {children}
        <RankSVG width={26} height={30} className={style.rankIcon} />
      </Button>
    </>
  );
};
