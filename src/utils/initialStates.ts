import type { BrandsInitialState, CarsInitialState, FormFilterValues, FromOrderValues } from "./types";

export const carsInitialState: CarsInitialState = {
    allCars: [],
    favorites: [],
    carDetails: null,
    page: 1,
    totalCars: 1,
    totalPages: 1,
    isLoading: false,
    error: null
}

export const filtersInitialState: BrandsInitialState = {
    thisBrand: "",
    thisPrice: "",
    milesFrom: 0,
    milesTo: 0,
    brands: [],
    isLoading: false,
    
}

export const formValues: FromOrderValues = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

export const filterInitValues: FormFilterValues = {
  brand: "",
  price: "",
  milesFrom: "",
  milesTo: "",
}

