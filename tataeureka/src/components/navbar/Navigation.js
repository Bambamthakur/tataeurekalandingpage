import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return(
        <>
        <div className= "container-fluid">
            <div className="row">
                <div className="col-12 mx-auto">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    
                      <NavLink className="navbar-brand" to="/">
                        <img src="./Logo.png" width='100%' height='50px' alt="logo" />
                      </NavLink >
                      <button className="navbar-toggler" type="button"
                       data-bs-toggle="collapse" 
                       data-bs-target="#navbarSupportedContent" 
                       aria-controls="navbarSupportedContent" 
                       aria-expanded="false" 
                       aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <NavLink activeClassName="menu_active" 
                              className="nav-link" 
                            aria-current="page" to="/About Us">
                              About Us
                            </NavLink >
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="menu_active" 
                             className="nav-link" to="/Video">
                              Video
                            </NavLink >
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="menu_active" 
                             className="nav-link" to="/Price List">
                              Price List
                            </NavLink >
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="menu_active" 
                              className="nav-link" to="/Floor Plan">
                              Floor Plan
                            </NavLink >
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="menu_active" 
                            className="nav-link" to="/Amenities">
                              Amenities
                            </NavLink >
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="menu_active" 
                            className="nav-link" to="/Location">
                              Location
                            </NavLink >
                          </li>
                          <li className="callbutton">
                            <a  
                             className="callbutton"  href="tel:+919718088999">
                               Call +91 9718088999
                            </a >
                          </li>
                        </ul>
                      </div>
                      
                  </nav>
                </div>
              </div>
            </div>
            
        </>
    )
}

export default Navigation;