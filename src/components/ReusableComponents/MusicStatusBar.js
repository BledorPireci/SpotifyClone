import React, {useState, useRef, useEffect, useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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
// import InputRange from 'react-input-range';
import {TrackContext} from "../Context/TrackContext";


// The ability to get tracks when you click next
// After that, find the index of current song.
// after that check to update the track.
// If the track that is being played, is the last item on array (tracks), then you should play the first track, otherwise the next one.

export default function MusicStatusBar(){
    const [isPlaying, setIsPlaying] = useState(false);
    const  playerRef = useRef();
    const [rangeColor, setRangeColor] = useState( 5);
    const player = playerRef.current;
    const {currentTrack, setCurrentTrack, currentPlaylist} = useContext(TrackContext);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const {track , setTrack} = useState("");
    const [progressValue , setProgressValue] = useState(0);

    const togglePlay = () => {
        if (!currentPlaylist) return;
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
        console.log(currentPlaylist, currentTrack)
    },[currentTrack, currentPlaylist])

    const updateVolume = (volume) =>{
        player.volume = volume / 100;
    }

    useEffect(() => {
        if(!player) return;
        updateVolume(rangeColor)
    },[rangeColor,player])

    const handleTime = (e) => {
        const m = beautifyTime(Math.floor(e.target.currentTime / 60));
        const s = beautifyTime(Math.floor(e.target.currentTime - m * 60));
        const s2 = e.target.currentTime - m * 60;

        setMinutes(m);
        setSeconds(s)
        updateProgressBar(s2)

    }

    const beautifyTime = (time) => {
        return time < 10 ? "0" +  time : time
    }

    function updateProgressBar(currentTime){
        const progressLength = 600;
        const progressValue =  currentTime * 20
        setProgressValue(progressValue)
    }

    function endProgress() {
        setProgressValue(600);
        setIsPlaying(false);
        setMinutes(0)
        setSeconds(0)
    }

    function handleNext() {
        if (currentTrack >= currentPlaylist.length - 1) {
            setCurrentTrack(0);
        }
        else {
            setCurrentTrack(currentTrack + 1)
        }
    }
    function handlePrev(){
        if (currentTrack >= currentPlaylist.length - 1) {
            setCurrentTrack(0);
        }
        else {
            setCurrentTrack(currentTrack - 1)
        }
    }

    function handleRepeat(){

    }


    return(
        <>
            <audio controls ref={playerRef} style={{display: 'none'}} src={currentPlaylist?.[currentTrack]?.track?.preview_url} type="audio/mpeg" onTimeUpdate={handleTime} onEnded={endProgress} />
            <div className={`musicPlayer ${currentPlaylist?.[currentTrack] ? "" : "disabled"}`}>
                <div className="musicPlayerContainer">
                    <div className="testdiv">
                        <img src={currentPlaylist?.[currentTrack]?.track?.album?.images?.[0]?.url}/>
                        <div className="textDiv">
                            <p>{currentPlaylist?.[currentTrack]?.track?.name}</p>
                            <p>{
                                currentPlaylist?.[currentTrack]?.track?.artists?.map((artist, i) => <span key={i}>{artist.name}{track?.track?.artists.length - 1 > i ? ', ' : ''}</span> )
                            }</p>
                        </div>
                    </div>
                    <div className="playButtons">
                        <div className="innerPlayButtons">
                            <a><FontAwesomeIcon icon={faShuffle} className="shuffle-icon" /></a>
                            <a onClick={handlePrev}><FontAwesomeIcon icon={faBackwardStep} className="last-song-icon"/></a>
                            <a onClick={togglePlay}>
                                {isPlaying
                                    ? <FontAwesomeIcon icon={faCirclePause} className="play-icon"/>
                                    : <FontAwesomeIcon icon={faCirclePlay} className="play-icon"/>
                                }
                            </a>
                            <a onClick={handleNext}><FontAwesomeIcon icon={faForwardStep} className="next-song-icon"/></a>
                            <a onClick={handleRepeat}><FontAwesomeIcon icon={faRotateRight} className="repeat-icon"/></a>
                        </div>
                        <div className="songStatus">
                            <div id="songStatusBar" style={{ width: progressValue}} >
                                    <button />
                            </div>
                            {minutes !== 0 &&
                                <div  className="musicTime" style={{color: 'white',fontFamily:"Poppins",fontSize:"13px", width: '100%', textAlign: 'center'}} >
                                    {minutes} : {seconds}
                                </div>
                            }

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
                        {/*<div className="volumeBar">*/}
                        {/*    <div className="volumeStatusBar">*/}
                        {/*        <InputRange*/}
                        {/*            minValue={0}*/}
                        {/*            value={rangeColor}*/}
                        {/*            maxValue={100}*/}
                        {/*            onChange={value => setRangeColor(value)}*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}