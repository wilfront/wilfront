import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import Home2 from '../Home2/Home2'
import Home3 from '../Home3/Home3'
import Footer from '../../Components/Footer/Footer'
import Localização from '../Localização/Localização'

function Home() {
  return (
    <>
      <div className='home'>
        <div className='text-home'>
          <div className='text'>
            <h1>Corte de Cabelo</h1>
            <strong>Barba</strong>
            <h1>Relaxamento</h1>
            <strong>Hidratação</strong>
          </div>
          <nav className='btn'>
            <NavLink className='/nav' to='/Services'><button>Conheça todos os serviços</button></NavLink>
          </nav>
        </div>
      </div>
      <Home2 />
      <Home3 />
      <Localização/>
      <Footer/>
    </>
  )
}

export default Home