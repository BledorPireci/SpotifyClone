import React from "react";
import "./ReusableComponentsStyle/MainLibrary.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faMusic, faPlayCircle} from "@fortawesome/free-solid-svg-icons";

export default function MainLibrary(){
    return(
        <>
            <div className="library">
                <div className="container-library">
                    <div className="libraryNav">
                        <div className="back">
                            <FontAwesomeIcon icon={faAngleLeft} className="back-icon"/>
                        </div>
                        <div className="forward">
                            <FontAwesomeIcon icon={faAngleRight} className="forward-icon"/>
                        </div>
                        <div className="libraryLinks">
                            <ul>
                                <li><a href="#">Playlists</a></li>
                                <li><a href="#">Podcasts</a></li>
                                <li><a href="#">Artists</a></li>
                                <li><a href="#">Albums</a></li>
                            </ul>
                        </div>
                    </div>
                    <h3>Playlists</h3>
                    <div className="allLists">
                        <div className="libraryContent">
                            <div className="LikedSongs">
                                <h1>Liked Songs</h1>
                                <p>0 liked songs</p>
                                <FontAwesomeIcon icon={faPlayCircle} className="hover-play"/>
                            </div>
                        </div>
                        <div className="myPlaylist">
                            <div className="myPlaylistBox">
                                <div className="logoPart">
                                    <FontAwesomeIcon icon={faMusic} className="musicIcon"/>
                                </div>
                                <div className="textPart">
                                    <h2>My Playlist 1</h2>
                                    <p>By BledorPireci</p>
                                    <FontAwesomeIcon icon={faPlayCircle} className="hover-play-2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}