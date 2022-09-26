import React, { useContext } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {TrackContext} from "../../Context/TrackContext";

export default function MusicCards({ track }){
    const {_, setCurrentTrack} = useContext(TrackContext);

    const updateCurrentTrack = () => {
        setCurrentTrack(track?.track?.preview_url);
    }

    return(
            <div className="madeforU-Card" onClick={updateCurrentTrack}>
                <img src={track?.track?.album?.images?.[0]?.url}/>
                <FontAwesomeIcon icon={faPlayCircle} className="play-button-link"/>
                <h2>{track?.track?.name}</h2>
                <p>{
                    track?.track?.artists.map((artist, i) => <span key={i}>{artist.name}{track?.track?.artists.length - 1 > i ? ', ' : ''}</span> )
                }</p>
            </div>
    )
}



