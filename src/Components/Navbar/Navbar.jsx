import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle' 
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from 'react-scroll'
const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper">
        <div className="n-left" id="Intro">
            <div className="n-name">
                <span style={{color: darkMode ? 'white' : ''}}>A</span>
                <span style={{color: darkMode ? 'white' : ''}}>R</span>
                <span style={{color: darkMode ? 'white' : ''}}>T</span>
                <span style={{color: darkMode ? 'white' : ''}}>U</span>
                <span style={{color: darkMode ? 'white' : ''}}>R</span>
                <span style={{color: darkMode ? 'white' : ''}}>O</span>
            </div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Intro' smooth={true}>
                        <li>Inicio</li>
                    </Link>
                    <Link spy={true} to='Servicios' smooth={true}>
                        <li>Servicios</li>
                    </Link>
                    <Link spy={true} to='Trabajos' smooth={true}>
                        <li>Trabajos</li>
                    </Link>
                    <Link spy={true} to='Contacto' smooth={true}>
                        <li>Contacto</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to='Contacto' smooth={true}>
                <button className="button n-button">Contáctame</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
