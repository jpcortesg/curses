import React from 'react'
import './index.css'

function Input(properties){

  const text = properties.placeholder;

  const cont =
  <div className = 'input-wrapper'>
    <label className = 'label'>{text}:</label>
    <br></br>
    <input type = {text} placeholder = {text}  className = 'input'/>
  </div>
  
  return cont
}


export default Input