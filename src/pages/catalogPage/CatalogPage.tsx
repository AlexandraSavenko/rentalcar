import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../../redux/cars/operations'
import { type AppDispatch } from '../../redux/store'
import CarsList from '../../components/carsList/CarsList'
import Filters from '../../components/filters/Filters'

import { selectMilesFrom, selectMilesTo, selectThisBrand, selectThisPrice } from '../../redux/filters/selectors'
import { selectPage, selectTotalCars } from '../../redux/cars/selectors'
import Button from '../../components/button/Button'
import css from "./CatalogPage.module.css"

const CatalogPage = () => {
   const dispatch = useDispatch<AppDispatch>()
  const brand = useSelector(selectThisBrand)
  const rentalPrice = useSelector(selectThisPrice)
  const from = useSelector(selectMilesFrom)
  const to = useSelector(selectMilesTo)
const page = useSelector(selectPage)
const totalCars = useSelector(selectTotalCars)
   useEffect(() => {
    dispatch(getAllCars({ brand, rentalPrice, page, minMileage: from, maxMileage: to }))
  },[dispatch, brand, rentalPrice, page, from, to])
  return (
    <div className={`${css.catalogWrap} container`}>
      <Filters/>
      <p>Total cars: {totalCars}</p>
      <CarsList/>
      <Button/>
    </div>
  )
}

export default CatalogPage
