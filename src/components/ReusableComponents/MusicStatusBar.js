import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'react-input-range/lib/css/index.css'
import "./ReusableComponentsStyle/MusicStatusBar.css"
import {
    faBackwardStep,
    faCirclePlay,
    faForwardStep, faList,
    faMicrophone,
    faRotateRight,
    faShuffle, faVolumeHigh} from "@fortawesome/free-solid-svg-icons";
import {faNfcSymbol} from "@fortawesome/free-brands-svg-icons";
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';



export default function MusicStatusBar(){
    const [volume, setVolume] = useState(1)

    const [rangeColor, setrangeColor] = useState( {
        value: 50
    })

    return(
        <>
            <div className="musicPlayer">
                <div className="musicPlayerContainer">
                    <div className="testdiv">

                    </div>
                    <div className="playButtons">
                        <div className="innerPlayButtons">
                            <a><FontAwesomeIcon icon={faShuffle} className="shuffle-icon" /></a>
                            <a><FontAwesomeIcon icon={faBackwardStep} className="last-song-icon"/></a>
                            <a><FontAwesomeIcon icon={faCirclePlay} className="play-icon"/></a>
                            <a><FontAwesomeIcon icon={faForwardStep} className="next-song-icon"/></a>
                            <a><FontAwesomeIcon icon={faRotateRight} className="repeat-icon"/></a>
                        </div>
                        <div className="songStatus">
                            <div id="songStatusBar">
                                    <button/>
                            </div>
                        </div>
                    </div>
                    <div className="volumeControls">
                        <div className="innerVolume">
                            <a><FontAwesomeIcon icon={faMicrophone} className="microphone-icon"/></a>
                            <a><FontAwesomeIcon icon={faList} className="menu-icon"/></a>
                            <a><FontAwesomeIcon icon={faNfcSymbol} className="connect-icon"/></a>
                            <a><FontAwesomeIcon icon={faVolumeHigh} className="volumeUp-icon"/></a>
                        </div>
                        <div className="volumeBar">
                            <div className="volumeStatusBar">
                                <InputRange
                                    minValue={0}
                                    value={rangeColor.value}
                                    maxValue={100}
                                    onChange={value => setrangeColor({ value })} />
                                {/*<button onClick={() => setMuted(m => !m)}>*/}
                                {/*    {muted ? "muted" : "unmuted"}*/}
                                {/*</button>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}