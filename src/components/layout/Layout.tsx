import React from 'react'
import Header from '../header/Header'
import type { LayoutProps } from '../../utils/types'

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
    <Header/>
      {children}
    </>
  )
}

export default Layout
