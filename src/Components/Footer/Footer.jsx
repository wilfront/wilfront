import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo cópia.png'
import { NavLink } from 'react-router-dom'


function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="logo">
                    <img src={Logo} width="170px" alt="logotipo" />
                </div>
                <nav className="menu-footer">
                    <ul className='menu'>
                        <NavLink className='nav-footer' to='/About'>Sobre</NavLink>
                        <NavLink className='nav-footer' to='/Services'>Serviços</NavLink>
                        <NavLink className='nav-footer' to='https://w.app/WilFront'>Agendar</NavLink>
                    </ul>
                </nav>
                <div className="rede-social">
                    <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon>
                    <box-icon name='facebook' type='logo' color='#ffffff' ></box-icon>
                    <box-icon name='twitter' type='logo' color='#ffffff' ></box-icon>
                </div>
            </div>
            <div className="direitos">
                    <h6>Copyrigth * Barbeiro Shop. Todos os direitos Reservados.</h6>
            </div>
        </>
    )
}

export default Footer