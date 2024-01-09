// store.js

import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "../slice/scrollSlice";

const store = configureStore({
  reducer: {
    scroll: scrollReducer,
  },
});

export default store;
