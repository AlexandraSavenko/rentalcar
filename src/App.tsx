import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import MainPage from './pages/mainPage/MainPage'
import CatalogPage from './pages/catalogPage/CatalogPage'
import CarPage from './pages/carPage/CarPage'

function App() {

  return (<>
  <Layout>
    <Routes>
<Route path="/" element={<MainPage/>} />
<Route path="/catalog" element={<CatalogPage/>} />
<Route path="/catalog/:id" element={<CarPage/>} />
    </Routes>
  </Layout>
    </>
  )
}

export default App
