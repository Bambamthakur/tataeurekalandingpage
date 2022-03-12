import React from "react";
import Card from "./card";
import Pricedata from "./data/pricedata";

const PriceList = () => {
    return(
        <div className='PriceList' style={{marginTop:"80px"}}>
        <section id="header" className="header">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row">
                        <div className="col-md-6  order-1 order-lg-1 header-img d-flex align-item-center justify-content-center  width-device-width flex-column">
                            <img className="img-fluid" src="./dashboard.png" alt="notification"/>
                        </div>
                        <div className="col-md-5  order-2 order-lg-2 PriceList">
                            <h3 className='header1'>Pricing</h3>
                            <h1 className="header2">PRICE LIST</h1>
                            <p className="para1">We provide you with the affordable prices for a unique luxurious lifestyle<br /> in Greater Noida West. 
                                                 Easy payment process and a hassle free paper work</p>
                            <div className="row">
                            {
                                Pricedata.map((val) =>{
                                    return <Card 
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    price={val.price} />
                                })
                            }
                            </div>
                               
                        </div>
                        
                    </div>         
                </div> 
            </div>
            </div>
        </section>
        
         
        </div>
    )
}

export default PriceList;