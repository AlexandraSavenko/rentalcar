import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../../redux/cars/operations'
import { type AppDispatch } from '../../redux/store'
import CarsList from '../../components/carsList/CarsList'
import Filters from '../../components/filters/Filters'

import { selectThisBrand } from '../../redux/filters/selectors'

const CatalogPage = () => {
   const dispatch = useDispatch<AppDispatch>()
  const brand = useSelector(selectThisBrand)
   useEffect(() => {
    dispatch(getAllCars({ brand }))
  },[dispatch, brand])
  return (
    <div className={`container`}>
      <Filters/>
      <CarsList/>
    </div>
  )
}

export default CatalogPage
