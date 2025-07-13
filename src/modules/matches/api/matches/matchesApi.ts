import { api } from "@/shared/api";
import type {
  Matches,
  MatchInfo,
  MatchStats,
  MatchStatsProps,
} from "../types/match.types";

export const matchesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPlayerMatchStats: build.query<Matches, MatchStatsProps>({
      query: ({ id, to }) => ({
        url: `players/${id}/games/cs2/stats`,
        params: {
          limit: 30,
          ...(to && { to }),
        },
      }),
    }),
    getMatchInfo: build.query<MatchInfo, string>({
      query: (match_id) => ({
        url: `matches/${match_id}`,
      }),
    }),
    getMatchStats: build.query<MatchStats, string>({
      query: (match_id) => ({
        url: `matches/${match_id}/stats`,
      }),
    }),
  }),
});

export const {
  useGetPlayerMatchStatsQuery,
  useGetMatchInfoQuery,
  useGetMatchStatsQuery,
} = matchesApi;
