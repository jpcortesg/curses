import React from 'react'
import Types, {types} from './../../Components/types'
import { Title, Body14 } from './../../Components/Typefaces'
import './index.css'
import Charizard from './../../img/Charizard.png'

function Pokedex() {
  return (
    
    <div className = 'poke-tarjet'>
      <div className = 'poke-head'>
        <Title>Charizard</Title> <Body14>#006</Body14>
      </div>

      <div className = 'poke-image'>
      <img src = {Charizard} />
      </div>

      <div className = 'poke-type'>
        <Types type = {types.fire}></Types>
        <Types type = {types.flying}></Types>
      </div>
    </div>
  );
}



export default Pokedex