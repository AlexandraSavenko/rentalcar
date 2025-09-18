import { createSlice } from "@reduxjs/toolkit";
import { carsInitialState } from "../../utils/initialStates";
import { getAllCars, getCarDetails } from "./operations";

export const slice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  reducers: {
    addToFav: (state, action) => {
      state.favorites = [...state.favorites, action.payload]
    },
    deleteFromFav: (state, action) => {
      state.favorites = state.favorites.filter(el => el != action.payload)
    },
    setNextPage: (state) => {
      console.log(typeof state.page)
      state.page = state.page += 1;
    },
    resetCars: (state) => {
      state.allCars = [];
      state.page = 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        const { cars, page, totalCars, totalPages } = action.payload;
        state.allCars = Number(page) === 1 ? cars : [...state.allCars, ...cars];
        state.page = Number(page);
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
export const {addToFav,deleteFromFav, setNextPage, resetCars} = slice.actions;
