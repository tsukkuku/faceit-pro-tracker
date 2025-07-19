import type { RootState } from "@/app/store/store";

export const checkSubscribe = (id: string) => (state: RootState) =>
  state.favorite.users.find((player) => player.player_id === id);
