import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Catalog from '../pages/Catalog';
import Home from '../pages/Home';
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout';
import Thankyou from '../pages/Thankyou';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Contact from '../pages/Contact';
import LoginForm from '../pages/LoginForm';

const Layout = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/:slug' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/thankyou' element={<Thankyou />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LoginForm/>} />
    </Routes>
  )
}

export default Layout