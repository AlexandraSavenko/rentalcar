import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPage, selectTotalPages } from '../../redux/cars/selectors';
import { setNextPage } from '../../redux/cars/slice';
import css from "./Button.module.css"

const Button = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const isLastPage = page === totalPages;
  const handlePageChange = () => {
if(!isLastPage){
  dispatch(setNextPage())
}
  }
  return (
    <button className={`${css.lmBtn} ${isLastPage && css.disable}`} onClick={handlePageChange}>
      Load more
    </button>
  )
}

export default Button
