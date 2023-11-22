import React from 'react'
import "./CSS/header.css"
const Header = () => {
    return (
        <div>
            <header>
        <div className="continer">
            <div className="flex">
                <div className="logo">
                    <img src={require('./img/logo2.png')} alt="dog"/>
                </div>


                <button> <i className="fa-sharp fa-solid fa-phone"></i>ContactUs<i className="fa-sharp fa-solid fa-caret-down"></i></button> 
  
                <div className="burger-icon">
                    <i className="fa-solid fa-bars" style={{color:'#b2b4b8',fontSize:"35px"}}></i>
                </div>
            </div>
        </div>
    </header>
        </div>
    )
}

export default Header