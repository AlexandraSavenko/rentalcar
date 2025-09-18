import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBrands } from '../../redux/filters/selectors'
import FilterInput from '../filterInput/FilterInput'
import { changeBrandFilter,changePriceFilter, resetFilters } from '../../redux/filters/slice'
import { getBrands } from '../../redux/filters/operations'
import type { AppDispatch } from '../../redux/store'
import { resetCars } from '../../redux/cars/slice'




const Filters = () => {
  const [selectedBrand, setselectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectMilesFrom, setSelectMilesFrom] = useState("")
const brands = useSelector(selectBrands)
const prices = new Array(8).fill(0).map((_, i) => (i + 3) * 10).map(el => el.toString())
const dispatch = useDispatch<AppDispatch>()
useEffect(() => {
      dispatch(getBrands())
}, [])
const handleDispatchBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const filterValue = e.target.value;
  setselectedBrand(filterValue)
dispatch(changeBrandFilter(filterValue))
dispatch(resetCars())
}
const handleDispatchPrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const filterValue = e.target.value;
  setSelectedPrice(filterValue)
dispatch(changePriceFilter(filterValue))
dispatch(resetCars())
}

const handleResetFilters = () => {
  dispatch(resetFilters())
  setselectedBrand("")
  setSelectedPrice("")
}
  return (
    <>
      <FilterInput name="brand" filter={brands} value={selectedBrand} onChange={handleDispatchBrand}/>
      <FilterInput name="price" filter={prices} value={selectedPrice} onChange={handleDispatchPrice}/>
    <button onClick={handleResetFilters}>Reset Filters</button>
    </>
  )
}

export default Filters
