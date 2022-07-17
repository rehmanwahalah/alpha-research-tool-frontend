import { createSelector } from "@reduxjs/toolkit";

const selectDomain = (state: any) => state.project;

export const selectCurrentProject = createSelector(selectDomain, (project) => project.currentProject);
