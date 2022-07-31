import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="wave">
            <img src={wave} alt="" style={{width: "100%"}}/>
        </div>
    </div>
  )
}

export default Footer