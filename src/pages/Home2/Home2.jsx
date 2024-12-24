import React from 'react'
import './Home2.css'
import { NavLink } from 'react-router-dom'

function Home2() {
  return (
    <>
      <div className='home2'>
        <div className="text-home2">
          <h1>O que Oferecemos</h1>
          <p>Confira  os serviços disponíveis na rede Barbeiro.</p>
        </div>
        <div className="img-services">
          <div className="img-serv">
            <div className="img-1">
              <h1>Corte</h1>
              <p>O Corte é feito com base na estética e harmonia
                adequadas para o formato do seu rosto.
              </p>
            </div>
            <div className='img-2'>
              <h1>Barba</h1>
              <p>O tratamento que sua barba merece,feito
                com navalha e produtos que hidratam os pelos
                do rosto.
              </p>
            </div>
            <div className='img-3'>
              <h1>Máquina</h1>
              <p>Cortes apenas com a máquina de cabelo,
                neste serviço o uso de pentes varia conforme
                o serviço realizado.
              </p>
            </div>
          </div>
        </div>
        <nav className='btn-services'>
          <NavLink className='/nav' to='/Services'><button>Confira os preços</button></NavLink>
        </nav>
      </div>
    </>
  )
}

export default Home2
