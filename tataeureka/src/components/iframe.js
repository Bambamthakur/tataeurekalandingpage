import React from "react";
import styles from './css/iframe.css'

const Iframecom = () => {
    return(
        <div className="container" style={{marginTop:'80px'}}>
            <h3 className="header4">Our Video</h3>
            
            <div class="row g-0">
            <div className="col-12">
              <iframe
               class="iframe"  src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
            </div>
            </div> 
            
        </div>

        
    )
}

export default Iframecom;