import { api } from "@/shared/api";
import type { PlayerStats } from "../types/stats.types";
import type {
  Player,
  PlayerBan,
  PlayerLastMatches,
  PlayerRanked,
  PlayerRankedPosition,
} from "../types/player.types";

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
    getPlayerBans: build.query<PlayerBan, string>({
      query: (id) => ({
        url: `players/${id}/bans`,
      }),
    }),
    getPlayerRankedRegionPosition: build.query<
      PlayerRanked,
      PlayerRankedPosition
    >({
      query: ({ id, region }) => ({
        url: `rankings/games/cs2/regions/${region}/players/${id}`,
        params: {
          limit: 1,
        },
      }),
    }),
    getPlayerRankedCountryPosition: build.query<
      PlayerRanked,
      PlayerRankedPosition
    >({
      query: ({ id, country, region }) => ({
        url: `rankings/games/cs2/regions/${region}/players/${id}`,
        params: {
          country,
          limit: 1,
        },
      }),
    }),
    getLastMatchesInfo: build.query<PlayerLastMatches, string>({
      query: (id) => ({
        url: `players/${id}/games/cs2/stats`,
        params: {
          limit: 30,
        },
      }),
    }),
  }),
});

export const {
  useGetPlayerInfoQuery,
  useGetPlayerStatsQuery,
  useGetPlayerBansQuery,
  useGetPlayerRankedRegionPositionQuery,
  useGetPlayerRankedCountryPositionQuery,
  useGetLastMatchesInfoQuery,
} = profileApi;
