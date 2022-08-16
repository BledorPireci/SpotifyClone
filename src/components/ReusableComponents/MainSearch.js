import React from 'react';
import "./ReusableComponentsStyle/MainSearch.css";
import {
    Afro,
    Caribbean, Funk,
    Gaming,
    HipHop, Instrumental,
    InTheCar,
    Jazz, Latino,
    LiveEvent,
    Lol,
    MadeForYou,
    Metal,
    Party,
    Podcast, Punk, Rnb, Romance, Travel,
    Workout
} from "../../assets/Icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

export default function MainSearch(){
    const navigate = useNavigate();
    return(
        <>
            <div className="searchGrid">
                <div className="searchGridContainer">
                    <div className="SearchBar">
                        <div className="back">
                            <a onClick={() => navigate(-1)}><FontAwesomeIcon icon={faAngleLeft} className="back-icon"/></a>
                        </div>
                        <div className="forward">
                            <a onClick={() => navigate(1)}><FontAwesomeIcon icon={faAngleRight} className="forward-icon"/></a>
                        </div>
                        <div className="search-bar">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="zoom"/>
                            <input type="text" placeholder="Artists, songs or podcasts"/>
                        </div>
                    </div>
                    <h3 className="title">Browse all</h3>
                    <div className="GridPhotos">
                        <div className="girdPodcast">
                            <h3>Podcast</h3>
                            <Podcast/>
                        </div>
                        <div className="gridMadeforyou">
                            <h3>Made for you</h3>
                            <MadeForYou/>
                        </div>
                        <div className="gridLiveEvent">
                            <h3>Live Events</h3>
                            <LiveEvent/>
                        </div>
                        <div className="gridHiphop">
                            <h3>Hip-Hop</h3>
                            <HipHop/>
                        </div>
                        <div className="gridInCar">
                            <h3>In the car</h3>
                            <InTheCar/>
                        </div>
                        <div className="gridGaming">
                            <h3>Gaming</h3>
                            <Gaming/>
                        </div>
                        <div className="gridLol">
                            <h3>League of Legends</h3>
                            <Lol/>
                        </div>
                        <div className="gridWorkout">
                            <h3>Workout</h3>
                            <Workout/>
                        </div>
                        <div className="gridParty">
                            <h3>Party</h3>
                            <Party/>
                        </div>
                        <div className="gridMetal">
                            <h3>Metal</h3>
                            <Metal/>
                        </div>
                        <div className="gridJazz">
                            <h3>Jazz</h3>
                            <Jazz/>
                        </div>
                        <div className="gridRnb">
                            <h3>R&B</h3>
                            <Rnb/>
                        </div>
                        <div className="gridInstrumental">
                            <h3>Instrumental</h3>
                            <Instrumental/>
                        </div>
                        <div className="gridRomance">
                            <h3>Romance</h3>
                            <Romance/>
                        </div>
                        <div className="gridLatino">
                            <h3>Latino</h3>
                            <Latino/>
                        </div>
                        <div className="gridCaribbean">
                            <h3>Caribbean</h3>
                            <Caribbean/>
                        </div>
                        <div className="gridFunk">
                            <h3>Funk</h3>
                            <Funk/>
                        </div>
                        <div className="gridPunk">
                            <h3>Punk</h3>
                            <Punk/>
                        </div>
                        <div className="gridTravel">
                            <h3>Travel</h3>
                            <Travel/>
                        </div>
                        <div className="gridAfro">
                            <h3>Afro</h3>
                            <Afro/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}