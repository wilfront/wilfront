import React from 'react'
import './Services.css'
import Footer from '../../Components/Footer/Footer'

function Services() {
  return (
    <>
      <div className='services'>
        <h1>Menu</h1>
        <div className="text-services">
          <div className='corte'>
            <h6>Corte Masculino</h6>
            <h6>R$80</h6>
          </div>
          <div className='barba'>
            <h6>Barba e Bigode</h6>
            <h6>R$60</h6>
          </div>
          <div className='combo'>
            <h6>Combo : Corte Masculino + Barba e Bigode</h6>
            <h6>R$140</h6>
          </div>
          <div className='corte-infantil'>
            <h6>Corte Infantil</h6>
            <h6>R$40</h6>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Services
