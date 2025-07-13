import type { FC } from "react";
import type { MatchInfo, MatchStats } from "@/modules/matches/api";
import style from "./MatchStatus.module.scss";

interface MatchStatsProps {
  status: MatchInfo;
  header: MatchStats;
}

export const MatchStatus: FC<MatchStatsProps> = ({ status, header }) => {
  return (
    <div className={style.information}>
      {header?.rounds.map((item) => (
        <div key={item.round_stats.Score} className={style.matchModeInfo}>
          {item.game_mode} | {item.round_stats.Region}
        </div>
      ))}
      <div className={style.matchStatusInfo}>
        <div className={style.matchStatus}>Завершено</div>
        <div className={style.matchBestOfInfo}>Best of {status?.best_of}</div>
      </div>
    </div>
  );
};
