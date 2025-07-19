import {
  useGetMatchInfoQuery,
  useGetMatchStatsQuery,
} from "@/modules/matches/api";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { TeamInfo } from "./TeamInfo";
import { MatchStatus } from "./MatchStatus";
import { RosterCard } from "./RosterCard";
import { PickInformation } from "./PickInformation";
import { useDocumentTitle } from "@/shared/hooks";
import style from "./MatchInfo.module.scss";

export const MatchInfo = () => {
  const { id = "" } = useParams();
  const { data: info, isLoading } = useGetMatchInfoQuery(id);
  const { data: stats, isLoading: isLoadingStats } = useGetMatchStatsQuery(id);
  useDocumentTitle("Комната матча");

  if (isLoading && isLoadingStats)
    return <ScaleLoader color="var(--text-color)" />;
  if (info?.status !== "FINISHED") return <p>Матч еще не закончился</p>;

  return (
    <div className={style.matchInfoSection}>
      <div className={style.matchHeader}>
        {info && stats && (
          <div className={style.teamsInfo}>
            <TeamInfo faction={info} stats={stats} isFirst />
            <MatchStatus status={info} header={stats} />
            <TeamInfo faction={info} stats={stats} />
          </div>
        )}
      </div>
      <div className={style.matchRoster}>
        <div className={style.factionFirstRoster}>
          {info.teams.faction1.roster.map((item) => (
            <RosterCard key={item.player_id} roster={item} />
          ))}
        </div>
        <PickInformation info={info} />
        <div className={style.factionSecondRoster}>
          {info.teams.faction2.roster.map((item) => (
            <RosterCard key={item.player_id} roster={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
