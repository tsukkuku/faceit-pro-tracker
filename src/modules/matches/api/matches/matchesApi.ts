import { api } from "@/shared/api";
import type { Matches } from "../types/match.types";

export const matchesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPlayerMatchStats: build.query<Matches, { id: string; to: number }>({
      query: ({ id, to }) => ({
        url: `players/${id}/games/cs2/stats`,
        ...(to && { params: { to } }),
      }),
    }),
    getMatchInfo: build.query<void, string>({
      query: (match_id) => ({
        url: `matches/${match_id}`,
      }),
    }),
  }),
});

export const { useGetPlayerMatchStatsQuery, useGetMatchInfoQuery } = matchesApi;
