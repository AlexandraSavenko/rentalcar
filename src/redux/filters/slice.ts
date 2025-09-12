import { createSlice } from "@reduxjs/toolkit";
import { filtersInitialState } from "../../utils/initialStates";
import { getBrands } from "./operations";

export const slice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeBrandFilter: (state, action) => {
        state.thisBrand = action.payload
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
export const {changeBrandFilter} = slice.actions