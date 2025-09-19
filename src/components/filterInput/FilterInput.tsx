import React from 'react'
import css from "./FilterInput.module.css"
import { Field } from 'formik';
import type { FilterInputProps } from '../../utils/types';


const FilterInput: React.FC<FilterInputProps> = ({name}) => {
    const placeholder = name === "milesTo" ? "To" : "From"
  return (
    <div className={css.inputWrap}>
    <Field id={name} as="input" name={name} className={`${css.filterMiles} ${name === "milesTo" ? css.to : css.from}`}/>
    <label htmlFor={name}>{placeholder}</label>
</div>
  )
}

export default FilterInput
