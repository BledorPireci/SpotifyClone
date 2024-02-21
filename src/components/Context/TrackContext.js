import React, {createContext, useState, useEffect } from "react";

export const TrackContext = createContext()

export default function TrackContextProvider(props){
    const [currentTrack, setCurrentTrack] = useState(0)
    const [currentPlaylist, setCurrentPlaylist] = useState([])

        return (
            <TrackContext.Provider value={{ currentTrack, setCurrentTrack, currentPlaylist, setCurrentPlaylist }}>
                {props.children}
            </TrackContext.Provider>
        );

}

