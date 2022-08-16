import React from 'react'
import car1 from '../../img/car1.jpg'
import car2 from '../../img/car2.jpg'
import car3 from '../../img/car3.jpg'
import car4 from '../../img/car4.jpg'
import Carousel from 'react-bootstrap/Carousel'
import './carrusel-style.css'

function Carrusel() {

  
  return (
    <div className='carrusel'>
    <Carousel fade 
    controls={false} 
    indicators={false}
    interval='2500'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car4}
          alt="Forth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carrusel;