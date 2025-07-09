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
        <h3 className={style.skillLevelTitle}>
          ELO <Elo width={30} height={30} />
        </h3>
        <div className={style.skillLevelElo}>{elo}</div>
        <div className={style.weekendResultsContainer}>
          <span className={style.text}>Результаты последней недели</span>
          <div className={style.weekendResultsText}>
            <span className={style.weekendResultsWins}>W: 0</span>
            <span className={style.weekendResultsLoses}>L: 0</span>
          </div>
        </div>
      </div>
    </>
  );
};
