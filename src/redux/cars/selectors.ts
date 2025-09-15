
import type { RootState } from "../store";

export const selectAllCars = (state: RootState) => state.cars.allCars;
export const selectCarDetails = (state: RootState) => state.cars.carDetails;
export const selectLoading = (state: RootState) => state.cars.isLoading;
export const selectError = (state: RootState) => state.cars.error;
