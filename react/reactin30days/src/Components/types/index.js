import React from 'react'
import propTypes, { object } from 'prop-types'
import  styled, {css} from 'styled-components'

// possible types of pokemon

export const types = {
  fire : 'fire',
  flying  : 'flying',
  electric : 'electric'
}

const mapTypes = {
  [types.fire] : {
    text  : 'Fire',
    class : 'type-fire'
  },
  [types.flying] : {
    text  : 'Fly',
    class : 'type-flying'
  },
  [types.electric] : {
    text  : 'Electric',
    class : 'type-electric'
  }
}

// Possible theme of style for poke

const fire = `
  background : #FF3021;
  border-color : #CC261A;
`
const flying = `
  background : #8D9DFA;
  border-color : #7985CE;
`
const electric = `
  background : #FFC530;
  border-color : #CC9E26;
`

// Styles for component

const StyleDiv = styled.div`

  display : inline-flex;
  flex-direction : row;
  padding : 0px 8px;
  height : 23px;
  box-sizing : border-box;
  border-radius : 5px;
  align-items : center;
  color : #FFF;
  margin-left : 12px;

  /* Definitio of color for poke */

  ${({type}) =>{

    if(type === mapTypes.fire) return fire;
    if(type === mapTypes.flying) return flying;
    if(type === mapTypes.electric) return electric;
    
  }}

`

// return container with styles by type

function Types(properties){
  const type = 
  mapTypes[properties.type];

  if(!type) return null
  
  return(
    <StyleDiv type = {type} >
      {type.text}
    </StyleDiv>
  );
}

Types.propTypes = {
  type : propTypes.oneOf(Object.keys(types))
}

export default Types