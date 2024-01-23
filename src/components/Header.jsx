import React from "react";
import profileLogo from "../images/profile-logo.jpg"
export default function Header() {
    return (
        <div className="header--container" >
            <img src={profileLogo} className="overlay-image" alt="" />
        </div>
    )
}