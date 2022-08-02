import React from 'react'
import './intro.css'
import insta from '../../img/insta.png'
import github from '../../img/github.png'
import twitter from '../../img/twitter.png'
import dog from '../../img/dog.png'
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from 'react-scroll'
// import { motion } from 'framer-motion';

const Intro = () => {

  // const transition = {duration : 2, type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
      <div className="i-name">
        <span style={{color: darkMode ? 'white' : ''}}>¡Hola! Soy</span>
        <span>Arturo Largo García</span>
        <span style={{color: darkMode ? 'white' : ''}}>
          Estudiante de Ingeniería Informática en la UCAM.
        </span>
        <span style={{color: darkMode ? 'white' : ''}}>
            Me especializo en el analisis de datos, pero también se algo de
            Desarrollo de Frontend, así como de Backend. Entusiasta y
            trabajo de calidad.
        </span>
      </div>

      <Link spy={true} to='Contacto' smooth={true}>
        <button className="button i-button">Contrátame</button>      
      </Link>

      <div className="i-icons">
        <a href="https://www.instagram.com/alggarcia_96/" className="insta" target="__black">
          <img src={insta} alt=""/>
        </a>
        <a href="https://github.com/Arturoo09" className="github" target="__black">
          <img src={github} alt="" />
        </a>
        <a href="https://twitter.com/alggarcia_963" className="twitter" target="__black">
          <img src={twitter} alt="" />
        </a>
        
      </div>
      </div>
      <div className="i-right">
        <img src={dog} alt="" />
        <div className="blur"
        style={{
          background: '#C1F5FF',
          top: '17rem',
          width: '18rem',
          height: '45rem',
          left: '100rem'
        }} ></div>
      </div>
    </div>
  )
}

export default Intro
