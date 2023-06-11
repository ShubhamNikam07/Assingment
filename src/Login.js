import React from "react";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
export default function Login()
{
    return(
    <>
    <Navbar/>
    <div className="Login">
        <form style={{border:'solid black',borderRadius:'2px',textAlign:'center',width:'50%',marginTop:'10%',marginLeft:'15%'}}>
            <h4>Welocome to Login/Signup Page</h4>
            <h6>Please Enter the Details</h6>
            <div className="details">
            <input type="number" id="phone" placeholder="10 digit phone number"/>
            <br/>
            <Link to="/Form" id="continue" className="col-sm-3 bg-primary text-white" style={{marginLeft:'37%',display:'block',padding:'2px',marginTop:'10px', textAlign:'center',border:'2px solid',borderRadius:'3px',textDecoration:'none'}}>Continue</Link>
            <br></br>
            <input className=" col-sm-3 bg-danger text-white" style={{marginLeft:'20px',textAlign:'center',borderRadius:'2px'}} type="submit" value={'Google'} id="Google"/>
            <input className=" col-sm-3 bg-primary text-white" style={{marginLeft:'20px',textAlign:'center',borderRadius:'2px'}} type="email" value={'FaceBook'} id="FaceBook"/>
            </div>
            <div className="note"><b>Note</b>:if You have Enterd emailId/Phone No which is not registred on this Account then thos page will automatically go for SignUp </div>
        </form>
    </div>
    </>
    )
}