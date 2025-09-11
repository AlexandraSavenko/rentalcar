export interface LayoutProps {
  children: React.ReactNode
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

export interface CarsInitialState {
    allCars: Car[],
    page: number,
    totalCars: number,
    totalPages: number,
    isLoading: boolean,
    error: null
}

export interface carCardProps {
  car: Car
}