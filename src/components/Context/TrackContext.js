import React, {createContext, useState} from "react";

export const TrackContext = createContext()

export default function TrackContextProvider(props){
    const [currentTrack, setCurrentTrack] = useState('')
        return (
            <TrackContext.Provider value={{ currentTrack, setCurrentTrack }}>
                    {props.children}
            </TrackContext.Provider>
        );

}

