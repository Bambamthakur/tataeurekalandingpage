import React from "react";
import { NavLink } from 'react-router-dom';



const Card = (props) => {
    return(
        <div className="floorcard">
            <div className="col-md mx-auto">
            <div className="card" >
                <img src={props.imgsrc} className="card-img-top" alt="..."  />
               
                </div>
            </div>
        </div>
    )
}

export default Card;