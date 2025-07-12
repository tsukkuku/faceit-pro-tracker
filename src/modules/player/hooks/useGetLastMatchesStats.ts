import type { PlayerLastMatches } from "../api";

export const useGetLastMatchesStats = (data: PlayerLastMatches) => {
  const killsInt = data?.items.map((item) => ({
    kills: Number(item.stats.Kills),
    results: Number(item.stats.Result),
    ADR: Number(item.stats.ADR),
    KD: Number(item.stats["K/D Ratio"]),
    KR: Number(item.stats["K/R Ratio"]),
    Headshots: Number(item.stats["Headshots %"]),
  }));
  const kills = Math.round(
    killsInt?.reduce((acc, curr) => acc + curr.kills, 0) / 30
  );
  const ADR = (killsInt?.reduce((acc, curr) => acc + curr.ADR, 0) / 30).toFixed(
    2
  );
  const KD = (killsInt?.reduce((acc, curr) => acc + curr.KD, 0) / 30).toFixed(
    2
  );
  const KR = (killsInt?.reduce((acc, curr) => acc + curr.KR, 0) / 30).toFixed(
    2
  );
  const headshots = Math.round(
    killsInt?.reduce((acc, curr) => acc + curr.Headshots, 0) / 30
  );

  const winRate = (
    (100 *
      killsInt?.reduce((acc, curr) => {
        return curr.results === 1 ? acc + 1 : acc;
      }, 0)) /
    30
  ).toFixed();

  return { kills, ADR, KD, KR, headshots, winRate };
};
