import React from 'react'
import img1 from "../../../../assets/images/Group 62101@2x.png";
import img2 from "../../../../assets/images/Group 85042@2x.png";
import img3 from "../../../../assets/images/Group 85041@2x.png";
import img4 from "../../../../assets/images/Group 85043@2x.png";
import img5 from "../../../../assets/images/Group 85035@2x.png";
import './SmartVehicle.css'

export default function SmartVehicle({name, color, camera, network, memory, temp}) {
  
  const showSmartVehicle = () => {
    if (height === 30) {
      setHeight(180)
      setShow("rotateZ(0deg)")
      setAnimate("-30px 0px 0px -15px")
    }
    else {
      setHeight(30)
      setShow("rotateZ(180deg)")
      setAnimate("-20px 0px 0px -15px")
    }
    console.log(show)
  }
  const [height, setHeight] = React.useState(30)
  const [show, setShow] = React.useState("rotateX(180deg)")
  const [animate, setAnimate] = React.useState("-20px 0px 0px -15px")
  return (
    <div className='smart-vehicle' style={{height:`${height}px`}} >
        <div className='smart-vehicle-top'>
            <div className='smart-vehicle-top-left'>
              <img className='smart-vehicle-img' src={img1} style={{width:"77px", height:"84px", margin:`${animate}`}} />
                <div style={{width:"15px", height:"15px", backgroundColor:{color}, borderRadius:"100%", margin:"0px 10px", marginLeft:"77px"}}></div>
                <font>{name}</font>
            </div>
            
            <font style={{transform:`${show}`}} className='smart-vehicle-top-right' onClick={showSmartVehicle} > ^ </font>
        </div>

        <div className='smart-vehicle-bottom'>
            <div className='smart-vehicle-item'>
              <img className='smart-vehicle-item-img' src={img2} style={{width:"29px", height:"26px"}} />
              <font className='smart-vehicle-item-title'>Camera</font>
              <font className='smart-vehicle-item-subtitle'>{camera} </font>
              <div className='smart-vehicle-item-status'>
                <font className='smart-vehicle-item-status-title'>Active</font>
                <div style={{width:"9px", height:"9px", backgroundColor:"#F9B317", borderRadius:"100%"}}></div>
              </div>
            </div>

            <div className='smart-vehicle-item'>
  <img className='smart-vehicle-item-img' src={img3} style={{width:"29px", height:"26px"}} />
  <font className='smart-vehicle-item-title'>Network</font>
  <font className='smart-vehicle-item-subtitle'>{network} </font>
  <div className='smart-vehicle-item-status'>
    <font className='smart-vehicle-item-status-title'>Active</font>
    <div style={{width:"9px", height:"9px", backgroundColor:"#F9B317", borderRadius:"100%"}}></div>
  </div>
</div>
<div className='smart-vehicle-item'>
  <img className='smart-vehicle-item-img' src={img4} style={{width:"29px", height:"26px"}} />
  <font className='smart-vehicle-item-title'>Memory</font>
  <font className='smart-vehicle-item-subtitle'>{memory} </font>
  <div className='smart-vehicle-item-status'>
    <font className='smart-vehicle-item-status-title'>Normal</font>
    <div style={{width:"9px", height:"9px", backgroundColor:"#F9B317", borderRadius:"100%"}}></div>
  </div>
</div>
<div className='smart-vehicle-item'>
  <img className='smart-vehicle-item-img' src={img5} style={{width:"29px", height:"26px"}} />
  <font className='smart-vehicle-item-title'>CPU Temp</font>
  <font className='smart-vehicle-item-subtitle'>{temp} </font>
  <div className='smart-vehicle-item-status' style={{backgroundColor:"rgb(254 226 226)"}}>
    <font className='smart-vehicle-item-status-title' style={{color:"#E63438"}}>High</font>
    <div style={{width:"9px", height:"9px", backgroundColor:"#E63438", borderRadius:"100%"}}></div>
  </div>
</div>
        </div>
    </div>
  )
}
