import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SubscribeState } from "../types";
import type { Player } from "@/modules/player/api";
import { getLocalStorage } from "@/shared/helpers";

const initialState: SubscribeState = {
  users: getLocalStorage("players", []),
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    subscribe: (state, action: PayloadAction<Player>) => {
      const findPlayer = state.users.find(
        (player) => player.player_id === action.payload.player_id
      );

      if (!findPlayer) {
        state.users.push(action.payload);
      } else {
        state.users = state.users.filter(
          (player) => player.player_id !== action.payload.player_id
        );
        findPlayer.subscribe = !findPlayer.subscribe;
      }
      localStorage.setItem("players", JSON.stringify(state.users));
    },
  },
});

export const { subscribe } = favoriteSlice.actions;
