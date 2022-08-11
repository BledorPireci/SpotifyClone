import React from "react";
import MainSideBar from "../ReusableComponents/MainSideBar";
import MusicStatusBar from "../ReusableComponents/MusicStatusBar";
import { Outlet } from "react-router-dom";
import "../Style/MainPage.css";

export default function MainPage(){
    return(
        <section className="main-layout">
            <MainSideBar/>
            <section className="main-content">
                <Outlet />
            </section>
            <MusicStatusBar/>
        </section>
    )
}