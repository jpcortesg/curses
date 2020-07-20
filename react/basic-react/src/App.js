import React, { Fragment } from 'react';
import FirstComponent from './components/FirstComponent';

function App() {


  return (
    // React code without jsx
    // React.createElement(
    //   'h1',
    //   {id: 'heading', className: 'heading'},
    //   'Hello World'
    // )

    <Fragment>
        <FirstComponent></FirstComponent>
    </Fragment>
  );
}

export default App;
