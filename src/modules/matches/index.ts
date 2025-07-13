import { toSlice } from "./slices/slice";

export { MatchList } from "./components/MatchList/MatchList";
export { MatchInfo } from "./components/MatchInfo/MatchInfo";

export const toReducer = toSlice.reducer;
