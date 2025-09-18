
import type { RootState } from "../store";

export const selectAllCars = (state: RootState) => state.cars.allCars;
export const selectCarDetails = (state: RootState) => state.cars.carDetails;
export const selectLoading = (state: RootState) => state.cars.isLoading;
export const selectError = (state: RootState) => state.cars.error;
export const selectFavorits = (state: RootState) => state.cars.favorites;
export const selectPage = (state: RootState) => state.cars.page;
export const selectTotalPages = (state: RootState) => state.cars.totalPages;
export const selectTotalCars = (state: RootState) => state.cars.totalCars;
