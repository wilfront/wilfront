import React from 'react'
import './Localização.css'
import { NavLink } from 'react-router-dom'

function Localização() {
    return (
        <>
            <div className='localização'>
                <div className='endereço'>
                    <div className="text-rede">
                        <h1>Endereço</h1>
                        <NavLink to='https://www.google.com/maps/place/Centro+-+St.+Central,+Goi%C3%A2nia+-+GO,+74055-235/data=!4m2!3m1!1s0x935ef3d0ea223305:0xab32824ff1bbf683?sa=X&ved=1t:242&ictx=111'>
                        <box-icon name='map' type='solid' color='#ffffff' ></box-icon>
                            <p>Avenida Ribeiro Matheus Nunes, nº 5000</p>
                            <p>Goiânia,Goiás, Cep 52000-200</p>
                        </NavLink>
                    </div>
                    <div className="horario">
                        <h1>Horários</h1>
                        <p>Segunda a Sexta - 09h a 22h</p>
                        <p>Sábado - 09h a 20h</p>
                        <p>Domingo - 10h a 16h</p>
                        <p>Feriado: Consulte a disponibilidade</p>
                    </div>
                    <div className='local'>
                        <h1>Trabalhe Conosco</h1>
                        <p>wilfrontoficial@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Localização