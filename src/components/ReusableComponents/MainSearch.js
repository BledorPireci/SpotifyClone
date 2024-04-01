import React, {useEffect, useState} from 'react';
import "./ReusableComponentsStyle/MainSearch.css";
import {
    Afro,
    Caribbean, Funk,
    Gaming,
    HipHop, Instrumental,
    InTheCar,
    Jazz, Latino,
    LiveEvent,
    Lol,
    MadeForYou,
    Metal,
    Party,
    Podcast, Punk, Rnb, Romance, Travel,
    Workout
} from "../../assets/Icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import MainNavigation from "./MainNavigation";


export default function MainSearch(){
    const [searchInput, setSearchInput] = useState("")
    const [token, setToken] = useState("")
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        const newToken = window.getToken();
        setToken(newToken);
    }, [])


    async function search() {
        if (searchInput === '') {
            setAlbums([]);
            return
        }

        const searchParameters  = {
            method : 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
        const artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track,artist' , searchParameters)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                if (data && data.artists) {
                    return data.artists.items[0].id
                }
            })
            .catch((error) => {
                alert(error.message)
            })

        await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&limit=10' , searchParameters )
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setAlbums(data.items)
            });
    }

    return(
        <>
            <div className="searchGrid">
                <div className="searchGridContainer">
                    <div className="SearchBar">
                        <MainNavigation/>
                        <div className="search-bar">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="zoom"/>
                            <input
                                type="text"
                                placeholder="Artists, songs or podcasts"
                                onKeyPress={async (event) => {
                                    if (event.key === "Enter"){
                                        await search();
                                    }
                                }}
                                onChange={event => setSearchInput(event.target.value)}

                            />
                        </div>
                    </div>
                    <div className="search--albums">
                        {albums.map((album, i) =>{
                            return(
                                <div className="search--albums--card" key={i}>
                                    <img src={album.images[0].url} />
                                    <FontAwesomeIcon icon={faPlayCircle} className="play-button-link"/>
                                    <div className="search-album-text">
                                        <h3>{album.name}</h3>
                                        <p>{album.release_date}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    {
                        albums?.length === 0 && (
                            <div>

                                <h3 className="title">Browse all</h3>
                                <div className="GridPhotos">
                                    <div className="girdPodcast">
                                        <h3>Podcast</h3>
                                        <Podcast/>
                                    </div>
                                    <div className="gridMadeforyou">
                                        <h3>Made for you!</h3>
                                        <MadeForYou/>
                                    </div>
                                    <div className="gridLiveEvent">
                                        <h3>Live Events</h3>
                                        <LiveEvent/>
                                    </div>
                                    <div className="gridHiphop">
                                        <h3>Hip-Hop</h3>
                                        <HipHop/>
                                    </div>
                                    <div className="gridInCar">
                                        <h3>In the car</h3>
                                        <InTheCar/>
                                    </div>
                                    <div className="gridGaming">
                                        <h3>Gaming</h3>
                                        <Gaming/>
                                    </div>
                                    <div className="gridLol">
                                        <h3>League of Legends</h3>
                                        <Lol/>
                                    </div>
                                    <div className="gridWorkout">
                                        <h3>Workout</h3>
                                        <Workout/>
                                    </div>
                                    <div className="gridParty">
                                        <h3>Party</h3>
                                        <Party/>
                                    </div>
                                    <div className="gridMetal">
                                        <h3>Metal</h3>
                                        <Metal/>
                                    </div>
                                    <div className="gridJazz">
                                        <h3>Jazz</h3>
                                        <Jazz/>
                                    </div>
                                    <div className="gridRnb">
                                        <h3>R&B</h3>
                                        <Rnb/>
                                    </div>
                                    <div className="gridInstrumental">
                                        <h3>Instrumental</h3>
                                        <Instrumental/>
                                    </div>
                                    <div className="gridRomance">
                                        <h3>Romance</h3>
                                        <Romance/>
                                    </div>
                                    <div className="gridLatino">
                                        <h3>Latino</h3>
                                        <Latino/>
                                    </div>
                                    <div className="gridCaribbean">
                                        <h3>Caribbean</h3>
                                        <Caribbean/>
                                    </div>
                                    <div className="gridFunk">
                                        <h3>Funk</h3>
                                        <Funk/>
                                    </div>
                                    <div className="gridPunk">
                                        <h3>Punk</h3>
                                        <Punk/>
                                    </div>
                                    <div className="gridTravel">
                                        <h3>Travel</h3>
                                        <Travel/>
                                    </div>
                                    <div className="gridAfro">
                                        <h3>Afro</h3>
                                        <Afro/>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}