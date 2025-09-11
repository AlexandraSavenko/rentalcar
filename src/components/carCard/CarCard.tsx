import React from 'react'
import type { carCardProps } from '../../utils/types'
import css from './CarCard.module.css'

const CarCard: React.FC<carCardProps> = ({car: {img, type, year, price}}) => {
  return (
    <div>
      <img src={img} alt={type} />
    </div>
  )
}

export default CarCard
