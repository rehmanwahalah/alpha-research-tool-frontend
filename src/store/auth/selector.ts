import { createSelector } from "@reduxjs/toolkit";

const selectDomain = (state: any) => state.auth;

export const selectUser = createSelector(selectDomain, (auth) => auth.user);
export const selectAccessToken = createSelector(
  selectDomain,
  (auth) => auth.accessToken
);
