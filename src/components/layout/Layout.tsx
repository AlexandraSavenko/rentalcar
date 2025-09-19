import React from 'react'
import Header from '../header/Header'
import type { LayoutProps } from '../../utils/types'
import css from "./Layout.module.css"

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className={css.layoutWrap}>
    <Header/>
      {children}
    </div>
  )
}

export default Layout
