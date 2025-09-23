import type { RootState } from "../store";

export const selectBrands = (state: RootState) => state.filters.brands;
export const selectThisBrand = (state: RootState) => state.filters.thisBrand;
export const selectThisPrice = (state: RootState) => state.filters.thisPrice;
export const selectMilesFrom = (state: RootState) => state.filters.milesFrom;
export const selectMilesTo = (state: RootState) => state.filters.milesTo;
export const selectFilterLoading = (state: RootState) => state.filters.isLoading;
