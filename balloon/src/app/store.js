import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    category: categorySlice,
  }
});