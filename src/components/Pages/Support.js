import React from "react";
import '../Style/Support.css'
import NavigationBar from "../ReusableComponents/NavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Footer from "../ReusableComponents/footer";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/faAngleRight";
import {AccountHelp, AppHelp, DeviceHelp, PaymentHelp, PlanHelp, SafetyPrivacy} from "../../assets/Icons";


export default function SupportPage(){
    return (
        <>
            <div className="support-nav">
                <NavigationBar/>
            </div>
            <div className="container-support">
                <div className="support-elements">
                    <div className="firstsection">
                        <div className="innerContainer">
                            <h2>SPOTIFY SUPPORT</h2>
                            <h1>How can we help <br/> you?</h1>
                            <p><a href="">Log in</a> for faster help</p>
                        <div className="input-wrapper">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon"/>
                            <input type="text" placeholder="Search" className="search-field"/>
                        </div>
                        </div>
                    </div>

                    <div className="support-cards">
                        <div className="grid-cards">
                            <div className="pink-card">
                                <h3>Payment Help</h3>
                                <PaymentHelp />

                            </div>
                            <div className="red-card">
                                <h3>Plan Help</h3>
                                <PlanHelp/>
                            </div>
                            <div className="orange-card">
                                <h3>App Help</h3>
                                <AppHelp/>
                            </div>

                            <div className="green-card">
                                <h3>Device Help</h3>
                                <DeviceHelp/>
                            </div>
                            <div className="gray-card">
                                <h3>Safety & <br/>Privacy </h3>
                                <SafetyPrivacy/>
                            </div>
                            <div className="blue-card">
                                <h3>Account Help</h3>
                                <AccountHelp/>
                            </div>

                        </div>


                    </div>
                </div>
                <div className="quickHelp">
                    <div className="container-help">
                    <h1>Quick help</h1>
                        <ul>
                            <li><p>Can't reset password </p>            <FontAwesomeIcon icon={faAngleRight} className="rightAngle" />       </li>
                            <li><p>My account doesn't look right</p>    <FontAwesomeIcon icon={faAngleRight} className="rightAngle" />       </li>
                            <li><p>Can't remember login details</p>     <FontAwesomeIcon icon={faAngleRight} className="rightAngle" />       </li>
                            <li><p>Facebook login help </p>             <FontAwesomeIcon icon={faAngleRight} className="rightAngle" />       </li>
                            <li><p>Payment methods</p>                  <FontAwesomeIcon icon={faAngleRight} className="rightAngle" />       </li>
                            <li><p>Start or join Family plan </p>       <FontAwesomeIcon icon={faAngleRight} className="rightAngle" />       </li>
                        </ul>
                    </div>
                </div>
                <div className="lastsection">
                        <h1>Visit our Community</h1>
                    <p>Have questions? Find answers from our worldwide Community of expert fans!</p>
                    <input type="button" value="Go to Community" className="visit-button"/>
                </div>

            </div>
            <Footer />
        </>
    )
}