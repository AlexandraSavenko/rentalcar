import type { BrandsInitialState, CarsInitialState } from "./types";

export const carsInitialState: CarsInitialState = {
    allCars: [],
    page: 1,
    totalCars: 1,
    totalPages: 1,
    isLoading: false,
    error: null
}

export const filtersInitialState: BrandsInitialState = {
    thisBrand: "",
    thisPrice: 0,
    milesFrom: 0,
    milesTo: 0,
    brands: [],
    isLoading: false,
    
}

export interface CarFilterParams {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
  limit?: string;
  page?: string;
}