import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Layout from './components/layout/Layout'
// import MainPage from './pages/mainPage/MainPage'
// import CatalogPage from './pages/catalogPage/CatalogPage'
// import CarPage from './pages/carPage/CarPage'
import { lazy, Suspense } from 'react'

const Layout = lazy(() => import("./components/layout/Layout"))
const MainPage = lazy(() => import("./pages/mainPage/MainPage"))
const CatalogPage = lazy(() => import("./pages/catalogPage/CatalogPage"))
const CarPage = lazy(() => import("./pages/carPage/CarPage"))



function App() {

  return (<>
  <Layout>
    <Suspense>
    <Routes>
<Route path="/" element={<MainPage/>} />
<Route path="/catalog" element={<CatalogPage/>} />
<Route path="/catalog/:id" element={<CarPage/>} />
    </Routes>
    </Suspense>
  </Layout>
    </>
  )
}

export default App
