import { toSlice } from "./slices/slice";

export { MatchList } from "./components/MatchList/MatchList";
export { MatchInfo } from "./components/MatchInfo/MatchInfo";
export { ScoreBoard } from "./components/ScoreBoard/ScoreBoard";

export const toReducer = toSlice.reducer;
