import React from "react";
import "./ReusableComponentsStyle/MainSideBar.css"
import {UserIcon} from "../../assets/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBook, faCirclePlus, faHouse, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {faGratipay} from "@fortawesome/free-brands-svg-icons";

export default function MainSideBar(){
    return(
        <>
            <div className="SideBar">
                <div className="sideLogo">
                    <UserIcon/>
                </div>

                <div className="sideBarContainer">
                    <div className="sideBarList">
                        <ul className="sideList">
                            <li><a href="/mainHome"><FontAwesomeIcon icon={faHouse} className="home-icon"/> Home</a></li>
                            <li><a href="/mainSearch"><FontAwesomeIcon icon={faMagnifyingGlass} className="search-Icon"/>Search</a></li>
                            <li><a href="/mainLibrary"><FontAwesomeIcon icon={faBook} className="library-icon"/> Your Library</a></li>
                        </ul>
                        <ul className="playlist">
                            <li><a><FontAwesomeIcon icon={faCirclePlus} className="newPlaylist-icon"/> Create Playlist</a></li>
                            <li><a><FontAwesomeIcon icon={faGratipay} className="liked-icon" />Liked Songs</a></li>
                        </ul>
                    </div>
                    <a className="playlist-link">My Playlist #1</a>
                </div>
            </div>
        </>
    )
}