import { themeSlice } from "./slices/slice";

export { getLocalStorage } from "./helpers/getLocalStorage";
export { toggleTheme } from "./slices/slice";
export { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
export { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";
export const themeReducer = themeSlice.reducer;
