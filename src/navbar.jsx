import React from 'react'
import Jobster from '/white_logo_jobster.png'
import './navbar.css'

const navbar = () => {
  return (
    <div>
          <header>
        <div class="navbar">
            <div class="logoname"><img class="logo" src={Jobster}/><p>Jobster</p></div>
            <ul class="links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Freelancers</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
            <a href="/login" class="action_btn"><i class="fa-solid fa-user"></i> Log In</a>
            <div class="toggle_btn">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
        <div class="dropdown_menu" id="dropdownMenu">
            <a href="#"><i class="fa-solid fa-house"></i> Home</a>
            <a href="#"><i class="fa-solid fa-users"></i> Freelancers</a>
            <a href="#"><i class="fa-solid fa-briefcase"></i> Services</a>
            <a href="#"><i class="fa-solid fa-circle-info"></i> How It Works</a>
            <a href="#"><i class="fa-solid fa-building"></i> About Us</a>
            <a href="/login" class="action_btn"><i class="fa-solid fa-user"></i> Sign In</a>
        </div>
    </header>
    </div>
  )
}

export default navbar
