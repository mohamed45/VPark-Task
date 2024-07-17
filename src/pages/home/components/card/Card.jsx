import React from 'react'
import './Card.css'
import img4 from "../../../../assets/images/BG2@2x.png";

export default function Card({image, number, title}) {
  return (
    <div className='card'>
      
      <div className="card-content">
      <img className="card-image" src= {image} />
          <b><font className="card-number">{number}</font></b>
          <p className="card-title">{title}</p>
      </div>
    </div>
  )
}
