import React from "react";
import './Style/footer.css';
import {FacebookIcon, InstagramIcon, TwitterIcon, UserIcon} from "../assets/Icons";


export default function Footer() {
    return (
        <>
            <footer>
                <div className="footerContainer">
                        <UserIcon/>
                    <div className="footerContent">
                        <div className="companyClass">
                            <h5>COMPANY</h5>
                            <div className="companyList">
                                <a href="https://www.spotify.com/al/about-us/contact/">About</a>
                                <a href="https://www.lifeatspotify.com">Jobs</a>
                                <a href="#">For the Record</a>
                            </div>
                        </div>
                        <div className="communityClass">
                            <h5>COMMUNITIES</h5>
                            <div className="companyList">
                                <a href="https://artists.spotify.com">For Artists</a>
                                <a href="https://developer.spotify.com">Developers</a>
                                <a href="https://ads.spotify.com">Advertising</a>
                                <a href="https://investors.spotify.com">Investors</a>
                                <a href="https://spotifyforvendors.com/">Vendors</a>
                            </div>
                        </div>
                        <div className="linksClass">
                            <h5>USEFUL LINKS</h5>
                            <div className="companyList">
                                <a href="/supportPage">Support</a>
                                <a href="#">Web Player</a>
                                <a href="https://www.spotify.com/al/free/">Free Mobile App</a>
                            </div>
                        </div>
                        <div className="socials">
                            <div className="social-icons">
                            <a href="https://www.instagram.com/spotify/?hl=en"><InstagramIcon/></a>
                            <a href="https://www.facebook.com/Spotify/"><FacebookIcon/></a>
                            <a href="https://twitter.com/Spotify?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><TwitterIcon/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}