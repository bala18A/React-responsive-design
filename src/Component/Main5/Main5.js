import React from 'react'
import "./CSS/main5.css"
const Main5 = () => {
  return (
    <div>
        <div className="main5">
        <div className="main5-width">
            <div className="main5-first-p">
                <p>
                    International Patient Services Include
                </p>
            </div>
            <div className="main-boxes">
                <div className="main5-box">
                    <div className="main5-center">
                        <img src={require("./IMG/direction-rotary-right.png")} alt=""/>
                        <p className="m5">ASSISTANCE</p>
                        <p className="m25"> Assisting for your visit with medical records, travel & accommodation</p>
                    </div>
                </div>
                <div className="main5-box">
                    <div className="main5-center">
                        <img src={require("./IMG/file-medical.png")} alt=""/>
                        <p className="m5">MEDICAL VISA</p>
                        <p className="m25"> Assisting you for obtaining medical visas</p>
                    </div>
                </div>

                <div className="main5-box">
                    <div className="main5-center">
                        <img src={require("./IMG/car-outline2.png")} alt="" height="66"/>
                        <p className="m5">AIRPORT TRANSFER</p>
                        <p className="m25"> Airport transfer assistance to Apollo Proton Cancer Centre</p>
                    </div>
                </div>

                <div className="main5-box">
                    <div className="main5-center">
                        <img src={require("./IMG/speech.png")} alt=""/>
                        <p className="m5">INTERPRETERS</p>
                        <p className="m25"> Interpreters to help you understand and communicate effectively with your cancer
                            management team.</p>
                    </div>
                </div>

                <div className="main5-box">
                    <div className="main5-center">
                        <img src={require("./IMG/smile.png")} alt=""/>
                        <p className="m5">PLEASANT EXPERIENCE</p>
                        <p className="m25"> Ensuring that you have a pleasant experience every step of your journey with us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- -----------------main 5 display none new creation  --> */}
    <div className="main5-new-box">
        <div className="head-box">
            <p>Why Choose <br/> APCC For Cancer Treatment <br/></p>
        </div>
        <div className="list-box">

            <ul>
                <li>
                    Only hospital in India providing Pencil Beam Proton Therapy - an advanced treatment that uses
                    protons
                    to target tumours without affecting normal healthy cells.
                </li>
                <li>
                    Fully integrated treatment suite that offers
                    the most advanced treatment in surgical, radiation and medical procedures.
                </li>
                <li>
                    Highly skilled clinicians who come together to form a Cancer Management Team.
                </li>


                <li>
                    Personalised treatment approach which is evidence
                    based and comprehensive, keeping in mind the various needs of the patient.
                </li>
            </ul>
        </div>
    </div>

    </div>
  )
}

export default Main5