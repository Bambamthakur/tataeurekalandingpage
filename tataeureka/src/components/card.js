import React from "react";
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return(
        <>
        <div className="card" style={{width: '80%'}}>
            <div className="row g-0">
                <div className="col-2">
                    <img src={props.imgsrc} className='favicon-pricecard' />
                </div>
                <div className="col-8">
                    <p class="card-title">{props.title}</p>
                    <p class="card-text">{props.price}</p>
                    <NavLink to="" class="stretched-link"></NavLink>
                </div>
            </div>    
        </div>
        </>
    )
}

export default Card;