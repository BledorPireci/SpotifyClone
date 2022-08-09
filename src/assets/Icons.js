import React from "react";
import user from './spotify.png'
import facebook from './facebook.png'
import twitter from './twitter.png'
import instagram from './instagram.png'
import userB from './spotify-black.png'
import download from './download.png'
import noAds from './no-ads.png'
import Unlimited from './unlimited-skips.png'
import playMusic from './play-music.png'
import laptop from './laptop.svg'
import appStore from './download-appstore.svg'
import playStore from './download-playstore.svg'
import allDevices from './all-devices.svg'
import paymentHelp from './payment.png'
import planHelp from './planhelp.png'
import appHelp from './apphelp.png'
import deviceHelp from './devicehelp.png'
import safetyPrivacy from './safety.png'
import accountHelp from './accounthelp.png'

export const UserIcon = () => <img src={user} className="logo"/>
export const FacebookIcon = () => <img src={facebook} className="logo2"/>
export const TwitterIcon = () => <img src={twitter} className="logo3"/>
export const InstagramIcon = () => <img src={instagram} className="logo4"/>
export const UserIconBlack = () => <img src={userB} className="logo5"/>
export const NoAdsIcon= () => <img src={noAds} className="noAds"/>
export const DownloadIcon= () => <img src={download} className="download"/>
export const UnLimitedIcon= () => <img src={Unlimited} className="unlimited"/>
export const PlayMusic= () => <img src={playMusic} className="playMusic"/>
export const LaptopIcon= () => <img src={laptop} className="laptop"/>
export const DownloadAppStore =() => <img src={appStore} className="appStore"/>
export const DownloadPlayStore =() => <img src={playStore} className="playStore"/>
export const AllDevices =() => <img src={allDevices} className="allDevices"/>
export const PaymentHelp =() => <img src={paymentHelp} className="paymentHelp"/>
export const PlanHelp =() => <img src={planHelp} className="planHelp"/>
export const AppHelp =() => <img src={appHelp} className={"appHelp"}/>
export const DeviceHelp =() => <img src={deviceHelp} className={"deviceHelp"}/>
export const SafetyPrivacy =() => <img src={safetyPrivacy} className={"safetyPrivacy"}/>
export const AccountHelp =() => <img src={accountHelp} className={"accountHelp"}/>