import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
export const getAllCars = createAsyncThunk("cars/all", async() => {
    try {
       const res = await axios.get("/cars"); 
       console.log(res)
    } catch (error) {
        console.log(error)
    }
    
})