import React from 'react'
import './Works.css'
import nivimu from "../../img/nivimu.png";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id='Trabajos'>
        <div className="increible2">
            <span style={{color: darkMode ? 'white' : ''}}> Trabajos </span>
            <spane style={{color: darkMode ? 'gray' : ''}}>
                <br />
                <br />
                 # Nivimu.
                <br />
                <br />
                <br />
            </spane>
        </div>

        {/**Right Side */}
        <div className="w-right">
            <div className="w-circle">
                <div className="w-img">
                    <img src={nivimu} alt="" />
                </div>
            </div>
            <button className="w-button">Learn More</button>
            {/** Aqui ira todo la informacion sobre como trabaje 
             * y lo que hice en la empresa */}
        </div>
    </div>
  )
}

export default Works