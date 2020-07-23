import React, { Fragment } from 'react';
import Header  from './components/Header';
import Footer  from './components/Footer';
import Products  from './components/Products';

function App() {

  const date = new Date().getFullYear()

  return (
    // React code without jsx
    // React.createElement(
    //   'h1',
    //   {id: 'heading', className: 'heading'},
    //   'Hello World'
    // )

    <Fragment>
        <Header tittle = 'Online shop'></Header>
        <Products></Products>
        <Footer date = { date }></Footer>
    </Fragment>
  );
}

export default App;
