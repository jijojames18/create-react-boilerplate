import { createSelector } from "reselect";

export const selectItem = (state) => state.items;

export const selectItems = createSelector([selectItem], (state) => state.items);
