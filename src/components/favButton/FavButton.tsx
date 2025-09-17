import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorits } from '../../redux/cars/selectors';
import { addToFav, deleteFromFav } from '../../redux/cars/slice';
import css from "./FavButton.module.css"

interface FavButtonProps {
    id: string
}
const FavButton: React.FC<FavButtonProps> = ({id}) => {
    const dispatch = useDispatch()
  const favorites = useSelector(selectFavorits)
  const isFav = favorites.find(el => el === id);
  const handleToggleFav = () => {
    if(isFav){
dispatch(deleteFromFav(id))
return
    }
    dispatch(addToFav(id))
  }
  return (
    <button className={css.favBtn} onClick={handleToggleFav}>
              <svg className={`${css.icon} ${isFav && css.isFav}`}>
              <use href={`/icons.svg#icon-fav`}></use>
            </svg>
            </button>
  )
}

export default FavButton
