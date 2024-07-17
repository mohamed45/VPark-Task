import React from 'react'
import img1 from '../../../../assets/images/g3387.svg'
import './Map.css'

export default function Map() {
  return (
    <div className="container">
        <div className="trip-route">
          <h3 className="main-title">Trip Route</h3>
          <div className="map">
            <form className="trip-route-form">
              <div>
                <h4 className="first-title">Trip Route <span className="trip-route-mark">!</span></h4>
                <p>Draw Trip Route by Adding Start point,Way point and End point</p>
              </div>
              <div className="trip-info">
                <div>
                  <label for="name">Trip name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Trip name"
                    className="trip-info-input"
                  />
                </div>
                <div>
                  <label for="sector">Sector</label>
                  <div className="select-box">
                    <select id="name" className="trip-info-input">
                    <option value="">Marina</option>
                    <option value="">Lucia</option>
                    <option value="">Camila</option>
                  </select>
                  </div>
                </div>
              </div>
              <div>
                <div className="auto-generate-title">
                  <h4>Auto Generate <span className="trip-route-mark">!</span></h4>
                  <button className="generate-btn"><img src={img1} alt="icon" height="17px" width="17px"/></button>
                </div>
                <div className="auto-generate-box">
                    <div className="box first-box">
                        <p>Add Start Point</p>
                        <button className="auto-generate-btn">+</button>
                    </div>
                    <div className="box second-box">
                        <p>Add Way Point</p>
                        <button className="auto-generate-btn">+</button>
                    </div>
                    <div className="box third-box">
                        <p>Add End Point</p>
                        <button className="auto-generate-btn">+</button>
                    </div>
                </div>
              </div>
              <div className="form-btn">
                <button className="alt-btn">Cancel</button>
                <button className="main-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
}
