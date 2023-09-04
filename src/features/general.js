import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  getContact: false,
  getAbout: false,
  getWork: false,
  getPortfolio: false,
  isLoading: true,
  isLoadingSubmit: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setGetContact: (state, { payload }) => {
      state.getContact = payload;
    },
    setGetAbout: (state, { payload }) => {
      state.getAbout = payload;
    },
    setGetWork: (state, { payload }) => {
      state.getWork = payload;
    },
    setGetPortfolio: (state, { payload }) => {
      state.getPortfolio = payload;
    },
    setIsLoading: (state, {payload}) => {
      state.isLoading = payload
    },
    setIsLoadingSubmit: (state, {payload}) => {
      state.isLoadingSubmit = payload
    }
  },
});

export const { setGetContact, setGetAbout, setGetPortfolio, setGetWork, setIsLoading, setIsLoadingSubmit } =
  generalSlice.actions;
export default generalSlice.reducer;
