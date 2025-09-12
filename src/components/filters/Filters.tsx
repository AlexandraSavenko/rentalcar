import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBrands } from '../../redux/filters/selectors'
import FilterInput from '../filterInput/FilterInput'
import { changeBrandFilter, resetFilters } from '../../redux/filters/slice'
import { getBrands } from '../../redux/filters/operations'
import type { AppDispatch } from '../../redux/store'



const Filters = () => {
  const [selectedBrand, setselectedBrand] = useState("");
const brands = useSelector(selectBrands)
const dispatch = useDispatch<AppDispatch>()

useEffect(() => {
      dispatch(getBrands())
}, [])
const handleDispatchBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const filterValue = e.target.value;
  setselectedBrand(filterValue)
dispatch(changeBrandFilter(filterValue))
}

const handleResetFilters = () => {
  dispatch(resetFilters())
  setselectedBrand("")
}
  return (
    <>
      <FilterInput name="brand" filter={brands} value={selectedBrand} onChange={handleDispatchBrand}/>
    <button onClick={handleResetFilters}>Reset Filters</button>
    </>
  )
}

export default Filters
