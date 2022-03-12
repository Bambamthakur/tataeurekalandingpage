import React from "react";


const Dashboard = () => {
    return(
        <div className='Dashboard' style={{marginTop:"80px"}}>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid-0 nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-lg-5 order-1 order-lg-1 header-img width-device-width">
                            <img className="img-fluid" src="./dashboard.png" alt="notification"/>
                        </div>
                        <div className="col-md-7 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center align-items-center flex-column">
                            <h3 className='header1'>DASHBOARD & REPORTS</h3>
                            <p1 className='my-3'>
                            Get detailed dashboard and management reports. Our Real Estate CRM provides status wise, lead source wise and many more options to regularly check your sales growth.
                             </p1>
                               
                        </div>
                        
                    </div>         
                </div> 
            </div>
            </div>
        </section>
        
         
        </div>
    )
}

export default Dashboard;