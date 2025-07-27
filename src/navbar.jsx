import React from 'react'
import Jobster from '/white_logo_jobster.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
          <header>
        <div className="navbar">
            <div className="logoname"><img className="logo" src={Jobster}/><p>Jobster</p></div>
            <ul className="links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Freelancers</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
            <a href="/login" className="action_btn"><i className="fa-solid fa-user"></i> Log In</a>
            <div className="toggle_btn">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
        <div className="dropdown_menu" id="dropdownMenu">
            <a href="#"><i className="fa-solid fa-house"></i> Home</a>
            <a href="#"><i className="fa-solid fa-users"></i> Freelancers</a>
            <a href="#"><i className="fa-solid fa-briefcase"></i> Services</a>
            <a href="#"><i className="fa-solid fa-circle-info"></i> How It Works</a>
            <a href="#"><i className="fa-solid fa-building"></i> About Us</a>
            <a href="/login" className="action_btn"><i className="fa-solid fa-user"></i> Sign In</a>
        </div>
    </header>
    </div>
  )
}

export default Navbar
