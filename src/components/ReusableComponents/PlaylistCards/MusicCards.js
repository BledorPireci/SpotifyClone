import React, { useContext } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {TrackContext} from "../../Context/TrackContext";

export default function MusicCards({ tracks, trackIndex }){
    const {setCurrentTrack, setCurrentPlaylist} = useContext(TrackContext);

    const updateCurrentTrack = () => {
        setCurrentTrack(trackIndex);
        setCurrentPlaylist(tracks);
    }

    return(
            <div className="madeforU-Card" onClick={updateCurrentTrack}>
                <img src={tracks?.[trackIndex]?.track?.album?.images?.[0]?.url}/>
                <FontAwesomeIcon icon={faPlayCircle} className="play-button-link"/>
                <h2>{tracks?.[trackIndex]?.track?.name}</h2>
                <p>{
                    tracks?.[trackIndex]?.track?.artists.map((artist, i) => <span key={i}>{artist.name}{tracks?.[trackIndex]?.track?.artists.length - 1 > i ? ', ' : ''}</span> )
                }</p>
            </div>
    )
}


