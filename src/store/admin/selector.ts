import { createSelector } from "@reduxjs/toolkit";

const selectDomain = (state: any) => state.admin;

export const selectAllUsers = createSelector(selectDomain, (admin) => admin.users);
