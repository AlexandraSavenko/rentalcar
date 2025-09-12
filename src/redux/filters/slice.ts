import { createSlice } from "@reduxjs/toolkit";
import { filtersInitialState } from "../../utils/initialStates";
import { getBrands } from "./operations";

export const slice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeBrandFilter: (state, action) => {
        state.thisBrand = action.payload
    },
    resetFilters: (state) => {
      state.thisBrand = "";
    // state.thisPrice = 0;
    // state.milesFrom = 0;
    // state.milesTo = 0;
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
                state.isLoading = false
        state.brands = action.payload;
      }).addCase(getBrands.rejected, (state) => {
        state.isLoading = false
      })
});

export default slice.reducer;
export const {changeBrandFilter, resetFilters} = slice.actions