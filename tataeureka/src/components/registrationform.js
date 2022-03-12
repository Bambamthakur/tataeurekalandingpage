
import React, { useState } from "react";
import Axios from "axios";
 
const RegistrationForm=()=>{
    
    // const [data, setData]=useState({
    //     name:"",
    //     email:"",
    //     mobile:""
    // });

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")

    
    // const handleChange=(e)=>{
        
        
    //     setData({[e.target.name]:e.target.value})
        
    //     }

    const handleSubmit=(e)=>{
        
        e.preventDefault();

        const data = { 
            name : name,
            email : email,
            mobile : mobile
        }
        console.log(data)
        
        fetch('url',{
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            
          },body:JSON.stringify({
            name : name,
            email : email,
            mobile : mobile
          })})
        
        .then((res) =>{
            console.log(res);
        })
        .catch((res) =>{
            console.log(res);
        })
        

    }

    return(
        <div className="container">
        <div className="Registration">
        <div className="header">
            <p className="header4">EUREKA PARK</p>
            <p className="header3">Sector 150 Noida</p>
        </div>    
            
            <from method="Post"  >
            <div className="form-group">
                <label htmlFor="name">
                
                </label>
                <input name="name" className="form-control" type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Your Name"  />
            </div>

            <div className="form-group">
                <label htmlFor="email">
                
                </label>
                <input name="email" className="form-control" type="text"  value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Your Email" />
                
            </div>

            <div className="form-group">
                <label htmlFor="">
                
                </label>
                <input name="mobile" className="form-control" type="text"  value={mobile} onChange={(e)=>{setMobile(e.target.value)}} placeholder="Enter Your Phone Number" />
            </div>
            <button type="button" class="button"onClick={handleSubmit}>Submit</button>
            
            </from> 
            </div>
        </div>
    )
    
}

export default RegistrationForm;
