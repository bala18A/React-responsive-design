import React from 'react'
import "./CSS/main7.css"
const Main7 = () => {
    return (
        <div>
            <div className="slide">
                <div className="slide-image">
                    <img src={require("./IMG/Component 23 – 5.png")} alt="" />
                </div>
                <div className="slide-para">
                    <p>
                        <span style={{ color: '#494949' }}>240+</span> <br /> Oncologists
                    </p>
                </div>
                <div className="pagination">
                    <img src={require("./IMG/Group 245.png")} alt="" />
                </div>
            </div>

            {/* <!-- ----------------------------new creation slide  --> */}


            {/* <!-- ------------------------------------------ --> */}
            <div className="main7">
                <div className="main7-para">
                    <p>For the Most Advanced Cancer Treatment</p>
                </div>

                <div className="main7-btn">
                    <button>Request A Call Back</button>
                </div>


            </div>
            <div className="side-image">
                <img src={require("./IMG/Mask Group 11.png")} alt="" />
            </div>
            {/* <!-- -----------new creation  --> */}
            <div className="side-image-new">
        <img src={require("./IMG/Mask Group 12.png")} alt=""/>
    </div>

        </div>
    )
}

export default Main7