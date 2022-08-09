import React from "react";
import './ReusableComponentsStyle/NavigationDrawer.css'
import {UserIcon} from "../../assets/Icons";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
export default function NavigationDrawer(){
    return(
        <>
            <div className="NavDrawer">
                <div className="navDrawList">
                    <FontAwesomeIcon icon={faCircleXmark} className="closeIcon"/>
                        <ul>
                            <li><a>Premium</a></li>
                            <li><a>Support</a></li>
                            <li><a>Download</a></li>
                            <li><a>Sign up</a></li>
                            <li><a>Log in</a></li>
                        </ul>
                    <div className="logoClass">
                        <UserIcon/>
                    </div>
                </div>
            </div>
        </>
    )
}