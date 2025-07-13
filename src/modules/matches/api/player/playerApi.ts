import { api } from "@/shared/api";
import type {
  PlayerInMatch,
  PlayerPosition,
  PositionProps,
} from "../types/player.types";

export const playerApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPlayerInMatchInfo: build.query<PlayerInMatch, string>({
      query: (id) => ({
        url: `players/${id}`,
      }),
    }),
    getPlayerPosition: build.query<PlayerPosition, PositionProps>({
      query: ({ id, region }) => ({
        url: `rankings/games/cs2/regions/${region}/players/${id}`,
        params: {
          limit: 1,
        },
      }),
    }),
  }),
});

export const { useGetPlayerInMatchInfoQuery, useGetPlayerPositionQuery } =
  playerApi;
