import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart'
import Home from './Pages/Home'

const MyRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes