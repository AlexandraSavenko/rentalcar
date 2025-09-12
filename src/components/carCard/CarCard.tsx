import React from 'react'
import type { carCardProps } from '../../utils/types'
import css from './CarCard.module.css'
import { Link } from 'react-router-dom'

const CarCard: React.FC<carCardProps> = ({car: {img, type, year, model, brand, rentalPrice, id, rentalCompany, mileage}}) => {
  return (
    <div className={css.cardWrap}>
      <div className={css.imgWrap}>
      <img src={img} alt={type} /></div>
      <div className={css.lone}>
      <p className={css.brand}>{brand} <span>{model}</span>, <span>{year}</span> </p>
  <p className={css.price}>{`$${rentalPrice}`}</p>
</div>
<div className={css.ltwo}>
<p className={css.company}>{rentalCompany}</p>
</div>

<div className={css.lthree}>
<p className={css.type}>{type}</p>
<p className={css.miles}>{mileage} km</p></div>
      <Link className={css.link} to={`/catalog/:${id}`}>Read more</Link>
    </div>
  )
}

export default CarCard
