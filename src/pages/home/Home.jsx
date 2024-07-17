import React from "react";
import img1 from "../../assets/images/Group 79024@2x.png";

import img2 from "../../assets/images/Group 79025@2x.png";

import img3 from "../../assets/images/BG@2x.png";
import img4 from "../../assets/images/BG2@2x.png";
import img5 from "../../assets/images/BG3@2x.png";
import img6 from "../../assets/images/BG4@2x.png";

import "./Home.css";
import SmartVehicle from "./components/smartVehicle/SmartVehicle";
import Statistic from "./components/statistic/Statistic";
import Card from "./components/card/Card";
import GetBird from "./components/getBird/GetBird";


export default function Home() {
  const items = [ {name:"Smart Vehicle 1", color: "#F9B317", camera:"Online", network:"Available", memory:"20%", temp:"70°"},
                  {name:"Smart Vehicle 2", color: "#00AB80", camera:"Online", network:"Available", memory:"50%", temp:"20°"},
                  {name:"Smart Vehicle 3", color: "#E63438", camera:"Online", network:"Available", memory:"40%", temp:"30°"},
                  {name:"Smart Vehicle 4", color: "#00AB80", camera:"Online", network:"Available", memory:"90%", temp:"50°"},
                  {name:"Smart Vehicle 5", color: "#00AB80", camera:"Online", network:"Available", memory:"60%", temp:"40°"},
                  {name:"Smart Vehicle 6", color: "#E63438", camera:"Online", network:"Available", memory:"70%", temp:"60°"},
                  {name:"Smart Vehicle 7", color: "#00AB80", camera:"Online", network:"Available", memory:"80%", temp:"70°"},
                  {name:"Smart Vehicle 8", color: "#F9B317", camera:"Online", network:"Available", memory:"90%", temp:"80°"},
                  {name:"Smart Vehicle 9", color: "#E63438", camera:"Online", network:"Available", memory:"100%", temp:"90°"},
                  {name:"Smart Vehicle 10", color: "#F9B317", camera:"Online", network:"Available", memory:"10%", temp:"100°"},
                  ]

  return <div className="home">
          <font className="home-title">Welcome! John Doe</font>
          <div className="home-first">
            <div className="home-first-left">
              <div className="home-first-left-top">
                <font className="home-first-left-top-title">VPark Fleet</font>
                <div className="home-first-left-top-right">
                  <div className="home-first-left-top-rectangle">
                    <img src={img2} style={{width:"22px", height:"23px", cursor:"pointer"}} />
                  </div>
                  <div className="home-first-left-top-rectangle">
                    <img src={img1} style={{width:"23px", height:"23px", cursor:"pointer"}} />
                  </div>
                </div>
              </div>

              <div className="home-first-left-list">
                {items.map((item, index) => <SmartVehicle key={index} {...item} />
                )}
              </div>
            </div>

            <div className="home-first-right">
             
              <Statistic />
              <div className="home-first-right-container" style={{width:"100%"}}>
                <Card image={img3} title="Total Violations" number="2,108" />
                <Card image={img4} title="Total Dectations" number="100,000"/>
              </div>

              <div className="home-first-right-container" style={{width:"100%"}}>
                <Card image={img5} title="Total Active Vehicles" number="48" />
                <Card image={img6} title="Total Distance in KM" number="50,000" />
              </div>

            </div>
          </div>

      <div className="home-second">
        <GetBird />
      </div>
      <div className="home-third">
        </div>
    </div>;
}
