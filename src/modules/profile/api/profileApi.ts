import { api } from "@/shared/api/api";

export const getProfileApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPlayerInfo: build.query<void, void>({
      query: () => ({
        url: "players",
        params: {
          nickname: "m0NESY",
        },
      }),
    }),
  }),
});

export const { useGetPlayerInfoQuery } = getProfileApi;
