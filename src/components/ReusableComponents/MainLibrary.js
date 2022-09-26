import React from "react";
import "./ReusableComponentsStyle/MainLibrary.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMusic, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {Link, useLocation} from "react-router-dom";
import MainNavigation from "./MainNavigation";

export default function MainLibrary(){

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return(
        <>
            <div className="library">
                <div className="container-library">
                    <div className="libraryNav">
                        <MainNavigation/>
                        <div className="libraryLinks">
                            <ul>
                                <li className={splitLocation[1] === "mainLibrary" ? "active" : ""}><Link to="/mainLibrary">Playlists</Link></li>
                                <li className={splitLocation[1] === "LibraryPodcasts" ? "active" : ""}><Link to="/LibraryPodcasts">Podcasts</Link></li>
                                <li className={splitLocation[1] === "LibraryArtists" ? "active" : ""}><Link to="/LibraryArtists">Artists</Link></li>
                                <li className={splitLocation[1] === "LibraryAlbums" ? "active" : ""}><Link to="/LibraryAlbums">Albums</Link></li>
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