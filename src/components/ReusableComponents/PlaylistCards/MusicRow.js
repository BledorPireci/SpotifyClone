import React, { useState, useEffect } from "react";
import MusicCards from "./MusicCards";


export default function MusicRow({tracksUrl, title, token}){
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        if (!token) return;
        fetch(tracksUrl.href, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => {
               return response.json()
            })
            .then((data) => {
                setTracks(data?.items?.slice(0, 6))
            });
    }, []);

    return(
        <>

            <h1>{title}</h1>
            <div className="madeForYou-grid">
                {
                    tracks.map((track, i) => (
                        <MusicCards track={track} key={i} />
                    ))
                }
            </div>
        </>
    )
}