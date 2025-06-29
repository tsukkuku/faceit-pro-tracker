import { api } from "@/shared/api/api";
import type { Player } from "./types/player.types";
import type { PlayerStats } from "./types/stats.types";

export const getProfileApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPlayerInfo: build.query<Player, string>({
      query: (nickname) => ({
        url: "players",
        params: {
          nickname,
        },
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
  useLazyGetPlayerInfoQuery,
  useLazyGetPlayerMatchesQuery,
  useLazyGetPlayerStatsQuery,
} = getProfileApi;
