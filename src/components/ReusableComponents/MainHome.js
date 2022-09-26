import React, {useContext, useEffect, useState} from "react";
import MainNavigation from "./MainNavigation";
import MusicRow from "./PlaylistCards/MusicRow";
import "./ReusableComponentsStyle/MainHome.css"
import MusicStatusBar from "./MusicStatusBar";

export default function MainHome(){

    const [playlist, setPlaylist] = useState([])
    const [token, setToken] = useState()

    useEffect(() => {
        const newToken = window.getToken();
        setToken(newToken);
    }, [])

    useEffect(() => {

        if (!token) return;

        fetch('https://api.spotify.com/v1/browse/featured-playlists?limit=10&offset=1', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                if (data?.error?.status === 401) {
                    window.localStorage.removeItem("token");
                    window.location.href = "https://accounts.spotify.com/en/authorize?client_id=a29dd3741c0e45d29cab62083a762050&redirect_uri=http://localhost:3000/mainHome&response_type=token";
                    return;
                }
                setPlaylist(data?.playlists?.items)
            })

    }, [token])

    return(
        <>
            <div className="main-home">
                <div className="mainHome-container">
                    <div className="madeForYou">
                        <MainNavigation/>
                        {
                            playlist && playlist.map((p) => (
                                <MusicRow tracksUrl={p.tracks} title={p.name} token={token} key={p.id}/>
                            ))
                    }
                    </div>
                </div>
            </div>
        </>
    )
}