import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import _404Page from './pages/_404Page'
import Navbar from './components/Navbar'
import NewProductPage from './pages/NewProductPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import EditProductPage from './pages/EditProductPage'


function App() {

  return (
    <>

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/new-product' element={<NewProductPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:productId' element={<ProductDetailsPage />} />
        <Route path='/products/:productId/edit' element={<EditProductPage />} />
        <Route path='*' element={<_404Page />} />
      </Routes>

    </>
  )
}

export default App
