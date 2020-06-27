import React from 'react'
import Pokedex from './pages/Pokedex'
import Input from './Components/Input'
import './App.css'


function App(){
  return (

    <div>
      <Pokedex></Pokedex>
      <Input placeholder = 'nada'></Input>
    </div>

  )
}

export default App;