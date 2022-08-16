import './cuadro-style.css'
import React from 'react'
import {BsHeartFill} from 'react-icons/bs'
import {RiMessage2Fill} from 'react-icons/ri'


function Cuadro(props) {
  return (
    <div className='cuadro'>
      <img src={require(`../../img/${props.img}.jpg`)}/>
      <div className='cuadro_hover'>
        <div className='cuadro_hover-col'>
          <BsHeartFill className='icon'/>
            <span>{props.corazon}</span>
        </div>
        <div className='cuadro_hover-col'>
          <RiMessage2Fill className='icon'/>
            <span>{props.comentario}</span>
        </div>
      </div>
    </div>
  )
}

export default Cuadro
