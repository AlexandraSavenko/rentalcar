import React from 'react'
import type { FilterSelectProps } from '../../utils/types'
import css from "./FilterInput.module.css"

const FilterInput: React.FC<FilterSelectProps> = ({name, filter, value, onChange}) => {
  return (
    <>
      <select
                  className={css.filtersInputCategory}
                  name={name}
                  value={value}
                  onChange={onChange}
                >
                  <option key="exp-categories" value="" disabled>
                    Choose a {name}
                  </option>
                  {filter.map((el, i) => (
                    <option key={i} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
    </>
  )
}

export default FilterInput
