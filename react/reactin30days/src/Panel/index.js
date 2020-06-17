import React from 'react'
import './index.css'

const nameClass = 'panel'

function Panel(properties){
return <section className = {nameClass} >{properties.children}</section>
}

export default Panel