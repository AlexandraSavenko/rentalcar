import React from 'react'
import CarCard from '../carCard/CarCard'
import { useSelector } from 'react-redux'
import { selectAllCars } from '../../redux/cars/selectors';
import css from "./CarsList.module.css"

const CarsList = () => {
    const allCars = useSelector(selectAllCars)
    if(allCars.length === 0){
        return <p>Sorry, something </p>
    }
  return (
    <ul className={css.list}>
      {
        allCars.map(car => <li key={car.id}><CarCard car={car}/></li> )
      }
    </ul>
  )
}

export default CarsList
