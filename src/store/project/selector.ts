import { createSelector } from "@reduxjs/toolkit";

const selectDomain = (state: any) => state.project;

export const selectCurrentProject = createSelector(selectDomain, (project) => project.currentProject);
export const selectApplyFilter = createSelector(selectDomain, (project) => project.filter);
export const selectMinEbCOunt = createSelector(selectDomain, (project) => project.minEbCOunt);
export const selectMaxEbCOunt = createSelector(selectDomain, (project) => project.maxEbCOunt);
export const selectMinFollowers = createSelector(selectDomain, (project) => project.minFollowers);
export const selectMaxFollowers = createSelector(selectDomain, (project) => project.maxFollowers);
export const selectMinTweets = createSelector(selectDomain, (project) => project.minTweets);
export const selectMaxTweets = createSelector(selectDomain, (project) => project.maxTweets);
export const selectMin24Change = createSelector(selectDomain, (project) => project.min24Change);
export const selectMax24Change = createSelector(selectDomain, (project) => project.max24Change);
export const selectMin7dChange = createSelector(selectDomain, (project) => project.min7dChange);
export const selectMax7dChange = createSelector(selectDomain, (project) => project.max7dChange);
