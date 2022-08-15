import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import './ReusableComponentsStyle/LibraryPodcasts.css'
import {ImPaulsive, JoeRogan, Murders, OnPurpose, StreamSvg} from "../../assets/Icons";
import {Link, useLocation, useNavigate} from "react-router-dom";


export default function LibraryPodcasts(){

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    console.log('splitLocation:', splitLocation)

    const navigate = useNavigate();
    return(
        <>
            <div className="Library-podcasts">
                <div className="podcastsContainer">
                    <div className="libraryNav">
                        <div className="back">
                            <a onClick={() => navigate(-1)}><FontAwesomeIcon icon={faAngleLeft} className="back-icon"/></a>
                        </div>
                        <div className="forward">
                            <a onClick={() => navigate(1)}><FontAwesomeIcon icon={faAngleRight} className="forward-icon"/></a>
                        </div>
                        <div className="libraryLinks">
                            <ul>
                                <li className={splitLocation[1] === "mainLibrary" ? "active" : ""}><Link to="/mainLibrary">Playlists</Link></li>
                                <li className={splitLocation[1] === "LibraryPodcasts" ? "active" : ""}><Link to="/LibraryPodcasts">Podcasts</Link></li>
                                <li className={splitLocation[1] === "LibraryArtists" ? "active" : ""}><Link to="/LibraryArtists">Artists</Link></li>
                                <li className={splitLocation[1] === "LibraryAlbums" ? "active" : ""}><Link to="/LibraryAlbums">Albums</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="podcastTopsite">
                        <div className="podcastTopsiteContainer">
                            <StreamSvg/>
                            <h1>Follow your first podcast</h1>
                            <p>Follow podcasts you like by tapping the follow button.</p>
                            <button className="findPodcasts">Find podcasts</button>
                        </div>
                    </div>
                    <h2 className="soloH2">Top Podcasts</h2>
                    <div className="podcastBotsite">
                        <div className="podcastCards">
                            <div className="podcastCardInside">
                                <div className="photoPart">
                                    <ImPaulsive/>
                                </div>
                                <div className="infoPart">
                                    <h2>ImPaulsive</h2>
                                    <p>By Logan Paul</p>
                                </div>
                            </div>
                            <div className="podcastCardInside">
                                <div className="photoPart">
                                    <OnPurpose/>
                                </div>
                                <div className="infoPart">
                                    <h2>On Purpose</h2>
                                    <p>By Jay Shetty</p>
                                </div>
                            </div>
                            <div className="podcastCardInside">
                                <div className="photoPart">
                                    <JoeRogan/>
                                </div>
                                <div className="infoPart">
                                    <h2>The Joe Rogan</h2>
                                    <p>By Joe Rogan</p>
                                </div>
                            </div>
                            <div className="podcastCardInside">
                                <div className="photoPart">
                                    <Murders/>
                                </div>
                                <div className="infoPart">
                                    <h2>Unsolved Murders</h2>
                                    <p>By Xhevdet Kryeziu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}