import React from 'react'
import type { carCardProps } from '../../utils/types'
import css from './CarCard.module.css'
import { Link } from 'react-router-dom'

const CarCard: React.FC<carCardProps> = ({car: {img, type, year, model, brand, rentalPrice, id, rentalCompany, mileage}}) => {
  return (
    <div>
      <div className={css.imgWrap}>
      <img src={img} alt={type} /></div>
      <p>{brand} <span>{model}</span> <span>{year}</span> </p>
<p>{`$${rentalPrice}`}</p>
<p>{rentalCompany}</p>
<p>{type}</p>
<p>{mileage}</p>
      <Link to={`/catalog/:${id}`}>Learn more</Link>
    </div>
  )
}

export default CarCard
