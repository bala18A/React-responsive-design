import React from 'react'

import "./CSS/main2.css"
const Main2 = () => {
    return (
        <div>
            <div className="main2">
                <div className="cancer-types-text">
                    <p>Cancer Types</p>

                </div>
                <div className="cancer-types">
                    <div className="box1">
                        <div className="center">
                            <img src={require("./IMG/1.png")} alt="" />
                            <p>Bone & Soft Tissue</p>
                        </div>
                    </div>

                    <div className="box1">
                        <div className="center">
                            <img src={require('./IMG/2.png')} alt="" />
                            <p>Breast</p>
                        </div>
                    </div>

                    <div className="box1">
                        <div className="center">
                            <img src={require('./IMG/3.png')} alt="" />
                            <p>Central Nervous System</p>
                        </div>
                    </div>

                    <div className="box1">
                        <div className="center">
                            <img src={require('./IMG/4.png')} alt="" />
                            <p>Gastrointestinal</p>
                        </div>
                    </div>

                    <div className="box1">
                        <div className="center">
                            <img src={require('./IMG/5.png')} alt="" />
                            <p>Gynaecology</p>
                        </div>
                    </div>

                    <div className="box1">
                        <div className="center">
                            <img src={require('./IMG/6.png')} alt="" />
                            <p>Head & Neck</p>
                        </div>
                    </div>

                    <div className="box1">
                        <div className="center">
                            <img src={require('./IMG/7.png')} alt="" />
                            <p>Lymphoma</p>
                        </div>
                    </div>

                    <div className="box1">
                        <div className="center">
                            <img src={require('./IMG/8.png')} alt="" />
                            <p>Paediatrics</p>
                        </div>
                    </div>

                    <div className="box1">
                        <div className="center">
                            <img src={require('./IMG/10.png')} alt="" />
                            <p>Urology</p>
                        </div>
                    </div>

                    <div className="box1">
                        <div className="center">
                            <img src={require('./IMG/9.png')} alt="" />
                            <p>Thoracic</p>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    )
}

export default Main2