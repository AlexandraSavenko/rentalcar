import React from 'react'
import Logo from '../logo/Logo'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Logo/>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/catalog"}>Catalog</NavLink>
      </nav>
    </div>
  )
}

export default Header
