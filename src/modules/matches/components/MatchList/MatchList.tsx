import { useParams } from "react-router-dom";
import { useGetPlayerMatchStatsQuery } from "@/modules/matches/api";
import { MATCH_HEADERS } from "@/modules/matches/constants";
import { MatchCardFlex } from "../MatchCardFlex";
import style from "./MatchList.module.scss";

export const MatchList = () => {
  const { id } = useParams();
  const { data: matches, isLoading } = useGetPlayerMatchStatsQuery(id || "");
  return (
    <>
      {!isLoading && (
        <div className={style.matchesSection}>
          <h5 className={style.sectionTitle}>История матчей</h5>
          <div className={style.matchCardFlexTitles}>
            {MATCH_HEADERS.map((header) => (
              <span key={header} className={style.cardFlexTitle}>
                {header}
              </span>
            ))}
          </div>
          {matches?.items.map((match) => (
            <MatchCardFlex key={match.stats["Match Id"]} match={match} />
          ))}
        </div>
      )}
    </>
  );
};
