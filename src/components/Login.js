import React, {useState} from "react";
import './Style/Login.css'
import {UserIconBlack} from "../assets/Icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faApple, faFacebookF, faGoogle,} from '@fortawesome/free-brands-svg-icons'


//value={values.email} onChange={handleChange}
//value={values.password} onChange={handleChange}
export default function Login() {
    const [values, setValues] = useState(
        {
            email: "",
            password: "",
        }
    )
    const handleChange = (event) => {
        setValues(
            {
                ...values,
                [event.target.name]: event.target.value,
            }
        )
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className="loginMain">
                <div className="loginUpper">
                    <UserIconBlack/>
                </div>
                <div className="loginContainer">
                    <div className="loginMiddle">
                        <h4>To continue, log in to Spotify.</h4>
                        <div className="loginButtons">
                            <button id="login-facebook"><FontAwesomeIcon icon={faFacebookF} className="facebook-icon"/>CONTINUE WITH FACEBOOK</button>
                            <button id="login-apple"><FontAwesomeIcon icon={faApple} className="apple-icon"/>CONTINUE WITH APPLE</button>
                            <button id="login-google"><FontAwesomeIcon icon={faGoogle} className="google-icon"/>CONTINUE WITH GOOGLE</button>
                        </div>
                        <div className="hrLine">
                            <hr/>
                            <span>OR</span>
                            <hr/>
                        </div>
                    </div>
                    <div className="loginLower">
                        <div className="inputs-login">
                            <label htmlFor="loginInputs">Email address or username</label>
                            <input type="email" className="loginInputs" placeholder="Email address or username"/>

                            <label htmlFor="loginInputs">Password</label>
                            <input type="password" className="loginInputs" placeholder="Password"/>

                            <p>Forgot your password?</p>
                        </div>
                        <div className="lowerPart">
                            <div className="checkBox-input">
                                <input type="checkbox"/>Remember me
                            </div>
                            <div>
                                <input type="submit" className="buttonInput" value="LOG IN"/>
                            </div>
                        </div>
                        <div className="lastPart">
                            <h3>Don't have an account?</h3>
                            <button className="signup-button-login"><a href="/registerPage">SIGN UP FOR SPOTIFY</a></button>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}