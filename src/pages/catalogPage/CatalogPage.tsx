import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCars } from '../../redux/cars/operations'
import { type AppDispatch } from '../../redux/store'
import CarsList from '../../components/carsList/CarsList'
import Filters from '../../components/filters/Filters'
import { getBrands } from '../../redux/filters/operations'

const CatalogPage = () => {
   const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(getAllCars())
    dispatch(getBrands())
  },[])
  return (
    <div className={`container`}>
      <Filters/>
      <CarsList/>
    </div>
  )
}

export default CatalogPage
