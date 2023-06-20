import React, { useEffect, useState } from "react";
import './Nav.css';
import {useNavigate} from "react-router-dom";

function Nav(){

const[show,handleshow]=useState(false);
const history =useNavigate();

const transitionNavBar=()=>{
    if(window.scrollY>100){
        handleshow(true);
    }
    else{
        handleshow(false);
    }
}

useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar)
    return()=>window.removeEventListener('scroll',transitionNavBar)
},[])
    return(
        <div className={`nav ${show &&'nav__black'}`}>
            <div className="nav__contents">
                <img 
                    onClick={()=>history("/")}
                    className="nav__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
                    alt="">
                </img>
                <img 
                    onClick={()=>history("/profile")}
                    className="nav__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                    alt="">
                </img>
            </div>
               
        </div>
    )
}

export default Nav;