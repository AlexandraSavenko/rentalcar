import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../../redux/cars/operations'
import { type AppDispatch } from '../../redux/store'
import CarsList from '../../components/carsList/CarsList'
import Filters from '../../components/filters/Filters'

import { selectThisBrand, selectThisPrice } from '../../redux/filters/selectors'

const CatalogPage = () => {
   const dispatch = useDispatch<AppDispatch>()
  const brand = useSelector(selectThisBrand)
  const rentalPrice = useSelector(selectThisPrice)
  // console.log(rentalPrice)
   useEffect(() => {
    dispatch(getAllCars({ brand, rentalPrice }))
  },[dispatch, brand, rentalPrice])
  return (
    <div className={`container`}>
      <Filters/>
      <CarsList/>
    </div>
  )
}

export default CatalogPage
