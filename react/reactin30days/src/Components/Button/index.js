import React from 'react'
import './index.css'

function Button(properties){
  const nameClass = 'button ' + properties.type;
  return <button className = {nameClass} >{properties.children}</button>
}

export default Button