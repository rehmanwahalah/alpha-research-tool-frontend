import { createSlice } from "@reduxjs/toolkit";
import { EProject } from "../../enums/project.enums";

const initialState = {
  currentProject: null,
  filter: false,
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
      if (action.payload.key === EProject.MINEBCOUNT)
        state.minEbCOunt = action.payload.value;
      if (action.payload.key === EProject.MAXEBCOUNT)
        state.maxEbCOunt = action.payload.value;
      if (action.payload.key === EProject.MINFOLLOWERS)
        state.minFollowers = action.payload.value;
      if (action.payload.key === EProject.MAXFOLLOWERS)
        state.maxFollowers = action.payload.value;
      if (action.payload.key === EProject.MINTWEETS)
        state.minTweets = action.payload.value;
      if (action.payload.key === EProject.MAXTWEETS)
        state.maxTweets = action.payload.value;
      if (action.payload.key === EProject.MIN24HCHANGE)
        state.min24Change = action.payload.value;
      if (action.payload.key === EProject.MAX24HCHANGE)
        state.max24Change = action.payload.value;
      if (action.payload.key === EProject.MIN7DCHANGE)
        state.min7dChange = action.payload.value;
      if (action.payload.key === EProject.MAX7DCHANGE)
        state.max7dChange = action.payload.value;
    },
    applyFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearFilter: (state) => {
      state.minEbCOunt = 0;
      state.maxEbCOunt = 0;
      state.minFollowers = 0;
      state.maxFollowers = 0;
      state.minTweets = 0;
      state.maxTweets = 0;
      state.min24Change = 0;
      state.max24Change = 0;
      state.min7dChange = 0;
      state.max7dChange = 0;
      state.filter = !state.filter;
    },
  },
  extraReducers: {},
});

export const { reducer: projectReducer, actions: projectActions } = slice;