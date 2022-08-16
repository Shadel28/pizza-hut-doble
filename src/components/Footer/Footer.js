import React from 'react'
import '../Footer/footer-style.css'
import app from '../../img/app-store.jpg'
import play from '../../img/google-play.jpg'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'


function Footer() {
  return (
    <div className='footer'>
      <div className='footer_contenedor'>
      <div className='footer_contenedor-col-one'>
        <span>Delivery & Carry Out</span>
        <span className='numero'>809.620.2020</span>
      </div>
      <div className='footer_contenedor-col'>
        <span>Descarga nuestra App Móvil</span>
        <div className='footer_contenedor-col-img'>
        <img src={app} alt='app'/>
        <img src={play} alt='play'/>
        </div>
      </div>
      <div className='footer_contenedor-redes'>
          <FaFacebookF />
          <BsInstagram />
          <AiOutlineTwitter />
      </div>
      </div>
      <p>© 2022 TODOS LOS DERECHOS RESERVADOS. NAREX SA</p>
    </div>
  )
}

export default Footer
