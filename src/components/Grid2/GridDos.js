import React from 'react'
import './grid-dos-style.css'
import Cuadro from '../Cuadro/Cuadro'
import izq from  '../../img/izq.png'

function GridDos() {
  return (
      <div className='inicio_contenedor'>
        <div className='inicio_der'>
          <img src={izq}/>
        </div>
      <div className='inicio_grid'>
        <Cuadro
          img = 'pizza5'
          corazon= '300'
          comentario= '123'
          />
        <Cuadro
          img = 'pizza6' 
          corazon= '600'
          comentario='100'
          />
          <Cuadro
          img = 'pizza7'
          corazon= '800'
          comentario= '723'
          />
          <Cuadro
          img = 'pizza8'
          corazon= '1000'
          comentario= '143'
          />
        </div>
      </div>
  )
}

export default GridDos
