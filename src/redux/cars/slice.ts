import { createSlice } from "@reduxjs/toolkit";
import { carsInitialState } from "../../utils/initialStates";
import { getAllCars } from "./operations";

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
        console.log(action.payload);
        const { cars, page, totalCars, totalPages } = action.payload;
        state.allCars = cars;
        state.page = page;
        state.totalCars = totalCars;
        state.totalPages = totalPages;
      })
      .addCase(getAllCars.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default slice.reducer;
