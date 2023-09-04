import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
};

export const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState,
  reducers: {
    setIsActive: (state, {payload}) => {
      state.isActive = payload;
    },
  },
});

export const { setIsActive } = hamburgerSlice.actions;
export default hamburgerSlice.reducer;
