import React from 'react'
import  styled from 'styled-components'

const StyleInput = styled.input`
  padding : 16px;
  background : #FFF;
  border : 1px solid #7660DE;
  border-radius : 5px;
  outline : none;
`

function Input(properties){

  const text = properties.placeholder;

  const cont =
  (<div className = ''>
    <label className = ''>{text}:</label>
    <br></br>
    <StyleInput type = {text} placeholder = {text}  className = ''/>
  </div>)
  
  return cont
}


export default Input