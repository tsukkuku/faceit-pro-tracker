import { useGetLastMatchesInfoQuery } from "@/modules/player/api";
import { type FC } from "react";
import { StatsCard } from "../StatsCard";
import { useGetLastMatchesStats } from "@/modules/player/hooks";
import style from "./LastMatchesStats.module.scss";

interface LastMatchesStatsProps {
  id: string;
}

export const LastMatchesStats: FC<LastMatchesStatsProps> = ({ id }) => {
  const { data, isLoading } = useGetLastMatchesInfoQuery(id);
  const { kills, winRate, KD, KR, ADR, headshots } = useGetLastMatchesStats(
    data!
  );

  if (isLoading) return;
  return (
    <div className={style.lastMatchesSection}>
      <h2>Статистика за последние 30 матчей</h2>
      <div className={style.lastMatchesContent}>
        <StatsCard value={kills} wrapper="Average Kills" />
        <StatsCard value={winRate} wrapper="Win Rate %" />
        <StatsCard value={KD} wrapper="K/D ratio" />
        <StatsCard value={KR} wrapper="K/R ratio" />
        <StatsCard value={ADR} wrapper="ADR" />
        <StatsCard value={headshots} wrapper="Headshots %" />
      </div>
    </div>
  );
};
