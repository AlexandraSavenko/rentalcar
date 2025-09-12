import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBrands } from '../../redux/filters/selectors'
import FilterInput from '../filterInput/FilterInput'
import { changeBrandFilter } from '../../redux/filters/slice'


const Filters = () => {
  const [selectedBrand, setselectedBrand] = useState("");
const brands = useSelector(selectBrands)
const dispatch = useDispatch()

const handleDispatchBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const filterValue = e.target.value;
  setselectedBrand(filterValue)
dispatch(changeBrandFilter(filterValue))
}
  return (
    <>
      <FilterInput name="brand" filter={brands} value={selectedBrand} onChange={handleDispatchBrand}/>
    </>
  )
}

export default Filters
