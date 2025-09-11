import React from 'react'
import css from "./MainPage.module.css"
import { NavLink } from 'react-router-dom'

const MainPage = () => {
  return (
    <div className={css.mainWrap}>
      <div>
      <h1>Find your perfect rental car</h1>
      <p>Reliable and budget-friendly rentals for any journey</p>
    <NavLink to={"/catalog"}>View Catalog</NavLink>
    </div>
    </div>
  )
}

export default MainPage
