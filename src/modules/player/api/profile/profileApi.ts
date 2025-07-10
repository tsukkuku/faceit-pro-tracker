import { api } from "@/shared/api";
import type { PlayerStats } from "../types/stats.types";
import type { Player, PlayerRanked } from "../types/player.types";

export const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPlayerInfo: build.query<Player, string>({
      query: (id) => ({
        url: `players/${id}`,
      }),
    }),
    getPlayerStats: build.query<PlayerStats, string>({
      query: (id) => ({
        url: `players/${id}/stats/cs2`,
      }),
    }),
    getPlayerRankedPosition: build.query<PlayerRanked, string>({
      query: (id) => ({
        url: `rankings/games/cs2/regions/EU/players/${id}`,
      }),
    }),
  }),
});

export const {
  useGetPlayerInfoQuery,
  useGetPlayerStatsQuery,
  useGetPlayerRankedPositionQuery,
} = profileApi;
