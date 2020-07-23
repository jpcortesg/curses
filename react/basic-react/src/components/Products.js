import React, { Component, Fragment } from 'react';
import Product from './Product'

class Products extends Component {
  state = {
    products: [
      {
        id: 1,
        name: 'shirt ReactJS',
        price: 30
      },
      {
        id: 2,
        name: 'shirt VueJS',
        price: 30
      },
      {
        id: 3,
        name: 'shirt Angular',
        price: 30
      },
      {
        id: 4,
        name: 'shirt Node.js',
        price: 30
      },
    ]
  }
  render() {

    const { products } = this.state;

    return ( 
      <Fragment>
        <h1>List of Products</h1>
        {products.map(product => (
          <Product 
            key = {product.id}
            product = { product }>
          </Product>
        ))}
      </Fragment>
    );
  }
}

export default Products;