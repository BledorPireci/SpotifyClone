import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import OpeninWeb from "./components/Pages/OpenInWeb"
import PremiumPage from "./components/Pages/PremiumPage";
import Footer from "./components/ReusableComponents/footer";
import NavigationBar from "./components/ReusableComponents/NavigationBar";
import "./index.css";
import DownloadPage from "./components/Pages/Download";
import SupportPage from "./components/Pages/Support";
import RegisterPage from "./components/Pages/Register"
import LoginPage from "./components/Pages/Login"
import NavigationDrawer from "./components/ReusableComponents/NavigationDrawer"
import MainSideBar from './components/ReusableComponents/MainSideBar'
import MusicStatusBar from "./components/ReusableComponents/MusicStatusBar";
import MainPage from "./components/Pages/MainPage";
import MainSearch from "./components/ReusableComponents/MainSearch";
import MainHome from "./components/ReusableComponents/MainHome";
import MainLibrary from "./components/ReusableComponents/MainLibrary";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<OpeninWeb/>}/>
                    <Route path="/premiumPage" element={<PremiumPage/>}/>
                    <Route path="/footer" element={<Footer/>}/>
                    <Route path="/downloadPage" element={<DownloadPage/>}/>
                    <Route path="/supportPage" element={<SupportPage/>}/>
                    <Route path="/registerPage" element={<RegisterPage/>}/>
                    <Route path="/loginPage" element={<LoginPage/>}/>
                    <Route path="/navigationDrawer" element={<NavigationDrawer/>}/>
                    <Route path="/mainSideBar" element={<MainSideBar/>}/>
                    <Route path="/musicStatusBar" element={<MusicStatusBar/>}/>

                    <Route element={<MainPage/>}>
                        <Route path="/mainSearch" element={<MainSearch/>}/>
                        <Route path="/mainHome" element={<MainHome/>}/>
                        <Route path="/mainLibrary" element={<MainLibrary/>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;


