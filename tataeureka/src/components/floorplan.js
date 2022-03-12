import React from 'react'
import Floorplanimg from './data/floorplanimg';
import Card from './floorcard';
function Floorplan() {
  return (
    
         <div className="container col-12"  style={{marginTop:"100px"}}>
                <div className="row">
                    <h1 className='header4'>Floor Plan</h1>
                            
                            {
                                Floorplanimg.map((val) =>{
                                    return(
                                        
                                    <div className=" floor_card col-lg-6 col-sm-10 justify-content-center align-item-center flex-column"> 
                                    <Card
                                    imgsrc={val.imgsrc}
                                    />
                                    </div>
                                    
                                )})
                            }
                            
                            
                    
                </div>
            </div>
  )
}

export default Floorplan