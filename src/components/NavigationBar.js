import React, {useState} from "react";
import {UserIcon} from "../assets/Icons";
import './Style/nav-bar.css';
import NavigationDrawer from "./NavigationDrawer";



function NavigationBar() {
    // const toggleButton = document.getElementsByClassName('toggleButton')[0]
    // const navbarLinks = document.getElementsByClassName('navbar-links')
    // const navbarLinks = document.getElementsByClassName('mobile-drawer-menu')
    //
    // function handleClick(e) {
    //     e.preventDefault();
    //     navbarLinks.item(0).classList.toggle('active')
    // }

    const handleClick = ()=>{
        // console.log('test');
    }
    return(
        <nav className="Navbar">
            <div className="navContainer">
                    <UserIcon />
                {/*{showDrawer && <NavigationDrawer/>}*/}
                    <div className="navbar-links">
                        <a href="" className="toggleButton" onClick={handleClick()}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </a>
                        <ul>
                            <li><a href="/premiumPage">Premium</a></li>
                            <li><a href="/supportPage">Support</a></li>
                            <li><a href="/downloadPage">Download</a></li>
                            <li><a href="/registerPage">Sign up</a></li>
                            <li><a href="/loginPage">Log in</a></li>
                        </ul>
                    </div>

            </div>
        </nav>

    )
}
export default NavigationBar;
