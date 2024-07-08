import React from 'react';
import './App.css'
import Navbar from './landingPage/Navbar';
import Landing from './landingPage/Landing';
import ProductDetails from './landingPage/Productdetails';
import Checkout from './checkOut/payment';
import PaymentSuccess from './paymentSucessful/Sucess';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path='/payment-success' element={<PaymentSuccess/>} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </>

  );
};

export default App;

