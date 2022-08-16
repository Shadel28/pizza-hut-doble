import React from 'react'
import './form-style.css'

function Form() {
  return (
    <div className='form'>
      <form>
      <div class="form-group">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre *" required/>
        </div>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email *" required/>
        </div>
        <div class="form-group">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Mensaje *" required></textarea>
        </div>
    </form>
    <button type='submit'>Enviar</button>
    </div>
  )
}

export default Form
