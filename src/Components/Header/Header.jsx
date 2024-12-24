import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const Toggle = () => {
    setMenuOpen(!menuOpen)
    console.log(menuOpen)
  }
  const ToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header>
        <div className="logo">
          <img src={Logo} width="100px" alt="logotipo" />
        </div>
        <div className={menuOpen ? "ActiveMenu" : "InativeMenu"} onClick={ToggleMenu}>
          <nav className="list">
            <ul className='list-menu'>
              <NavLink className='nav' to='/'>Home</NavLink>
              <NavLink className='nav' to='About'>Sobre</NavLink>
              <NavLink className='nav' to='Services'>Serviços</NavLink>
              <NavLink className='nav' to='https://w.app/WilFront'>Agendar</NavLink>
            </ul>
          </nav>
        </div>
        <div className={menuOpen ? "active" : "inative"}  >
          <button className='hamburguer' onClick={Toggle}></button>
        </div>
      </header>
    </>
  )
}

export default Header
