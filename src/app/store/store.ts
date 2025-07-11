import { api } from "@/shared/api";
import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "@/modules/theme";
import { toReducer } from "@/modules/matches";

export const store = configureStore({
  reducer: {
    to: toReducer,
    theme: themeReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
