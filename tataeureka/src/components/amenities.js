import React from 'react'
import Amenitiesimg from './data/aminities';
import Card from './floorcard';
function Amenities() {
  return (
    
         <div className="container col-12"  style={{marginTop:"100px"}}>
                <div className="row">
                    <h1 className='header4'>Amenities</h1>
                    <p className='para1'>Nestled at the prominent location of Sector 1 Noida Extension-Greater Noida, 
                    every inch of JS Roop Homes has been crafted to deliver a world-class, holistic living experience. 
                    Thoughtfully designed homes, lush greens, innumerable once-in-a-lifetime experiences, 
                    and much more waiting just around the corner, welcome to a life worthy of who you are.</p>
                            
                            {
                                Amenitiesimg.map((val) =>{
                                    return(
                                        
                                    <div className=" floor_card col-lg-4 col-sm-10 justify-content-center align-item-center flex-column"> 
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

export default Amenities