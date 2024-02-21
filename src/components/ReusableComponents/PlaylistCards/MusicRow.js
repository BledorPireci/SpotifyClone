import React, { useState, useEffect } from "react";
import MusicCards from "./MusicCards";


export default function MusicRow({playlist, playlistIndex, token}){
    const [tracks, setTracks] = useState([])


    useEffect(() => {
        if (!token) return;

        // console.log(playlist?.[playlistIndex])

        fetch(playlist?.[playlistIndex]?.href, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => {
               return response.json()
            })
            .then((data) => {
                setTracks(data?.tracks?.items?.slice(0, 6))
            });
    }, []);

    return(
        <>
            <h1>{playlist?.[playlistIndex]?.name}</h1>
            <div className="madeForYou-grid">
                {
                    tracks?.map((track, i) => (
                        <MusicCards tracks={tracks} trackIndex={i} key={i} />
                    ))
                }
            </div>
        </>
    )
}