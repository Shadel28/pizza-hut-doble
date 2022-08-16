import React from 'react'
import './estamos-style.css'
import SantoD from '../../components/SantoD/SantoD'
import Interior from '../../components/Interior/Interior'

function Estamos() {
  return (
    <div className='estamos'>
      <h1>DÓNDE ESTAMOS</h1>
      <div className='estamos_mapa'>
      <iframe src="https://maps.google.com/maps?q=Pizza%20Hut,%20Santo%20Domingo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
      </div>
      <div className='estamos_ubicaciones'>
        <div className='estamos_ubicaciones-sd'>
          <h2>Santo Domingo</h2>
          <SantoD/>
        </div>
        <div className='estamos_ubicaciones-in'>
          <h2>Interior</h2>
          <Interior/>
        </div>
      </div>
    </div>
  )
}

export default Estamos
