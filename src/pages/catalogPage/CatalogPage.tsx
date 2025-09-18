import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../../redux/cars/operations'
import { type AppDispatch } from '../../redux/store'
import CarsList from '../../components/carsList/CarsList'
import Filters from '../../components/filters/Filters'

import { selectThisBrand, selectThisPrice } from '../../redux/filters/selectors'
import { selectPage, selectTotalCars } from '../../redux/cars/selectors'
import Button from '../../components/button/Button'

const CatalogPage = () => {
   const dispatch = useDispatch<AppDispatch>()
  const brand = useSelector(selectThisBrand)
  const rentalPrice = useSelector(selectThisPrice)
const page = useSelector(selectPage)
const totalCars = useSelector(selectTotalCars)
  console.log(rentalPrice)
   useEffect(() => {
    dispatch(getAllCars({ brand, rentalPrice, page  }))
  },[dispatch, brand, rentalPrice, page])
  return (
    <div className={`container`}>
      <Filters/>
      <p>{totalCars}</p>
      {/* <CarsList/> */}
      <Button/>
    </div>
  )
}

export default CatalogPage
