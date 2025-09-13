import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBrands = createAsyncThunk("brands/all", async() => {
    try {
       const res = await axios.get("/brands"); 
       return res.data;
    } catch (error) {
        console.log(error)
    }
})