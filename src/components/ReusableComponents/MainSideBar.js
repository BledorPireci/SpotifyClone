import React from "react";
import "./ReusableComponentsStyle/MainSideBar.css"
import {UserIcon} from "../../assets/Icons";

export default function MainSideBar(){
    return(
        <>
            <div className="SideBar">
                <div className="sideBarContainer">
                    <UserIcon/>
                    <div className="sideBarList">
                        <ul className="sideList">
                            <li>Home</li>
                            <li>Search</li>
                            <li>Your Library</li>
                        </ul>
                        <ul className="playlist">
                            <li>Create Playlist</li>
                            <li>Liked Songs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}