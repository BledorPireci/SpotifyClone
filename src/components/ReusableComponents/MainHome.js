import React from "react";
import "./ReusableComponentsStyle/MainHome.css"
import {
    AdrenalineWorkout,
    AfterHours, AllOut2010s, AllOut80s, BeastMode,
    ChillMix, HappyCountry,
    HappyMix, HappyPerfectDay, HappySwagger, HappyVanLife, HeavyMetal,
    MoodyMix, MotivationMix,
    MuzikEAlltis,
    NinetiesMix, OOsRock,
    PlanetHer, RockClassics,
    RockMix, RockUrBody, RunningToRock, UltraGaming, Usa
} from "../../assets/Icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

export default function MainHome(){
    const navigate = useNavigate();
    return(
        <>
            <div className="main-home">
                <div className="mainHome-container">
                    <div className="madeForYou">
                        <div className="libraryNav">
                            <div className="back">
                                <a onClick={() => navigate(-1)}><FontAwesomeIcon icon={faAngleLeft} className="back-icon"/></a>
                            </div>
                            <div className="forward">
                                <a onClick={() => navigate(1)}><FontAwesomeIcon icon={faAngleRight} className="forward-icon"/></a>
                            </div>
                        </div>
                        <h1>Daily Mixes</h1>
                        <div className="madeForYou-grid">
                            <div className="madeforU-Card">
                                <NinetiesMix/>
                                <h2>90s Mix</h2>
                                <p>Eazy-E , Dr.Dre , SnoopDogg</p>
                            </div>
                            <div className="madeforU-Card">
                                <ChillMix/>
                                <h2>Chill Mix</h2>
                                <p>McKresha and more</p>
                            </div>
                            <div className="madeforU-Card">
                                <HappyMix/>
                                <h2>Happy Mix</h2>
                                <p>Harry Styles , Ed Sheeran and more</p>
                            </div>
                            <div className="madeforU-Card">
                                <RockMix/>
                                <h2>Rock Mix</h2>
                                <p>Nirvana , PinkFloyd , Bon Jovi and more</p>
                            </div>
                            <div className="madeforU-Card">
                                <MoodyMix/>
                                <h2>Moody Mix</h2>
                                <p>Yll Limani, Imagine Dragons and more</p>
                            </div>
                        </div>
                        <h1>Popular Albums</h1>
                        <div className="madeForYou-grid">
                            <div className="madeforU-Card">
                                <MuzikEAlltis/>
                                <h2>Muzike e Alltis</h2>
                                <p>LyricalSon & McKresha</p>
                            </div>
                            <div className="madeforU-Card">
                                <AfterHours/>
                                <h2>After Hours</h2>
                                <p>The Weekend</p>
                            </div>
                            <div className="madeforU-Card">
                                <PlanetHer/>
                                <h2>Planet Her</h2>
                                <p>Doja Cat</p>
                            </div>
                            <div className="madeforU-Card">
                                <Usa/>
                                <h2>United States of Albania</h2>
                                <p>LyricalSon & McKresha</p>
                            </div>
                        </div>
                            <h1>Spotify Playlists</h1>
                        <div className="madeForYou-grid">
                            <div className="madeforU-Card">
                                <AllOut80s/>
                                <h2>All Out 80s</h2>
                                <p>The biggest songs of the 1980s.</p>
                            </div>
                            <div className="madeforU-Card">
                                <RockClassics/>
                                <h2>Rock Classics</h2>
                                <p>Rock Legens & epic songs</p>
                            </div>
                            <div className="madeforU-Card">
                                <AllOut2010s/>
                                <h2>All out 2010s</h2>
                                <p>The biggest songs of 2010s.</p>
                            </div>
                            <div className="madeforU-Card">
                                <OOsRock/>
                                <h2>Rock Anthems</h2>
                                <p>The biggest rock songs of 00s.</p>
                            </div>
                            <div className="madeforU-Card">
                                <HeavyMetal/>
                                <h2>Heavy Metal</h2>
                                <p>The biggest Heavy Metal songs.</p>
                            </div>
                            <div className="madeforU-Card">
                                <UltraGaming/>
                                <h2>Ultra Gaming</h2>
                                <p>The best songs for gaming.</p>
                            </div>
                        </div>
                        <h1>Workout</h1>
                        <div className="madeForYou-grid">
                            <div className="madeforU-Card">
                                <BeastMode/>
                                <h2>Beast Mode</h2>
                                <p>Get your beast mode on.</p>
                            </div>
                            <div className="madeforU-Card">
                                <MotivationMix/>
                                <h2>Motivation Mix</h2>
                                <p>Uplifting and energetic music</p>
                            </div>
                            <div className="madeforU-Card">
                                <RockUrBody/>
                                <h2>Rock Your Body</h2>
                                <p>Burn off all those beers from last night</p>
                            </div>
                            <div className="madeforU-Card">
                                <AdrenalineWorkout/>
                                <h2>Adrenaline Workout</h2>
                                <p>Workout till you bench-press your friend</p>
                            </div>
                            <div className="madeforU-Card">
                                <RunningToRock/>
                                <h2>Running to rock</h2>
                                <p>Run mf run</p>
                            </div>
                        </div>
                        <h1>Happy</h1>
                        <div className="madeForYou-grid">
                            <div className="madeforU-Card">
                                <HappyMix/>
                                <h2>Happy Mix</h2>
                                <p>Enjoy these songs</p>
                            </div>
                            <div className="madeforU-Card">
                                <HappyCountry/>
                                <h2>Happy Country</h2>
                                <p>Be happy with country songs</p>
                            </div>
                            <div className="madeforU-Card">
                                <HappySwagger/>
                                <h2>Happy Swagger</h2>
                                <p>Be happy with swagg</p>
                            </div>
                            <div className="madeforU-Card">
                                <HappyPerfectDay/>
                                <h2>Happy Perfect Day</h2>
                                <p>Enjoy your perfect day</p>
                            </div>
                            <div className="madeforU-Card">
                                <HappyVanLife/>
                                <h2>Happy Van Life</h2>
                                <p>Enjoy your van trip</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}