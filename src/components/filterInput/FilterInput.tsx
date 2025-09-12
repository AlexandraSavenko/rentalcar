import React from 'react'
import type { FilterInputProps } from '../../utils/types'
import css from "./FilterInput.module.css"

const FilterInput: React.FC<FilterInputProps> = ({name, filter, onChange}) => {
  return (
    <>
      <select
                  className={css.filtersInputCategory}
                  name={name}
                  value={name}
                  onChange={onChange(value)}
                >
                  <option key="exp-categories" value="" disabled>
                    Choose a {name}
                  </option>
                  {filter.map((el, i) => (
                    <option key={i} value={el[i]}>
                      {el[i]}
                    </option>
                  ))}
                </select>
    </>
  )
}

export default FilterInput
