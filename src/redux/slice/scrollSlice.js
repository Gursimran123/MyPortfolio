// scrollSlice.js

import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    isVisibleFooter: false,
    isVisibleServices: false,
    isVisibleContactForm:false,
    isVisibleAbout:false,
  },
  reducers: {
    setScrollVisibleFooter: (state, action) => {
      state.isVisibleFooter = action.payload;
    },
    setScrollVisibleServices: (state, action) => {
      state.isVisibleServices = action.payload;
    },
    setScrollVisibleContactForm: (state,action)=>{
      state.isVisibleContactForm=action.payload;
    },
    setScrollVisibleAbout: (state,action)=>{
      state.isVisibleAbout=action.payload;
    }
  },
});

export const { setScrollVisibleFooter, setScrollVisibleServices, setScrollVisibleContactForm, setScrollVisibleAbout} =
  scrollSlice.actions;
export const selectScrollVisibleFooter = (state) =>
  state.scroll.isVisibleFooter;
export const selectScrollVisibleServices = (state) =>
  state.scroll.isVisibleServices;
export const selectScrollVisibleContactForm = (state) =>
  state.scroll.isVisibleContactForm;
export const selectScrollVisibleAbout = (state) =>
  state.scroll.isVisibleAbout;
export default scrollSlice.reducer;
