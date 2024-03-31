import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './views/Home/Home'
import Contact from './views/Contact/Contact'

import './App.css'
import Products from './views/Products/Products'
import CartViews from './views/CartViews/CartViews'

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="Cart" element={<CartViews />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
