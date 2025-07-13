import type { MatchInfo, MatchStats } from "@/modules/matches/api";
import type { FC } from "react";
import { Avatar } from "@/shared/ui";
import { NO_AVATAR } from "@/shared/constants";
import style from "./TeamInfo.module.scss";

interface TeamInfo {
  faction: MatchInfo;
  stats: MatchStats;
  isFirst?: boolean;
}

export const TeamInfo: FC<TeamInfo> = ({ faction, isFirst, stats }) => {
  const isWinner =
    faction.results.winner === (isFirst ? "faction1" : "faction2");
  return (
    <div className={isFirst ? style.firstFaction : style.secondFaction}>
      <div
        className={isFirst ? style.factionFirstTitle : style.factionSecondTitle}
      >
        <h6 className={style.factionName}>
          {isFirst
            ? faction?.teams.faction1.name
            : faction?.teams.faction2.name}
        </h6>
      </div>
      <Avatar
        size="sm"
        src={
          isFirst
            ? faction?.teams.faction1.avatar
            : faction?.teams.faction2.avatar
        }
        fallback={NO_AVATAR}
        alt="Team Avatar"
      />
      <div
        className={isFirst ? style.factionFirstScore : style.factionSecondScore}
      >
        <h2 className={isWinner ? style.winner : ""}>
          {stats.rounds.map(
            (item) => item.round_stats.Score.split("/")[isFirst ? 0 : 1]
          )}
        </h2>
      </div>
    </div>
  );
};
