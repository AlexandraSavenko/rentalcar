import { Field } from 'formik'
import React from 'react'
import css from "./FilterSelect.module.css"
import type { FilterSelectProps } from '../../utils/types'

const FilterSelect: React.FC<FilterSelectProps> = ({name, options}) => {
  if(!options){
    return <p>Sorry, you can't use filters at the moment</p>
  }
  return (
    <Field as="select" name={name} className={css.filterSelect}>
      <option value="" disabled>
Choose a {name}
      </option>
      {
        options.map((el, i) => (
            <option className={css.selectOption} key={i} value={el}>{el}</option>
        ))
      }
    </Field>
  )
}

export default FilterSelect
