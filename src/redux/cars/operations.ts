import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type Car } from "../../utils/types";
import type { CarFilterParams } from "../../utils/initialStates";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

//it takes up to three type parameters(the third can optionally configure rejectWithValue): createAsyncThunk<Returned, ThunkArg, ThunkApiConfig>(...)
export const getAllCars = createAsyncThunk<Car[], CarFilterParams>("cars/all", async(params, thunkAPI) => {
    try {
        const {brand, rentalPrice, minMileage, maxMileage, limit, page} = params;
        const query = new URLSearchParams({
            ...(brand && {brand}),
            ...(rentalPrice && {rentalPrice}),
            ...(minMileage && {minMileage}),
            ...(maxMileage && {maxMileage}),
            ...(limit && {limit}),
            ...(page && {page}),
        })
       const res = await axios.get(`/cars?${query}`); 
    //    console.log(res)
       return res.data as Car[]
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error)
    }
    
})