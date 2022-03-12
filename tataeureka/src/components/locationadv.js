import React from "react";
import { NavLink } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Text } from 'theme-ui';

const list = [
    'Well Connected Through Noida - Greater Noida Expressway',
    'Hub of the best global companies',
    'Proposed Faridabad-Noida-Ghaziabad Expressway',
    'World class education hub',
    'Near 148 Metro Stataion Future Ready Location',
    'Shopping Malls & Multiplexes'
  ];

const LocationAdv = () => {
    return(
        <div className='LocationAdv' style={{marginTop:"150px"}}>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid-0 nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-7 pt-lg-0 order-2 order-lg-1 d-flex   flex-column">
                          <p className="header1">Our Neighbour</p>
                           <h3 className='header2'>All Your Destinations <br />within hour</h3>
                            <p1 className='para1' pd-5>
                            Goodrej woods is conveniently located near a number of major destinations. Sector 43 is a premium area, 
                            located just few kilometres from the world trade tower, 
                            the Noida - Greater Noida expressway and with excellent connection to Delhi and the rest of the NCR.
                            </p1>

                            <div>

                            <ul className="bulletlist">
                              {list.map((item, i) => (
                                
                                <Text className="bulletlist1" as="li" key={i}>
                                  <CheckCircleIcon
                                    sx={{ color: '#3CC68A', mr: 2 }}
                                    size="20px"
                                  />
                                  {item}
                                </Text>
                                
                              ))}
                            </ul>
                            </div>  
                        </div>
                        <div className="col-lg-5 order-1 order-lg-2 header-img width-device-width">
                            <img className="img-fluid" src="./location-map.jpg" alt="leads"/>
                        </div>
                    </div>         
                </div> 
            </div>
            </div>
        </section>
        
         
        </div>
    )
}

export default LocationAdv;