import { Elo } from "@/shared/assets";
import type { FC } from "react";
import style from "./EloInfo.module.scss";

interface EloInfoProps {
  elo: number;
}

export const EloInfo: FC<EloInfoProps> = ({ elo }) => {
  return (
    <>
      <div className={style.skillLevelContainer}>
        <div className={style.skillLevelTitle}>
          ELO <Elo width={30} height={30} />
        </div>
        <div className={style.skillLevelElo}>{elo}</div>
      </div>
    </>
  );
};
