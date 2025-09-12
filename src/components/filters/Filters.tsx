import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBrands } from '../../redux/filters/selectors'
import FilterInput from '../filterInput/FilterInput'
import { changeBrandFilter } from '../../redux/filters/slice'


const Filters = () => {
const brands = useSelector(selectBrands)
const dispatch = useDispatch()

const handleDispatchBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
  const filterValue = e.target.value
dispatch(changeBrandFilter(filterValue))
}
  return (
    <>
      <FilterInput name={"brand"} filter={brands} onChange={handleDispatchBrand}/>
    </>
  )
}

export default Filters
