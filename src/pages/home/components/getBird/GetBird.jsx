import React from 'react'
import img1 from '../../../../assets/images/Mask Group 49@2x.png'
import './GetBird.css'


export default function GetBird() {
  return (
    <div className='get-bird'>
      <img src={img1} className='get-bird-img' />
      <div className='get-bird-content'>
      <font className="get-bird-title">Get a bird’s eye <font style={{color:"#F9B419"}}> view</font> in a snap.</font>
      <p className='get-bird-text'>
      We equip you with the tools to customise your dashboards and 
      track fleet status, decorations, and violations at a glance. 
      Easily run reports from a high-level overview down to the very 
      last detail.
      </p>
      </div>
      
    </div>
  )
}
