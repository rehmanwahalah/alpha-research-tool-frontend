import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentProject: null,
  minEbCOunt: 0,
  maxEbCOunt: 0,
  minFollowers: 0,
  maxFollowers: 0,
  minTweets: 0,
  maxTweets: 0,
  min24Change: 0,
  max24Change: 0,
  min7dChange: 0,
  max7dChange: 0,
};

const slice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    currentProjectDetails: (state, action) => {
      state.currentProject = action.payload;
    },
    updateFilter: (state, action) => {
      // if(action.payload.key === "")
      state.currentProject = action.payload;
    },
  },
  extraReducers: {},
});

export const { reducer: projectReducer, actions: projectActions } = slice;
