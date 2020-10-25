import React, { useState, useEffect } from 'react'

export default function Car(){

  const [ carState, setCarState ] = useState({
    started: false,
    countKm: 0
  })

  useEffect( () => {
    document.title = `Coche ${carState.started}`
  }, [carState.started])


  const check = () => {
    if (carState.started) { return <span style={{color:'green'}}>Encendido</span>}
    return <span style={{color:'red'}}>Apagado</span>
  }

  const incrementKm = (num) => {
    if(carState.started) setCarState({ ...carState, countKm: carState.countKm+num })
    else alert('El coche esta apagado, ojo lo daña')
  }

  return(
    <div>
      <h2>Nuestro Cohe Está: { check() } </h2>
      <h2>Kilometros Recorridos: { carState.countKm } Km</h2>
      <button onClick={ () => incrementKm(5) }>Incrementar Kilometros</button>
      <br/>
      <button onClick={ () => { setCarState({ ...carState, started: !carState.started}) } }>{ check() }</button>
      <br/>
      <button onClick = { () => { setCarState({ ...carState, countKm: 0 }) } }> Carro Nuevo</button>
    </div>
  )
}