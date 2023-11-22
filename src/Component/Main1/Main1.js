import React, { useState } from 'react'
import "./CSS/main1.css"
const Main1 = () => {
    const [yes, setyes] = useState('Yes')
    const [no, setno] = useState(' no')
    const [City, setCity] = useState('City')
    const [chennai, setchennai] = useState('chennai')
    const [mumbai, setmumbai] = useState('mumbai')
    const [Country, setCountry] = useState('Country')
    const [india, setindia] = useState('india')
    const [london, setlondon] = useState('london')
    const [looking, setlooking] = useState('What are you looking for*')
    const [one, setone] = useState('1')
    const [two, settwo] = useState('2')
    return (
        <div>
            <main>

                <div className="left-div">


                    <div className="left-text">
                        <img src={require("./IMG/India’s First & Only.png")} alt="hhn" />
                        <img src={require("./IMG/Proton Therapy Cancer Centre.png")} alt="ggn" />

                    </div>
                    <div className="left-text-responsive">
                        <img src={require("./IMG/responsive Image/India’s First & Only.png")} alt="gng" /><br />
                        <img src={require("./IMG/responsive Image/Proton Therapy Cancer Centre.png")} alt="bgn" />

                    </div>


                </div>

                <div className="right-div">
                    <div className="right-text">

                        {/* <img className="right-text-responsive" src={require("./image/mobile rseponsive image/APCC Banner_Desktop_Revised.png")}
                            alt="" /> */}
                        {/* <!-- ---form --> */}
                        <div className="form-menu">
                            <div className="forms">
                                <form >
                                    <div className="first">
                                        <p>Are you a patient?</p>
                                        <div className="radio-btn">

                                            <input type="radio" name="right" id="yes" value={yes} onChange={(e) => setyes(e.target.value)} />
                                            <label htmlFor="yes">Yes</label>
                                            <input type="radio" name="right" id="no" value={no} onChange={(e) => setno(e.target.value)} />
                                            <label htmlFor="no">No</label>
                                        </div>
                                    </div>
                                    <div className="first2">
                                        <input type="text" name="" placeholder="First Name*" />
                                        <input type="text" name="" placeholder="Last Name*" />
                                    </div>
                                    <div className="email">
                                        <input type="email" name="" placeholder="Email*" />
                                    </div>
                                    <div className="number">
                                        <input type="text" name="" placeholder="Phone*" />
                                    </div>
                                    <div className="first3">

                                        <select name="city">
                                            <option value={City} onChange={(e) => setCity(e.target.value)}>City*</option>
                                            <option value={chennai} onChange={(e) => setchennai(e.target.value)}>chennai</option>
                                            <option value={mumbai} onChange={(e) => setmumbai(e.target.value)}>mumbai</option>
                                        </select>
                                        <select name="country" >
                                            <option value={Country} onChange={(e) => setCountry(e.target.value)}>Country*</option>
                                            <option value={india} onChange={(e) => setindia(e.target.value)}>india</option>
                                            <option value={london} onChange={(e) => setlondon(e.target.value)}>london</option>
                                        </select>
                                    </div>


                                    <div className="we-looking">
                                        <select name="" >
                                            <option value={looking} onChange={(e) => setlooking(e.target.value)}>What are you looking for*</option>
                                            <option value={one} onChange={(e) => setone(e.target.value)}>1</option>
                                            <option value={two} onChange={(e) => settwo(e.target.value)}>2</option>
                                        </select>
                                    </div>
                                    <div className="discripition">
                                        <input type="text" name="" placeholder="Description*" />
                                    </div>
                                    <div className="form-paragraph">
                                        <p>* Please fill all the above fields to submit the details</p>
                                    </div>
                                    <div className="form-btn">
                                        <button>Request A Call Back</button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>

                </div>
            </main>
            
        </div>

    )
}

export default Main1