import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle' 
import { Link } from 'react-scroll'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Arturo</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                        <li>Inicio</li>
                    </Link>
                    <Link spy={true} to='Servicios' smooth={true}>
                        <li>Servicios</li>
                    </Link>
                    <Link spy={true} to='Trabajos' smooth={true}>
                        <li>Trabajos</li>
                    </Link>
                </ul>
            </div>
            <button className="button n-button">Contáctame</button>
        </div>
    </div>
  )
}

export default Navbar
