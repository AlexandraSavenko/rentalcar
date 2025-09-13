import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCarDetails } from '../../redux/cars/operations';
import type { AppDispatch } from '../../redux/store';
import { useParams } from 'react-router-dom';
import { selectCarDetails } from '../../redux/cars/selectors';

const CarPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const car = useSelector(selectCarDetails)
const {id} = useParams()
console.log("carPage: ", car)
    useEffect(() => {
        if(id) dispatch(getCarDetails(id))
    }, [id, dispatch])
if(!car){
    return <p>Sorry, something went wrong</p>
}
return <>
<img src={car.img} alt="" />
</>
}

export default CarPage
