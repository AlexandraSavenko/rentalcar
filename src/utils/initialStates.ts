import type { CarsInitialState } from "./types";

export const carsInitialState: CarsInitialState = {
    allCars: [],
    page: 1,
    totalCars: 1,
    totalPages: 1,
    isLoading: false,
    error: null
}