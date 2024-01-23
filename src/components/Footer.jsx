import React from "react";
import instaLogo from "../images/Instagram Icon.png"
import facebookLogo from "../images/Facebook Icon.png"


export default function Footer () {
    return(
        <div className="footer--container">
            <img src={instaLogo} alt="" className= 'footer--image' onClick={redirectToInstagram}/> 
            <img src={facebookLogo} alt="" className= 'footer--image' onClick={redirectToFacebook}/>  
        </div>
    )
    function redirectToFacebook() {
        window.location.href = '';
    }
    function redirectToInstagram() {
        window.location.href = '';
    }
}