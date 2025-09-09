import { createSlice } from "@reduxjs/toolkit";
import { carsInitialState } from "../../utils/initialStates";






export const slice = createSlice({
    name: "cars",
    initialState: carsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
    }
})