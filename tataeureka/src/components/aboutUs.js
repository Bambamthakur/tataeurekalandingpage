import { Button } from "bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Text } from 'theme-ui';


const list = [
    'Residential Apartments',
    'Sector 150, Noida',
    '70 Lac',
  ];

const AboutUs = () => {

  

    return(
        <div className='LeadFatching' style={{marginTop:"80px"}}>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid-0 nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-lg-6 order-1 order-lg-1 header-img width-device-width">
                            <img className="img-fluid" src="./about-img.jpg" alt="about"/>
                        </div>
                        <div className="col-md-6 col-sm-10 pt-lg-0 order-2 order-lg-2 d-flex   flex-column">
                            <h4 className="header1">About Us</h4>
                            <h2 className='header2'>TATA EUREKA PARK</h2>
                            <p1 className='para1 my-3'>
                            Nestled in one of the fastest growing premium locations of Noida, Eureka Park is a perfect fit for you and your family!

                            Created with the delightful combination of smart landscaping, smart design, smart location, home automation and a plethora of lifestyle amenities, the HomeSmartHomes at Eureka Park are designed to fulfil all your wishes.

                            Be it being connected to world class entertainment, healthcare, and educational hubs, or enjoying serene walks in the midst of nature, or just reveling in the community of like minded families. Ask, and Eureka Park will not disappoint.
                            </p1>
                            
                            <div>

                            <ul className="bulletlist">
                              {list.map((item, i) => (
                                <Text as="li" key={i}>
                                  <CheckCircleIcon
                                    sx={{ color: '#3CC68A', mr: 2 }}
                                    size="20px"
                                  />
                                  {item}
                                </Text>
                              ))}
                            </ul>
                            </div> 

                            
                            <NavLink  
                             className="button"  to="/RegistrationForm">
                              Download Broucher
                            </NavLink >
                            
                          


                               
                        </div>
                        
                    </div>         
                </div> 
            </div>
            </div>
        </section>
        
         
        </div>
    )
}

export default AboutUs;