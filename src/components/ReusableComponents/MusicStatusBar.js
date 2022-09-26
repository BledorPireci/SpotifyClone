import React, {useState, useRef, useEffect, useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'react-input-range/lib/css/index.css'
import "./ReusableComponentsStyle/MusicStatusBar.css"
import {
    faBackwardStep, faCirclePause,
    faCirclePlay,
    faForwardStep, faList,
    faMicrophone,
    faRotateRight,
    faShuffle, faVolumeHigh, faVolumeMute
} from "@fortawesome/free-solid-svg-icons";
import {faNfcSymbol} from "@fortawesome/free-brands-svg-icons";
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import {TrackContext} from "../Context/TrackContext";

export default function MusicStatusBar(){
    const [isPlaying, setIsPlaying] = useState(false)
    const playerRef = useRef()
    const [rangeColor, setRangeColor] = useState( 5);
    const player = playerRef.current;
    const {currentTrack} = useContext(TrackContext);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSectonds] = useState(0)

    const togglePlay = () => {
        if (!currentTrack) return;
        if (!player) return;

        if (player.paused) {
            player.play();
            setIsPlaying(true);
        }
        else {
            player.pause();
            setIsPlaying(false);
        }
    }
    useEffect(() =>{
      togglePlay()
    },[currentTrack])

    const updateVolume = (volume) =>{
        player.volume = volume / 100;
    }

    useEffect(() => {
        if(!player) return;
        updateVolume(rangeColor)
    },[rangeColor,player])

    const handleTime = (e) => {
        console.log(e.target.currentTime)
        const m = beautifyTime(Math.floor(e.target.currentTime / 60));
        const s = beautifyTime(Math.floor(e.target.currentTime - m * 60));
        setMinutes(m);
        setSectonds(s)
    }

    const beautifyTime = (time) => {
        return time < 10 ? "0" +  time : time
    }

    return(
        <>
            <audio controls ref={playerRef} style={{display: 'none'}} src={currentTrack} type="audio/mpeg" onTimeUpdate={handleTime} />
            <div className={`musicPlayer ${currentTrack ? "" : "disabled"}`}>
                <div className="musicPlayerContainer">
                    <div className="testdiv">

                    </div>
                    <div className="playButtons">
                        <div className="innerPlayButtons">
                            <a><FontAwesomeIcon icon={faShuffle} className="shuffle-icon" /></a>
                            <a><FontAwesomeIcon icon={faBackwardStep} className="last-song-icon"/></a>
                            <a onClick={togglePlay}>
                                {isPlaying
                                    ? <FontAwesomeIcon icon={faCirclePause} className="play-icon"/>
                                    : <FontAwesomeIcon icon={faCirclePlay} className="play-icon"/>
                                }
                            </a>
                            <a><FontAwesomeIcon icon={faForwardStep} className="next-song-icon"/></a>
                            <a><FontAwesomeIcon icon={faRotateRight} className="repeat-icon"/></a>
                        </div>
                        <div className="songStatus">
                            <div id="songStatusBar">
                                    <button/>
                            </div>
                            <div  className="musicTime" style={{color: 'white',fontFamily:"Poppins",fontSize:"13px", width: '100%', textAlign: 'center'}} >
                                {minutes} : {seconds}
                            </div>

                        </div>
                    </div>
                    <div className="volumeControls">
                        <div className="innerVolume">
                            <a><FontAwesomeIcon icon={faMicrophone} className="microphone-icon"/></a>
                            <a><FontAwesomeIcon icon={faList} className="menu-icon"/></a>
                            <a><FontAwesomeIcon icon={faNfcSymbol} className="connect-icon"/></a>
                            <a>
                                {rangeColor > 1
                                    ? <FontAwesomeIcon icon={faVolumeHigh} className="volumeUp-icon"/>
                                    : <FontAwesomeIcon icon={faVolumeMute } className="volumeUp-icon"/>
                                }
                            </a>
                        </div>
                        <div className="volumeBar">
                            <div className="volumeStatusBar">
                                <InputRange
                                    minValue={0}
                                    value={rangeColor}
                                    maxValue={100}
                                    onChange={value => setRangeColor(value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}