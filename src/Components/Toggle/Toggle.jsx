import React from 'react'
import './Toggle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../Context'
import { useContext } from 'react'



const Toggle = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({type: 'toggle'})
  }
  return (
    <div className="toggle" onClick={handleClick}>
        <Moon/>
        <div className="t-button"
        style={darkMode? {left: '15px'}: {right: '15px'}}
        >
            
        </div>
        <Sun/>
    </div>
  )
}

export default Toggle