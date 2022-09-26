import React, {useState} from "react";
import {UserIcon} from "../../assets/Icons";
import './ReusableComponentsStyle/nav-bar.css';
import NavigationDrawer from "./NavigationDrawer";

function NavigationBar() {

    const CLIENT_ID ="a29dd3741c0e45d29cab62083a762050"
    const REDIRECT_URI = "http://localhost:3000/mainHome"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;




    const[toggleMenu, setToggleMenu]= useState(false);

    const handleClick = ()=>{
        setToggleMenu(!toggleMenu);
    }

    return(
        <nav className="Navbar">
            <div className="navContainer">
                    <a href="/">
                        <UserIcon />
                    </a>
                    <div className="navbar-links">
                        <a href="#" className="toggleButton" onClick={handleClick}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </a>
                        <ul>
                            <li><a href="/premiumPage">Premium</a></li>
                            <li><a href="/supportPage">Support</a></li>
                            <li><a href="/downloadPage">Download</a></li>
                            <li>
                                <a href={URL} className="link-to-spotify">
                                    <span className="btn-loginWithSpotify">Log in</span>
                                </a>
                            </li>
                        </ul>
                    </div>

            </div>
            {toggleMenu && <NavigationDrawer/>}
        </nav>

    )
}
export default NavigationBar;
