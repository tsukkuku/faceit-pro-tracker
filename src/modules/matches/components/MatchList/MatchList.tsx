import { useParams } from "react-router-dom";
import { useGetPlayerMatchStatsQuery } from "@/modules/matches/api";
import { MATCH_HEADERS } from "@/modules/matches/constants";
import { MatchCardFlex } from "../MatchCardFlex";
import { ClipLoader } from "react-spinners";
import { useAppSelector } from "@/shared/hooks";
import { usePagination } from "@/modules/matches/hooks";
import style from "./MatchList.module.scss";

export const MatchList = () => {
  const { id = "" } = useParams();
  const { to } = useAppSelector((state) => state.to);
  const {
    data: matches,
    isLoading,
    isFetching,
  } = useGetPlayerMatchStatsQuery({ id, to });

  const { match, ref, hasMore } = usePagination(matches!);

  return (
    <>
      {!isLoading && (
        <div className={style.matchesSection}>
          <h5 className={style.sectionTitle}>История матчей</h5>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className={style.cardFlexFirstTitle}>Дата</span>
            <div className={style.matchCardFlexTitles}>
              {MATCH_HEADERS.map((header) => (
                <span key={header} className={style.cardFlexTitle}>
                  {header}
                </span>
              ))}
            </div>
          </div>
          {match.map((match) => (
            <MatchCardFlex key={match.stats["Match Id"]} match={match} />
          ))}
          <div
            ref={ref}
            style={{ width: "100%", height: "20px", textAlign: "center" }}
          >
            {isFetching && <ClipLoader color="var(--text-color)" />}
            {!hasMore && <p>Матчей больше нет :(</p>}
          </div>
        </div>
      )}
    </>
  );
};
