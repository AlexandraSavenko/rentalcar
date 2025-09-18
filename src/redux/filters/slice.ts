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
    changePriceFilter: (state, action) => {
      state.thisPrice = action.payload
      console.log(typeof action.payload)
    },
    resetFilters: (state) => {
      state.thisBrand = "";
    state.thisPrice = "";
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
export const {changeBrandFilter, changePriceFilter, resetFilters} = slice.actions