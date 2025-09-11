import React from 'react';
import css from "./Logo.module.css"
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={"/"}>
      <p className={css.logo}>
      Reanta<span className={css.car}>Car</span>
    </p>
    </Link>
    
  )
}

export default Logo
