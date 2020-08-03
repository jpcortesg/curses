import React, { Component } from 'react';
import './bootstrap.min.css'
import Header from './components/Header'
import NewAppointment from './components/NewAppointment'

class App extends Component {
  state = {

  }
  render() {
    return (
      <div className = 'container'>
        <Header tittle = 'Patients Veterinary Manager'></Header>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointment></NewAppointment>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
