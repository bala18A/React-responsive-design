import React from 'react'
import "./CSS/main6.css"
const Main6 = () => {
  return (
    <div>
        <div className="main6">
        <div className="main6-img">
            <img src={require("./IMG/Component 2 – 5.png")} alt=""/>
            <div className="text-in-image">
                <p className="main6-para1">Win Over Cancer With Apollo Proton Cancer Centre</p>
                <p className="main6-para2">Apollo Proton Cancer Centre is the first and only proton therapy centre in South
                    Asia. We provide a complete and comprehensive solution that is supported by a robust
                    multi-disciplinary platform for cancer management.</p>
            </div>
        </div>
    </div>
     
  
    {/* <!-- --------------------creation part ---main 6 none  and main 6new block --> */}
    <div className="main6-new ">
        <div className="main6-img-new">
            <img src={require("./IMG/Component 35 – 4.png")} alt=""/>
            <div className="text-in-image-new">
                <p className="main6-new-para1">Win Over Cancer With Apollo Proton Cancer Centre</p>
                <p className="main6-new-para2">Apollo Proton Cancer Centre is the first and only proton therapy centre in
                    South
                    Asia. We provide a complete and comprehensive solution that is supported by a robust
                    multi-disciplinary platform for cancer management.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Main6