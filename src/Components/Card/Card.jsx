import React from 'react'
import './Card.css'

const Card = ({heading, details}) => {
  return (
    <div className="card" style={{left: '50rem'}}>
        <span>{heading}</span>
        <span>{details}</span>
    </div>
  )
}

export default Card