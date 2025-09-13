import { createSlice } from "@reduxjs/toolkit";
import { carsInitialState } from "../../utils/initialStates";
import { getAllCars, getCarDetails } from "./operations";

export const slice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        const { cars, page, totalCars, totalPages } = action.payload;
        state.allCars = cars;
        state.page = page;
        state.totalCars = totalCars;
        state.totalPages = totalPages;
      })
      .addCase(getAllCars.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getCarDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCarDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carDetails = action.payload;
      }).addCase(getCarDetails.rejected, (state) => {
        state.isLoading = false;
      })
  },
});

export default slice.reducer;
