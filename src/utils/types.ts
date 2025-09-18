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
  minMileage?: string;
  maxMileage?: string;
  limit?: string;
  page?: number;
}

export interface FromValues {
  name: string;
  email: string;
  bookingDate: string,
  comment: string;
}