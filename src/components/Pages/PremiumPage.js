import React from "react";
import '../Style/PremiumPage.css'
import Footer from "../ReusableComponents/footer";
import NavigationBar from "../ReusableComponents/NavigationBar";
import {DownloadIcon, NoAdsIcon, PlayMusic, UnLimitedIcon} from "../../assets/Icons";


export default function PremiumPage(){
    return(
        <>
            <NavigationBar />
            <div className="main">

                    {/*First Section Start*/}
                    <div className="topside">
                        <div className="topContainer">
                            <h1 className="topH1">Get Premium free for 1 month</h1>
                            <h2 className="topH2">Just for 4.99$/month after. Cancel anytime.</h2>
                            <input type="button" value="GET STARTED" className="black-button"/>
                            <input type="button" value="View Plans" className="blue-button"/>
                            <small className="topsmall"><a className="topA" href="https://www.spotify.com/legal/premium-promotional-offer-terms"><br/><br/>Terms and conditions
                                apply.</a> 1 month free not available for users who have already tried Premium.</small>
                        </div>
                    </div>
                    {/*First Section End*/}


                     {/*Second Section Start*/}
                    <div className="botside">
                        <div className="botContainer">
                            <h1 className="botH1">Why go Premium?</h1>
                            <div className="cards">
                                <div className="card first-card">
                                    <DownloadIcon/>
                                    <div className="card-content">
                                        <h3>Download Music</h3>
                                        <p>Listen anywhere</p>
                                    </div>
                                </div>
                                <div className="card second-card">
                                    <NoAdsIcon/>
                                    <div className="card-content">
                                        <h3>Ad-free music listening.</h3>
                                        <p>Enjoy nonstop music.</p>
                                    </div>
                                </div>
                                 <div className="card third-card">
                                    <PlayMusic />
                                     <div className="card-content">
                                         <h3>Play any song.</h3>
                                        <p>Even on mobile.</p>
                                     </div>
                                 </div>
                                 <div className="card fourth-card">
                                    <UnLimitedIcon/>
                                     <div className="card-content">
                                         <h3>Unlimited skips.</h3>
                                         <p>Just hit next.</p>
                                     </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                {/*Second Section End*/}


            </div>

            <Footer />
        </>
    )
}