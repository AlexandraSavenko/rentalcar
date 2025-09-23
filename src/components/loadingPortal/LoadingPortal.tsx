import css from './LoadingPortal.module.css';
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from 'react-redux';
import { selectFilterLoading } from '../../redux/filters/selectors';
import { selectCarsLoading } from '../../redux/cars/selectors';
import { createPortal } from 'react-dom';

const LoadingPortal = () => {
    const filterLoading = useSelector(selectFilterLoading);
    const carsLoading = useSelector(selectCarsLoading);
    console.log(filterLoading)
    console.log(carsLoading)
  return createPortal((filterLoading || carsLoading) &&
    (<div className={css.loadingWrap}>
      <ClipLoader color={"#000"} size={150} />
    </div>),
        document.body
  )
}

export default LoadingPortal
