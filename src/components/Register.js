import React, {useState} from "react";
import './Style/Register.css'
import {UserIconBlack} from "../assets/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle,} from '@fortawesome/free-brands-svg-icons'




export default function SignUpForm() {
    // const [values,setValues] = useState(
    //     {
    //         email:"",
    //         confirmEmail:"",
    //         password:"",
    //         username:"",
    //         dateOfBirth:"",
    //     }
    // )
    // const handleChange = (event) =>{
    //     setValues(
    //         {
    //             ...values,
    //             [event.target.name]: event.target.value,
    //         }
    //     )
    // }
    //
    //
    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    // }

    const [setGender] = useState();


    return (
            <>
                <div className="registerMain">
                    <div className="registerContainer">
                        <div className="logoRegister">
                            <UserIconBlack/>
                        </div>
                        <div className="registerTopside">
                            <div className="registerWithButtons">
                                <h2>Sign up for free to start listening.</h2>
                                <div className="registerButtons">
                                    <button id="registerSignWithFacebook"><FontAwesomeIcon icon={faFacebookF} className="facebook-icon-register"/>Sign up with Facebook</button>
                                    <button id="registerSignWithGoogle"><FontAwesomeIcon icon={faGoogle} className="google-icon-register"/>Sign up with Google</button>
                                </div>
                                <div className="hrRegister">
                                    <hr/>
                                    <span>or</span>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                        <form className="registerForm">
                            <h3>Sign up with your email address</h3>
                            <div className="inputForm-Register">
                                <div>
                                    <label htmlFor="inputs-register">What's your email?</label>
                                    <input type="email" id="inputEmail" className="inputs-register" placeholder="Enter your email."/>
                                </div>
                                <div>
                                    <label htmlFor="inputs-register">Confirm your email</label>
                                    <input type="email" id="inputConfirmEmail" className="inputs-register" placeholder="Enter your email again."/>
                                </div>
                                <div>
                                    <label htmlFor="inputs-register">Create a password</label>
                                    <input type="password" id="inputPassword" className="inputs-register" placeholder="Create a password."/>
                                 </div>
                                <div>
                                    <label htmlFor="inputs-register">What should we call you?</label>
                                    <input type="text" id="inputUsername" className="inputs-register" placeholder="Enter a profile name."/>
                                    <p>This appears on your profile.</p>
                                </div>
                            </div>
                            <div className="register-checks">
                                <h3>What's your date of birth?</h3>
                                <div className="date">
                                    <div className="innerRegisterCheck">
                                        <label htmlFor="selectDay">Day</label><br/>
                                        <input type="day" id="selectDay" placeholder="DD" maxLength={2}/>
                                    </div>

                                    <div>
                                        <label htmlFor="months">Month</label><br/>
                                        <select id="months" name="months">
                                            <option value="Month">Month</option>
                                            <option value="January">January</option>
                                            <option value="February">February</option>
                                            <option value="March">March</option>
                                            <option value="April">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="August">August</option>
                                            <option value="September">September</option>
                                            <option value="October">October</option>
                                            <option value="November">November</option>
                                            <option value="December">December</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="year">Year</label><br/>
                                        <input type="year" id="year" placeholder="YYYY" maxLength={4}/>
                                    </div>

                                </div>
                            </div>
                            <div className="registerLastSection">
                                <div className="genderCheck">
                                    <label>Whats your gender?</label>
                                    <div className="checkThem">
                                        <div>
                                            <input type="radio" name="gender" id="maleGender" className="genders" value="Male" onChange={e=>setGender((e.target.value))}/>Male
                                        </div>
                                        <div>
                                            <input type="radio" name="gender" id="femaleGender"  className="genders" value="Female" onChange={e=>setGender((e.target.value))}/>Female
                                        </div>
                                    </div>
                                </div>
                                <div className="permisions">
                                    <div>
                                    <input type="checkbox" className="checkPermissions"/>I would prefer not to receive marketing messages from Spotify
                                    </div>
                                    <div>
                                    <input type="checkbox" className="checkPermissions"/>Share my registration data with Spotify's content providers for marketing purposes.
                                    </div>
                                </div>
                                <div className="termsAndConditions">
                                    <p>By clicking on sign-up, you agree to Spotify's<a>Terms and Conditions of Use.</a></p>
                                    <p>To learn more about how Spotify collects, uses, shares and protects your personal data, please see<a>Spotify's Privacy Policy.</a></p>
                                </div>
                                <div className="signup">
                                        <button id="signUpButton">Sign up</button>
                                    <p>Have an account? <a href="/loginPage">Log in.</a></p>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </>







    )
};











