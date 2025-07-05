import { api } from "@/shared/api";
import type { PlayerStats } from "../types/stats.types";
import type { Player } from "../types/player.types";

export const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPlayerInfo: build.query<Player, string>({
      query: (id) => ({
        url: `players/${id}`,
      }),
    }),
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

export const {
  useGetPlayerInfoQuery,
  useGetPlayerMatchesQuery,
  useGetPlayerStatsQuery,
} = profileApi;
