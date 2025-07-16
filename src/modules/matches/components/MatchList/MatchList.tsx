import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetPlayerMatchStatsQuery } from "@/modules/matches/api";
import { useAppSelector } from "@/shared/hooks";
import { usePagination } from "@/modules/matches/hooks";
import { SwitchButton } from "./SwitchButton";
import { FlexVariant } from "./FlexVariant";
import { GridVariant } from "./GridVariant";
import style from "./MatchList.module.scss";

export const MatchList = () => {
  const { id = "" } = useParams();
  const { to } = useAppSelector((state) => state.to);
  const { data: matches, isFetching } = useGetPlayerMatchStatsQuery({ id, to });
  const [isFlex, setIsFlex] = useState<boolean>(true);

  const { match, ref, hasMore } = usePagination(matches!);

  if (!match.length) return;

  return (
    <>
      <div className={style.playerMatchesSection}>
        <h5 className={style.sectionTitle}>История матчей</h5>
        <SwitchButton isFlex={isFlex} setIsFlex={setIsFlex} />
      </div>
      {isFlex ? (
        <FlexVariant
          match={match}
          ref={ref}
          isFetching={isFetching}
          hasMore={hasMore}
        />
      ) : (
        <GridVariant
          match={match}
          ref={ref}
          isFetching={isFetching}
          hasMore={hasMore}
        />
      )}
    </>
  );
};
