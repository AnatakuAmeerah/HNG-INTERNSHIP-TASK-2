import React from 'react';
import Product from './Product';

const products = [
  { id: 1, image: <img className='prdct-img' src="./Frame 17.svg" alt="stock" />, name: 'Gucci', price: 10.99, stock: 10 },
  { id: 2, image: <img className='prdct-img' src="./Frame 17 (1).svg" alt="stock" />, name: 'Prada', price: 9.99, stock: 20 },
  { id: 3, image: <img className='prdct-img' src="./Frame 17 (2).svg" alt="stock" />, name: 'Dior', price: 12.09, stock: 5 },
  { id: 4, image: <img  className='prdct-img' src="./Frame 17 (3).svg" alt="stock" />, name: 'Palm Angels', price: 18.99, stock: 3 },
  { id: 5, image: <img className='prdct-img' src="./Frame 17 (5).svg" alt="stock" /> ,name: 'Gucci', price: 20.39, stock: 10 },
  { id: 6, image: <img className='prdct-img' src="./Frame 17 (6).svg" alt="stock" />,name: 'Louis vuitton', price: 32.03, stock: 8 },
  { id: 7, image: <img className='prdct-img' src="./Frame 17 (7).svg" alt="stock" />,name: 'Versachi', price: 32.03, stock: 8 },
  { id: 8, image: <img className='prdct-img' src="./Frame 17 (8).svg" alt="stock" />,name: 'Calvin Klein', price: 32.03, stock: 8 },
];

const Products = () => {
  return (
    <div className='products'>
      {products.map((product) => (
        <>
        <Product key={product.id} product={product}  />
        </>
      ))}
    </div>
  );
};

export default Products;