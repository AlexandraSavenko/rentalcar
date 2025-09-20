import { createSlice } from "@reduxjs/toolkit";
import { filtersInitialState } from "../../utils/initialStates";
import { getBrands } from "./operations";

export const slice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setQueryFilters: (state, action) => {
      const { brand, price, milesFrom, milesTo } = action.payload;
      state.thisBrand = brand;
      state.thisPrice = price;
      state.milesTo = milesTo;
      state.milesFrom = milesFrom;
    },
    resetFilters: (state) => {
      state.thisBrand = "";
      state.thisPrice = "";
      state.milesTo = 0;
      state.milesFrom = 0;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state) => {
        state.isLoading = false;
      }),
});

export default slice.reducer;
export const { setQueryFilters, resetFilters } = slice.actions;
