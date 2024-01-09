// scrollSlice.js

import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    isVisibleFooter: false,
    isVisibleServices: false,
  },
  reducers: {
    setScrollVisibleFooter: (state, action) => {
      state.isVisibleFooter = action.payload;
    },
    setScrollVisibleServices: (state, action) => {
      state.isVisibleServices = action.payload;
    },
  },
});

export const { setScrollVisibleFooter, setScrollVisibleServices } =
  scrollSlice.actions;
export const selectScrollVisibleFooter = (state) =>
  state.scroll.isVisibleFooter;
export const selectScrollVisibleServices = (state) =>
  state.scroll.isVisibleServices;
export default scrollSlice.reducer;
