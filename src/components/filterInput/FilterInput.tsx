import React from 'react'
import css from "./FilterInput.module.css"
import { Field } from 'formik';

interface FilterInputProps {
  name: string;
//   filter: string[];
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
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
