import React from 'react'
import './inicio-style.css'
import hero from '../../img/hero.jpg'
import unete from '../../img/unete.jpg'
import Grid from '../../components/Grid/Grid'
import GridDos from '../../components/Grid2/GridDos'
import Carrusel from '../../components/Carrusel/Carrusel'




function Inicio() {
  return (
    <section className='inicio'>
      <img className='hero' src={hero} alt='hero'/>
      <Carrusel/>
      <Grid/>
      <GridDos/>
      <img className='hero' src={unete} alt='unete' />
    </section>
  )
}

export default Inicio
