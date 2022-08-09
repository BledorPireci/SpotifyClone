import React from "react";
import '../Style/Download.css';
import NavigationBar from "../ReusableComponents/NavigationBar";
import Footer from "../ReusableComponents/footer";
import {AllDevices, DownloadAppStore, DownloadPlayStore, LaptopIcon} from "../../assets/Icons";

export default function Download(){
    return(
        <>
            <NavigationBar/>
            <div className="main-download">
                {/*first container*/}
                <div className="upper">
                    <div className="container-download">
                          <LaptopIcon />
                            <h1>Download Spotify</h1>
                            <p>Play millions of songs and podcasts on your device.</p>
                            <input className="download-button" type="button" value="Download"/>
                    </div>
                </div>
                <div className="lower">
                    <div className="container-download">
                        <h2>Bring your music to mobile and tablet, too.</h2>
                        <p>Listening on your phone or tablet is free, easy, and fun.</p>

                        <div className="downloads">
                            <DownloadAppStore />
                            <DownloadPlayStore/>
                        </div>
                    </div>
                </div>
                <div className="black-section">
                    <div className="container-download">
                        <AllDevices />
                        <h1>One account, listen everywhere.</h1>
                        <div className="dev-list">
                            <ul>
                                <li>MOBILE</li>
                                <li>COMPUTER</li>
                                <li>TABLET</li>
                                <li><a href="">CAR</a> </li>
                                <li><a href="">PLAYSTATION®</a></li>
                                <li><a href="">XBOX</a></li>
                                <li><a href="">TV</a></li>
                                <li><a href="">SPEAKER</a></li>
                                <li><a href="">WEB PLAYER</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}