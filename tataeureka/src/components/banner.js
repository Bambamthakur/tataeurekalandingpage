import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RegistrationForm from "./registrationform";



 

const Banner = (props) => {
    return(
       <div className="container-fluid">
        <div className="banner">
        <section id="header" >
            
                <div className="row g-0">
                        <div className="col-lg-8 order-1 order-lg-1 width-device-width">
                       
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="./fslarge.jpg" className="img-fluid " alt="..." />  
                          </div>
                          <div class="carousel-item">
                            <img src="./fslarge1.jpg" className="img-fluid " alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src="./fslarge3.jpg" className="img-fluid" alt="..." />
                          </div>
                        </div>
                    </div>
                        

                        </div> 
                        <div className="col-md-4 order-2 order-lg-2 ">
                            <RegistrationForm />
                               
                        </div>
                        
                            
                </div> 
            
            
        </section>   
    </div>  
    </div>

       
            
    
        
    );  
};


export default Banner;