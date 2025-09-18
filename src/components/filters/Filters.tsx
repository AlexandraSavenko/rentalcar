import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBrands } from '../../redux/filters/selectors'
// import FilterInput from '../filterInput/FilterInput'
import { resetFilters, setQueryFilters } from '../../redux/filters/slice'
import { getBrands } from '../../redux/filters/operations'
import type { AppDispatch } from '../../redux/store'
// import { resetCars } from '../../redux/cars/slice'
import { Formik, Form } from 'formik'
import { getAllCars } from '../../redux/cars/operations'
import FilterSelect from '../filterSelect/FilterSelect'
import { filterInitValues } from '../../utils/initialStates'




const Filters = () => {
  // const [selectedBrand, setselectedBrand] = useState("");
  // const [selectedPrice, setSelectedPrice] = useState("");
  // const [selectMilesFrom, setSelectMilesFrom] = useState("")
const brands = useSelector(selectBrands)
const prices = new Array(8).fill(0).map((_, i) => (i + 3) * 10).map(el => el.toString())
const dispatch = useDispatch<AppDispatch>()
useEffect(() => {
      dispatch(getBrands())
}, [])
// const handleDispatchBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
//   const filterValue = e.target.value;
//   setselectedBrand(filterValue)
// dispatch(changeBrandFilter(filterValue))
// dispatch(resetCars())
// }
// const handleDispatchPrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
//   const filterValue = e.target.value;
//   setSelectedPrice(filterValue)
// dispatch(changePriceFilter(filterValue))
// dispatch(resetCars())
// }



const handleSubmitFilters = (values) => {
  console.log(values)
  dispatch(setQueryFilters(values))
// dispatch(getAllCars({...values, page: 1}))
}
const handleResetFilters = () => {
  dispatch(resetFilters())
  
  // setselectedBrand("")
  // setSelectedPrice("")
}
  return (
    <div>
      <Formik initialValues={filterInitValues} onSubmit={handleSubmitFilters}>
<Form>
  {/* <FilterInput name="brand" filter={brands} value={selectedBrand} onChange={handleDispatchBrand}/>
      <FilterInput name="price" filter={prices} value={selectedPrice} onChange={handleDispatchPrice}/> */}
      <FilterSelect name="brand" options={brands} />
      <FilterSelect name="price" options={prices} />
      
<button type='submit'>Search</button>
</Form>
      </Formik>
      
    <button onClick={handleResetFilters}>Reset Filters</button>
    </div>
  )
}

export default Filters
