import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  to: 0,
};

export const toSlice = createSlice({
  name: "to",
  initialState,
  reducers: {
    setTo: (state, action: PayloadAction<number>) => {
      state.to = action.payload;
    },
    resetTo: (state) => {
      state.to = 0
    }
  },
});

export const { setTo, resetTo } = toSlice.actions;
