import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarDetails } from "../../redux/cars/operations";
import type { AppDispatch } from "../../redux/store";
import { useParams } from "react-router-dom";
import { selectCarDetails } from "../../redux/cars/selectors";
import css from "./CarPage.module.css";

const CarPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const car = useSelector(selectCarDetails);
  const whereFrom = car?.address.split(",").slice(-2).join();
  const RC = car?.rentalConditions ?? [];
  const AandF = [...(car?.accessories ?? []), ...(car?.functionalities ?? [])];
  const { id } = useParams();
  console.log("carPage: ", car);
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
      </div>
      <div className={css.infoWrap}>
        <h3>
          {car.brand} {car.model}, {car.year}
        </h3>
        <div className={css.originandage}>
          <p>{whereFrom}</p>
          <p>Mileage: {car.mileage} km</p>
        </div>
        <p className={css.price}>$ {car.rentalPrice}</p>
        <p className={css.description}>{car.description}</p>
        <div className={css.listsWrap}>
            <div className={css.list}>

<h3>Rentsl Conditions:</h3>
          <ul>{RC.length > 0 && RC.map((el, i) => <li key={i}>{el}</li>)}</ul>

            </div>
          <div className={css.list}>

<h3>Car Specifications:</h3>
          <ul>
            <li>
              <span>Year: {car.year}</span>
            </li>
            <li>
              <span>Type: {car.type}</span>
            </li>
            <li>
              <span>Fuel Consumption: {car.fuelConsumption}</span>
            </li>
            <li>
              <span>Engine Size: {car.engineSize}</span>
            </li>
          </ul>

            </div>
          
          <div className={css.list}>

<h3>Accessories and functionalities:</h3>
          <ul>
            {AandF.length > 0 && AandF.map((el, i) => <li key={i}>{el}</li>)}
          </ul>

            </div>
          
        </div>
      </div>
    </div>
  );
};

export default CarPage;
