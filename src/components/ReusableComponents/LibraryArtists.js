import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {
    BonJovi,
    FiveFingerDeathPunch,
    GunsNroses,
    ImPaulsive,
    LinkinPark,
    LyricalSon,
    McKresha, PopSmoke
} from "../../assets/Icons";
import "./ReusableComponentsStyle/LibraryArtists.css"
import MainNavigation from "./MainNavigation";

export default function LibraryArtists() {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");


    return (
        <>
            <div className="Library-artists">
                <div className="artistsContainer">
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
                    <h1 className="artistTitle">Artists</h1>
                    <div className="artistsCardsGrid">
                        <div className="artistsCards">
                            <div className="artistCardInside">
                                <div className="photoOfArtist">
                                    <BonJovi/>
                                </div>
                                <div className="infoForArtist">
                                    <h2>Bon Jovi</h2>
                                    <p>Artist</p>
                                </div>
                            </div>
                            <div className="artistCardInside">
                                <div className="photoOfArtist">
                                    <GunsNroses/>
                                </div>
                                <div className="infoForArtist">
                                    <h2>Guns N' Roses</h2>
                                    <p>Artist</p>
                                </div>
                            </div>
                            <div className="artistCardInside">
                                <div className="photoOfArtist">
                                    <LinkinPark/>
                                </div>
                                <div className="infoForArtist">
                                    <h2>Linkin Park</h2>
                                    <p>Artist</p>
                                </div>
                            </div>
                            <div className="artistCardInside">
                                <div className="photoOfArtist">
                                    <FiveFingerDeathPunch/>
                                </div>
                                <div className="infoForArtist">
                                    <h2>Five Finger Death Punch</h2>
                                    <p>Artist</p>
                                </div>
                            </div>
                            <div className="artistCardInside">
                                <div className="photoOfArtist">
                                    <LyricalSon/>
                                </div>
                                <div className="infoForArtist">
                                    <h2>Lyrical Son</h2>
                                    <p>Artist</p>
                                </div>
                            </div>
                        </div>
                        <div className="artistsCards">
                            <div className="artistCardInside">
                                <div className="photoOfArtist">
                                    <McKresha/>
                                </div>
                                <div className="infoForArtist">
                                    <h2>Mc Kresha</h2>
                                    <p>Artist</p>
                                </div>
                            </div>
                            <div className="artistCardInside">
                                <div className="photoOfArtist">
                                    <PopSmoke/>
                                </div>
                                <div className="infoForArtist">
                                    <h2>Pop Smoke</h2>
                                    <p>Artist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}