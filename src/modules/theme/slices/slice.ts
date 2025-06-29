import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "@/modules/theme";

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
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
