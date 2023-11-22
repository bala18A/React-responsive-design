import React from 'react'
import "./CSS/main4.css"
const Main4 = () => {
  return (
    <div>
        <div className="main4">

<div className="main4-para1">
    <p><span>Organ specific Cancer Management Teams</span> <br/> for singular focus and exceptional outcomes</p>
</div>
<div className="main4-res">
    <div className="main4-para2">
        <p>What Constitutes Our Cancer Management Team</p>
    </div>
</div>
<div className='main4-image'>
    <img src={require("./IMG/APCC_Cancer Management-01.png")} alt=""/>
</div>
</div>
{/* <!--  main 4 inside in  image chane with  new creation --> */}
<div className="new-box-responsive">
<div className="box-head">
    <div className="new-box">
        <p>Prevent Care</p>
    </div>
    <div className="new-box">
        <p>Pathology</p>
    </div>
    <div className="new-box">
        <p>Histology</p>
    </div>
    <div className="new-box">
        <p>Genomics</p>
    </div>
    <div className="new-box">
        <p>imaging</p>
    </div>
    <br/>
    <div className="new-box">
        <p>PET-CT</p>
    </div>
    <div className="new-box">
        <p>Surgery</p>
    </div>
    <div className="new-box">
        <p>Medical</p>
    </div>
    <div className="new-box">
        <p>Radiation</p>
    </div>
    <div className="new-box">
        <p>Haemotalogy</p>
    </div>
</div>
</div>
    </div>
  )
}

export default Main4