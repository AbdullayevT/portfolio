import { configureStore } from "@reduxjs/toolkit";
import hamburger from "../features/hamburger";
import general from "../features/general";

export const store = configureStore({
  reducer: {
    hamburger,
    general
  },
});
