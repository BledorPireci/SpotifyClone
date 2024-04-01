import React from "react";
import './ReusableComponentsStyle/LibraryAlbums.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import {Link} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import MainNavigation from "./MainNavigation";

export default function LibraryAlbums() {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <>
            <div className="Library-albums">
                <div className="albumsContainer">
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
                    <div className="albumContent">
                        <FontAwesomeIcon icon={faCircle} className="rrethi"/>
                        <FontAwesomeIcon icon={faCircle} className="rrethi2"/>
                    </div>
                    <div className="textAlbum">
                        <h1>Follow your first albumm</h1>
                        <p>Save Albums by tapping the heart icon.</p>
                        <button>Find Albums</button>
                    </div>
                </div>
            </div>
        </>
    )
}