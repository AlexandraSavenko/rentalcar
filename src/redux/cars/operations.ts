import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type CarFilterParams, type carsPayload } from "../../utils/types";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

//it takes up to three type parameters(the third can optionally configure rejectWithValue): createAsyncThunk<Returned, ThunkArg, ThunkApiConfig>(...)
export const getAllCars = createAsyncThunk<carsPayload, CarFilterParams>(
  "cars/all",
  async (params, thunkAPI) => {
    try {
      const { brand, rentalPrice, minMileage, maxMileage, limit, page } =
        params;
      const paramsObj: Record<string, string> = {};
      if (page !== undefined) paramsObj.page = page.toString();
      if (brand) paramsObj.brand = brand;
      if (rentalPrice) paramsObj.rentalPrice = rentalPrice;
      if (minMileage) paramsObj.minMileage = minMileage;
      if (maxMileage) paramsObj.maxMileage = maxMileage;
      if (limit) paramsObj.limit = limit;
      const query = new URLSearchParams(paramsObj);
      const res = await axios.get(`/cars?${query}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCarDetails = createAsyncThunk(
  "cars/one",
  async (id: string, thunkAPI) => {
    try {
      const res = await axios.get(`/cars/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
