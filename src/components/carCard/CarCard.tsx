import React from "react";
import type { carCardProps } from "../../utils/types";
import css from "./CarCard.module.css";
import { Link } from "react-router-dom";
import FavButton from "../favButton/FavButton";
// import { useDispatch, useSelector } from "react-redux";
// import { selectFavorits } from "../../redux/cars/selectors";
// import { addToFav, deleteFromFav } from "../../redux/cars/slice";

const CarCard: React.FC<carCardProps> = ({
  car: {
    img,
    type,
    year,
    model,
    brand,
    rentalPrice,
    id,
    rentalCompany,
    mileage,
    address,
  },
}) => {
  const whereFrom = address.split(",").slice(-2).join();
//   const dispatch = useDispatch()
//   const favorites = useSelector(selectFavorits)
  
//   const isFav = favorites.find(el => el === id);
//   const handleToggleFav = () => {
//     if(isFav){
// dispatch(deleteFromFav(id))
// return
//     }
//     dispatch(addToFav(id))
//   }
  return (
    <div className={css.cardWrap}>
      <div className={css.imgWrap}>
        <img src={img} alt={type} />
        <FavButton id={id}/>
        {/* <button className={css.favBtn} onClick={handleToggleFav}>
          <svg className={`${css.icon} ${isFav && css.isFav}`}>
          <use href={`/icons.svg#icon-fav`}></use>
        </svg>
        </button> */}
        
      </div>
      <div className={css.lone}>
        <p className={css.brand}>
          {brand} <span>{model}</span>, <span>{year}</span>{" "}
        </p>
        <p className={css.price}>{`$${rentalPrice}`}</p>
      </div>
      <div className={css.ltwo}>
        <p className={css.whereFrom}>{whereFrom}</p>
        <p className={css.company}>{rentalCompany}</p>
      </div>

      <div className={css.lthree}>
        <p className={css.type}>{type}</p>
        <p className={css.miles}>{mileage} km</p>
      </div>
      <Link className={css.link} to={`/catalog/${id}`}>
        Read more
      </Link>
    </div>
  );
};

export default CarCard;
