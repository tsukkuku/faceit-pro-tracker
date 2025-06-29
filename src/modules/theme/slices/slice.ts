import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../helpers/getLocalStorage";

const initialState = {
  mode: getLocalStorage(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";

      localStorage.setItem("theme", JSON.stringify(state.mode));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
