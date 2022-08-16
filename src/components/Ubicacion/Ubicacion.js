import React from 'react'
import './ubicacion-style.css'

function Ubicacion(props) {
  return (
    <div className='ubicacion'>
      <h3>{props.nombre}</h3>
      <h4>{props.direccion}</h4>
      <span>{props.horario}</span>
    </div>
  )
}

export default Ubicacion
