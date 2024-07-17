import { useEffect, useState } from "react";

import SidebarItem from "./components/sidebaritem/SidebarItem";
import "./Sidebar.css";

import home1 from "../../assets/images/devault-home.svg";
import home2 from "../../assets/images/home-active.svg";
import opertion1 from "../../assets/images/devault-opretion.svg";
import opertion2 from "../../assets/images/active-opration.svg";
import map1 from "../../assets/images/devault-map.svg";
import map2 from "../../assets/images/active-map.svg";
import report1 from "../../assets/images/devault-report.svg";
import report2 from "../../assets/images/active-report.svg";
import control1 from "../../assets/images/devault-control.svg";
import control2 from "../../assets/images/active-control.svg";
import help_img from "../../assets/images/Group 84983@2x.png";

export default function Sidebar() {
  // ***********active tage**************
  const [activeLink, setActiveLink] = useState("#home");

  // **********MouseHover Event**************

  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  useEffect(() => {
    // Set the initial active link to "Home"
    setActiveLink("#home");
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar">
      <div style={{ width: "100%" }}>
        <SidebarItem
          img={home1}
          activeImg={home2}
          title="Home"
          active="#home"
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
        />
        <SidebarItem
          img={opertion1}
          activeImg={opertion2}
          title="Opertion"
          active="#opertion"
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
        />
        <SidebarItem
          img={map1}
          activeImg={map2}
          title="Map"
          active="#map"
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
        />
        <SidebarItem
          img={report1}
          activeImg={report2}
          title="Reports"
          active="#reports"
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
        />
        <SidebarItem
          img={control1}
          activeImg={control2}
          title="Control Panle"
          active="#control"
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
        />
      </div>

      {/* <div className="discover"></div> */}

      <div className="help-card">
        <div className="help-icon">
          <img src={help_img} alt="Need Help Icon" />
        </div>
        <div className="help-content">
          <h2>Need Help?</h2>
          <p>Click here to find Functionalities, Help, and More!</p>
          <button className="discover-button">Discover</button>
        </div>
      </div>
    </div>
  );
}
