import React from 'react';

const Product = ({product}) => (
  <div>
    <h1>{product.name}</h1>
    <p>Price:  ${product.price} </p>
  </div>
);

export default Product;