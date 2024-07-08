import React from 'react';
import './App.css'
import Navbar from './landingPage/Navbar';
import Landing from './landingPage/Landing';
import ProductDetails from './landingPage/Productdetails';
import Checkout from './checkOut/payment';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </>

  );
};

export default App;

