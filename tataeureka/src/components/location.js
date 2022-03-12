import React from "react";
import styles from './css/iframe.css'

const Location= () => {
    return(
        <div className="container" style={{marginTop:'80px'}}>
            <h3 className="header4">Location</h3>
            
            <div class="row g-0">
            <div className="col-12">
            <iframe class="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.981582144475!2d77.48142131744385!3d28.419812599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1f0e31cf62d%3A0x7bf8ba357276ee52!2sEureka%20Park%20-%20Tata%20Value%20Homes!5e0!3m2!1sen!2sin!4v1646914701097!5m2!1sen!2sin" 
            allowfullscreen="" loading="lazy"></iframe>
             
            </div>
            </div> 
            
        </div>

        
    )
}

export default Location;