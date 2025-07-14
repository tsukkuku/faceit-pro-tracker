import { useNavigate, useParams } from "react-router-dom";
import {
  useGetMatchInfoQuery,
  useGetMatchStatsQuery,
} from "@/modules/matches/api";
import { useTeamInfo } from "@/modules/matches/hooks";
import { Button } from "@/shared/ui";
import { ScaleLoader } from "react-spinners";
import { ScoreBoardInfo } from "./ScoreBoardInfo";
import { ScoreBoardTable } from "./ScoreBoardTable/ScoreBoardTable";
import style from "./ScoreBoard.module.scss";

export const ScoreBoard = () => {
  const navigate = useNavigate();
  const { id = "" } = useParams();
  const { data: teamInfo, isLoading: infoLoading } = useGetMatchInfoQuery(id);
  const { data: stats, isLoading } = useGetMatchStatsQuery(id);

  if (isLoading || infoLoading || !stats || !teamInfo)
    return <ScaleLoader color="var(--text-color)" />;

  const { faction1, faction2, sortedFirstTeam, sortedSecondTeam } =
    useTeamInfo(stats);

  return (
    <div className={style.matchStatsSection}>
      <div className={style.backButton}>
        <Button onClick={() => navigate(-1)}>Назад</Button>
      </div>
      <ScoreBoardInfo faction={faction1} teamInfo={teamInfo} isFirst />
      <ScoreBoardTable sortArray={sortedFirstTeam} />
      <ScoreBoardInfo faction={faction2} teamInfo={teamInfo} />
      <ScoreBoardTable sortArray={sortedSecondTeam} />
    </div>
  );
};
