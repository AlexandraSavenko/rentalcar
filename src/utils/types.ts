export interface LayoutProps {
  children: React.ReactNode;
}

export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string[];
  mileage: number;
}
export interface carsPayload {
  cars: Car[];
  page: number;
  totalCars: number;
  totalPages: number;
}
export interface CarsInitialState {
  allCars: Car[];
  favorites: string[];
  carDetails: Car | null;
  page: number;
  totalCars: number;
  totalPages: number;
  isLoading: boolean;
  error: null;
}

export interface carCardProps {
  car: Car;
}

export interface BrandsInitialState {
  thisBrand: string;
  thisPrice: string;
  milesFrom: number;
  milesTo: number;
  brands: string[];
  isLoading: boolean;
}



export interface FilterSelectProps {
  name: string,
  options: string[]
}

export interface CarFilterParams {
  brand?: string;
  rentalPrice?: string;
  minMileage?: number;
  maxMileage?: number;
  limit?: string;
  page?: number;
}

export interface FromOrderValues {
  name: string;
  email: string;
  bookingDate: string,
  comment: string;
}

export interface FormFilterValues {
  brand: string,
  price: string,
  milesFrom: string,
  milesTo: string,
}

export interface FilterInputProps {
  name: string;
}

export interface FavButtonProps {
    id: string
}

export interface orderFromValues {
  name: string,
  email: string,
  bDate: string,
  comment: string
}