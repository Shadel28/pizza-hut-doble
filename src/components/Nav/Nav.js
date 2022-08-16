import React from 'react'
import '../Nav/nav_style.css'
import logo from '../../img/logo.jpg'
import { NavLink } from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'


function Nav() {

  return (
    <div className='contenedor'>
        <nav class="navbar navbar-light bg-light mobile">
        <a class="navbar-brand" href="#">
          <img src={logo} />
        </a>
        <div className='navbar_botones'>
          <button type="button" class="btn one">ORDENA DELIVERY</button>
          <button type="button" class="btn">MENÚ DINE-IN</button>
        </div>
        </nav>
      <nav class="navbar navbar-light bg-light mobile-dos">
        <div className='navbar_links'>
        <NavLink to='/'><span class="navbar-brand mb-0 h1">Inicio</span>
        </NavLink>
        <NavLink to='/estamos'><span class="navbar-brand mb-0 h1">Donde Estamos</span>
        </NavLink>
        <NavLink to='/contacto'><span class="navbar-brand mb-0 h1">Contacto</span>
          </NavLink>
        </div>
        <div className='navbar_redes'>
          <FaFacebookF />
          <BsInstagram />
          <AiOutlineTwitter />
        </div>
        </nav>
    </div>
  )
}

export default Nav
