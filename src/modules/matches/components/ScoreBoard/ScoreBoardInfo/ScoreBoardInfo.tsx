import { Avatar } from "@/shared/ui";
import { type FC } from "react";
import type { MatchInfo, TeamInfo } from "@/modules/matches/api";
import { NO_AVATAR } from "@/shared/constants";
import style from "./ScoreBoardInfo.module.scss";

interface ScoreBoardInfoProps {
  teamInfo: MatchInfo;
  faction: TeamInfo;
  isFirst?: boolean;
}

export const ScoreBoardInfo: FC<ScoreBoardInfoProps> = ({
  teamInfo,
  faction,
  isFirst,
}) => {
  const currentFaction = isFirst
    ? teamInfo.teams.faction1
    : teamInfo.teams.faction2;

  return (
    <div className={style.factionInfo}>
      <div className={style.nameInfo}>
        <Avatar
          src={currentFaction.avatar}
          alt={currentFaction.name}
          fallback={NO_AVATAR}
          size="sm"
        />
        <div>{currentFaction.name}</div>
      </div>
      <div className={style.factionResults}>
        <div>
          {faction?.team_stats["Team Win"] === "1" ? (
            <p className={style.winnerTeam}>Победа</p>
          ) : (
            <p>Поражение</p>
          )}
        </div>
        <div className={style.factionScores}>
          <div>First Half Score: {faction?.team_stats["First Half Score"]}</div>
          <div>
            Second Half Score: {faction?.team_stats["Second Half Score"]}
          </div>
          <div>Final Score: {faction?.team_stats["Final Score"]}</div>
        </div>
      </div>
    </div>
  );
};
