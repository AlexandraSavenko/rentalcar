import React from 'react'
import CarCard from '../carCard/CarCard'
import { useSelector } from 'react-redux'
import { selectAllCars } from '../../redux/cars/selectors'

const CarsList = () => {
    const allCars = useSelector(selectAllCars)
    if(allCars.length === 0){
        return <p>Sorry, something </p>
    }
  return (
    <ul>
      {
        allCars.map(car => <li key={car.id}><CarCard car={car}/></li> )
      }
    </ul>
  )
}

export default CarsList
