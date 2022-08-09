import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import OpeninWeb from "./components/OpenInWeb"
import PremiumPage from "./components/PremiumPage";
import Footer from "./components/footer";
import NavigationBar from "./components/NavigationBar";
import "./index.css";
import DownloadPage from "./components/Download";
import SupportPage from "./components/Support";
import RegisterPage from "./components/Register"
import LoginPage from "./components/Login"
import NavigationDrawer from "./components/NavigationDrawer"
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
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;
