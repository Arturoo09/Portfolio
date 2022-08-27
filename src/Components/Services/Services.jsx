import React from 'react'
import Card from '../Card/Card'
import './Services.css'
import cv from './cv.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Servicios'>
        {/** Left side */}

        <div className="increible">
            <span style={{color: darkMode ? 'white' : ''}}>Mis</span>
            <span>Servicios</span>
            <spane style={{color: darkMode ? 'white' : ''}}>
                Figth Fuels Greatness!
                <br />
                <br />
            </spane>
            <a href={cv}>
                <button className='button s-button'>Descarga CV</button>
            </a>
        </div>

        {/**Right side */}
        <div className="cards">
            <div style={{left: '-9rem', color: darkMode ? 'white' : ''}} >
                <Card 
                heading = {'Data'}
                details = {'Python , SQL y Power BI. '}/>
            </div>

            
            <div style={{top: '12rem', left:'-25rem'}}>
                <Card 
                heading = {'Developer'}
                details = {'HTML, CSS, JavaScript, React. '}/>
            </div>            
        </div>
        <div className="blur2"
        style={{
          background: '#C1F5FF',
          top: '90rem',
          width: '20rem',
          height: '10rem',
          left: '60rem'
        }} ></div>
    </div>
  )
}

export default Services