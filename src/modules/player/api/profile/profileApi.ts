import { api } from "@/shared/api";
import type { PlayerStats } from "../types/stats.types";

export const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPlayerMatches: build.query<void, string>({
      query: (id) => ({
        url: `players/${id}/history`,
      }),
    }),
    getPlayerStats: build.query<PlayerStats, string>({
      query: (id) => ({
        url: `players/${id}/stats/cs2`,
      }),
    }),
  }),
});

export const { useGetPlayerMatchesQuery, useGetPlayerStatsQuery } = profileApi;
