import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {useNavigate} from "react-router-dom";


export default function MainNavigation(){
    const navigate = useNavigate();
    return(
        <>
            <div className="libraryNav">
                <div className="back">
                    <a onClick={() => navigate(-1)}><FontAwesomeIcon icon={faAngleLeft} className="back-icon"/></a>
                </div>
                <div className="forward">
                    <a onClick={() => navigate(1)}><FontAwesomeIcon icon={faAngleRight} className="forward-icon"/></a>
                </div>
            </div>
        </>
    )
}