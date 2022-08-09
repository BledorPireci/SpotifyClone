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

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<OpeninWeb/>}/>
                    <Route path="/premiumPage" element={<PremiumPage/>}/>
                    <Route path="/navigation" element={<NavigationBar/>}/>
                    <Route path="/footer" element={<Footer/>}/>
                    <Route path="/downloadPage" element={<DownloadPage/>}/>
                    <Route path="/supportPage" element={<SupportPage/>}/>
                    <Route path="/registerPage" element={<RegisterPage/>}/>
                    <Route path="/loginPage" element={<LoginPage/>}/>
                    <Route path="/navigationDrawer" element={<NavigationDrawer/>}/>
                    <Route path="/mainSideBar" element={<MainSideBar/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;
