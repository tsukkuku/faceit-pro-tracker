export { SubscribeList } from "./components/SubscribeList/SubscribeList";
export { Header } from "./components/Header/Header";

import { favoriteSlice } from "./slices/slices";

export const favoriteReducer = favoriteSlice.reducer;

export { checkSubscribe } from "./slices/selectors/selector";
export { subscribe } from "./slices/slices";
