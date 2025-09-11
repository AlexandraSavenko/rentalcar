import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCars } from '../../redux/cars/operations'
import { type AppDispatch } from '../../redux/store'
import CarsList from '../../components/carsList/CarsList'

const CatalogPage = () => {
   const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(getAllCars())
  },[])
  return (
    <div>
      <CarsList/>
    </div>
  )
}

export default CatalogPage
