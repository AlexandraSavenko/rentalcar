import { createSlice } from "@reduxjs/toolkit";
import { carsInitialState } from "../../utils/initialStates";
import { getAllCars } from "./operations";






export const slice = createSlice({
    name: "cars",
    initialState: carsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCars.pending, (state) => {
            state.isLoading = true
        }).addCase(getAllCars.fulfilled, (state, action) => {
            state.isLoading = false;
            // state.allCars = action.payload;
        }).addCase(getAllCars.rejected, (state) => {
            state.isLoading = false;
        })
    }
});

export default slice.reducer;