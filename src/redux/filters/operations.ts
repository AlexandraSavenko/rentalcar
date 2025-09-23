import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBrands = createAsyncThunk("brands/all", async(_, thunkAPI) => {
    try {
       const res = await axios.get("/brands"); 
       return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})