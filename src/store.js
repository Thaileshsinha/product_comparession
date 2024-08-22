import { configureStore } from "@reduxjs/toolkit";
import detailsSlice from "./redux/detailsSlice";

export const store = configureStore({
  reducer: {
    details: detailsSlice,
  },
});
