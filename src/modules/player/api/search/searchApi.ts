import { api } from "@/shared/api";
import type { ApiResponse, Player } from "../types/player.types";

export const searchApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPlayerID: build.query<Player, string>({
      query: (nickname) => ({
        url: "players",
        params: {
          nickname,
        },
      }),
    }),
    getPlayerRanked: build.query<ApiResponse, void>({
      query: () => ({
        url: `rankings/games/cs2/regions/EU`,
        params: {
          limit: 30,
        },
      }),
    }),
  }),
});

export const { useLazyGetPlayerIDQuery, useGetPlayerRankedQuery } = searchApi;
