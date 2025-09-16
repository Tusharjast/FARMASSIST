import React, { useRef } from 'react'
import"../index.css"
import { NavLink } from 'react-router-dom'

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";


const Navbar = (props) => {

    let hamburgerref=useRef();
    let menueref=useRef();

    return (
        <div className='navbar-container'>

            <div onClick={()=>{location.href="/Home"}} className="left">
                <div className="logo">
                    <img src="logo.PNG" alt="" />
                </div>
                <h1>FARMASSIST</h1>
            </div>

            <div className="right">
                
                <NavLink className={(e)=>{return e.isActive?"red":""}} to="/Home"><div className="item">{props.lang == "english" ? "Home" : "होम"}<div className="l"><h4>Go home</h4><h4>No home</h4></div></div></NavLink>

                <NavLink className={(e)=>{return e.isActive?"red":""}} to="/About"><div className="item">{props.lang == "english" ? "About" : "बारे मे"}<div className="l"><h4>Go home</h4><h4>No home</h4></div></div></NavLink>

                <NavLink className={(e)=>{return e.isActive?"red":""}} to="/Explore"><div className="item">{props.lang == "english" ? "Explore" : "खोजें"}<div className="l"><h4>Go home</h4><h4>No home</h4><h4>No  yuo home</h4></div></div></NavLink>

                <NavLink className={(e)=>{return e.isActive?"red":""}} to="/Connections"><div className="item">{props.lang == "english" ? "Connections" : "संपृक"}<div className="l"><h4>Go home</h4><h4>No home</h4><h4>No tug home</h4></div></div></NavLink>

            </div>

            <div className="buttons">
                <button onClick={()=>{props.lang=="english"?(props.s("hindi")):(props.s("english"))}}>{props.lang=="english"?"हिंदी":"English"}</button>
            </div>

            <div ref={hamburgerref} onClick={()=>{props.optref.current.setAttribute("style","transform: translate(1%,10px);")}} className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>

            

        </div>
    )
}

export default Navbar
