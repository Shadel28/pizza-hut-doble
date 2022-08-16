import React from 'react'
import './grid-style.css'
import Cuadro from '../../components/Cuadro/Cuadro'
import makeP from  '../../img/makingpizza.jpg'

function Grid() {
  return (
      <div className='inicio_contenedor'>
      <div className='inicio_grid'>
        <Cuadro
          img = 'pizza1'
          corazon= '300'
          comentario= '123'
          />
        <Cuadro
          img = 'pizza2' 
          corazon= '600'
          comentario='100'
          />
          <Cuadro
          img = 'pizza3'
          corazon= '800'
          comentario= '723'
          />
          <Cuadro
          img = 'pizza4'
          corazon= '1000'
          comentario= '143'
          />
        </div>
        <div className='inicio_der'>
          <img src={makeP}/>
        </div>
      </div>
  )
}

export default Grid
