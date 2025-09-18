import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarDetails } from "../../redux/cars/operations";
import type { AppDispatch } from "../../redux/store";
import { useParams } from "react-router-dom";
import { selectCarDetails } from "../../redux/cars/selectors";
import css from "./CarPage.module.css";
import FavButton from "../../components/favButton/FavButton";
import CarOrderFrom from "../../components/carOrderForm/CarOrder.Form";

const CarPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const car = useSelector(selectCarDetails);
  const whereFrom = car?.address.split(",").slice(-2).join();
  const RC = car?.rentalConditions ?? [];
  const AandF = [...(car?.accessories ?? []), ...(car?.functionalities ?? [])];
  const { id } = useParams();
  useEffect(() => {
    if (id) dispatch(getCarDetails(id));
  }, [id, dispatch]);
  if (!car) {
    return <p>Sorry, something went wrong</p>;
  }
  return (
    <div className={`${css.carWrap} container`}>
      <div className={css.imageWrap}>
        <img src={car.img} alt={car.description} />
       { id && <FavButton id={id}/>}
       <CarOrderFrom/>
      </div>
      <div className={css.infoWrap}>
        <h3>
          {car.brand} {car.model}, {car.year}
        </h3>
        <div className={css.originandage}>
          <div className={css.whereFrom}>
            <svg className={css.icon}>
                      <use href={`/icons.svg#icon-Location`}></use>
                    </svg>
          <p>{whereFrom}</p>
          </div>
          
          <p>Mileage: {car.mileage} km</p>
        </div>
        <p className={css.price}>$ {car.rentalPrice}</p>
        <p className={css.description}>{car.description}</p>
        <div className={css.listsWrap}>
          <div className={css.list}>
            <h3>Rentsl Conditions:</h3>
            <ul>
              {RC.length > 0 &&
                RC.map((el, i) => (
                  <li key={i}>
                    <svg className={css.icon}>
                      <use href={`/icons.svg#icon-check-circle`}></use>
                    </svg>
                    <p>{el}</p>
                  </li>
                ))}
            </ul>
          </div>
          <div className={css.list}>
            <h3>Car Specifications:</h3>
            <ul>
              <li>
                <svg className={css.icon}>
                      <use href={`/icons.svg#icon-calendar`}></use>
                    </svg>
                <p>Year: {car.year}</p>
              </li>
              <li>
                <svg className={css.icon}>
                      <use href={`/icons.svg#icon-car`}></use>
                    </svg>
                <p>Type: {car.type}</p>
              </li>
              <li>
                <svg className={css.icon}>
                      <use href={`/icons.svg#icon-fuel-pump`}></use>
                    </svg>
                <p>Fuel Consumption: {car.fuelConsumption}</p>
              </li>
              <li>
                <svg className={css.icon}>
                      <use href={`/icons.svg#icon-Group`}></use>
                    </svg>
                <p>Engine Size: {car.engineSize}</p>
              </li>
            </ul>
          </div>

          <div className={css.list}>
            <h3>Accessories and functionalities:</h3>
            <ul>
              {AandF.length > 0 &&
                AandF.map((el, i) => (
                  <li key={i}>
                    <svg className={css.icon}>
                      <use href={`/icons.svg#icon-check-circle`}></use>
                    </svg>
                    <p>{el}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPage;
