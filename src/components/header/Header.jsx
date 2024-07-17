import { useEffect, useState, useRef } from "react";
import "./Header.css";
import img1 from "../../assets/images/logo.png";
import img2 from "../../assets/images/global.png";
import img3 from "../../assets/images/notification-icon.png";
import img4 from "../../assets/images/profile-picture.png";
import img5 from "../../assets/images/UK.png";
import img6 from "../../assets/images/UAE.png";
import img7 from "../../assets/images/down-arrow.png";
import img8 from "../../assets/images/up-arrow.png";
import img9 from "../../assets/images/account-icon.png";
import img10 from "../../assets/images/setting-icon.png";
import img11 from "../../assets/images/logOut-icon.png"



export default function Header() {
  // ************************************************
  const [isOpen, setIsOpen] = useState(false);
  

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // ************************************************
  return (
    <header className="header">
      <div className="logo">
        <img src={img1} alt="Logo" />
        <font style={{fontSize:"38px",fontWeight:"Bold" ,color:"#081836",fontFamily:"Frutiger LT Pro"}}>Logo</font>
      </div>
      <div className="right-div">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.34"
              height="22.34"
              viewBox="0 0 24 24"
              fill="#1E90FF"
            >
              <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8c1.85 0 3.55-.63 4.9-1.69l5.29 5.29 1.41-1.41-5.29-5.29C17.37 13.55 18 11.85 18 10c0-4.42-3.58-8-8-8zM4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" />
            </svg>
          </button>
        </div>
        <div className=" dropdown icons">
          <input
            type="checkbox"
            id="dropdown-toggle"
            className="dropdown-checkbox"
          />
          <label htmlFor="dropdown-toggle" className="dropbtn">
            <img
              src={img2}
              alt="Globe"
              className="dropdown-img"
              htmlFor="dropdown-toggle"
            />
          </label>

          <div className="dropdown-content">
            <span>
              <a href="#">
                <img src={img5} className="lang" />
                <>English</>
              </a>
            </span>
            <span>
              <a href="#">
                <img src={img6} className="lang" />
                <>عربي</>
              </a>
            </span>
          </div>
        </div>
        <div className="icons">
          <img src={img3} alt="Notification" className="notifi" />
        </div>

        <div className="dropdown profile" ref={dropdownRef}>
          <div className="admin-profile">
            <input
              type="checkbox"
              id="dropdown-toggle-profile"
              className="dropdown-checkbox"
            />
            <label
              htmlFor="dropdown-toggle-profile"
              className="dropbtn"
              onClick={toggleDropdown}
              style={{ backgroundColor: "white" }}
            >
              <img src={img4} alt="Profile" />
              <div className="profile-info">
                <font style={{fontSize:"20px",fontFamily:"Frutiger LT Pro", color:"#0C1834"}}>John Doe</font>
                <font style={{fontSize:"16px", color:"#687599",fontFamily:"Frutiger LT Pro" }}>Admin</font>
              </div>
              <img src={`${isOpen ? img8 : img7}`} />
            </label>
          </div>

          <div className={`dropdown-content-profile ${isOpen ? "show" : ""}`}>
            <div className="admin-option">
              <a href="#">
                <img src={img9} style={{ width: "21px", height: "26px" }} />
                <font className="admin-text">My Account</font><span style={{color:"#65769C",  marginLeft: "auto"}} >&gt;</span>
              </a>
            </div>

            <div className="admin-option">
              <a href="#">
                <img src={img10} style={{ width: "21px", height: "26px" }} />
                <font className="admin-text">Settings</font><span style={{color:"#65769C",  marginLeft: "auto"}} >&gt;</span>
              </a>
            </div>
            <div className="admin-option">
              <a href="#">
                <img src={img11} style={{ width: "21px", height: "26px" }} />
                <font className="admin-text">Logout</font><span style={{color:"#65769C",  marginLeft: "auto"}} >&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
