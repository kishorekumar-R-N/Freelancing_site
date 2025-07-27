import React from 'react'
import './navbar.css'
import  Web from '/web.jpg'
import  Video from '/video_editing.jpg'
import  SEO from '/SEO.jpg'
import  Content from '/content_creator.jpg'
import Vegeta from '/vegeta.jpg'
/* import Mobile from '/mobile.jpg'
import AI from '/AI.jpg'
import Data from '/data.jpg'
import UI from '/UI.jpg' */
import Logo from '/logo.jpg'

const Header = () => {
  return (
    <div>
          <div className="section">
        <div className="text">
            <h1>Scale your business with <span>top-tier freelancers</span></h1>
            <p>Access a global network of skilled professionals ready to help you succeed. From web development to content creation, find the perfect match for your project needs.</p>
            <div className="search-container">
                <form>
                    <input type="search" placeholder="What service are you looking for today?" required/>
                    <button type="submit"><i className="fa fa-search"></i> Search</button>
                </form>
            </div>
        </div>
    
        <div className="banner-hero">
            <div className="slider-hero" style={{'--quantity':8}}>
                <div className="item-hero" style={{'--position': 1, backgroundImage: `url(${Web})`}} data-title="Web Development"></div>
                <div className="item-hero" style={{'--position': 2, backgroundImage: `url(${Video})`}} data-title="Video Editing"></div>
                <div className="item-hero" style={{'--position': 3, backgroundImage: `url(${SEO})`}} data-title="SEO & Marketing"></div>
                <div className="item-hero" style={{'--position':4, backgroundImage: `url(${Content})`}} data-title="Content Creation"></div>
                <div className="item-hero" style={{'--position':5, backgroundImage: `url(${Vegeta})`}} data-title="Mobile Development"></div>
                <div className="item-hero" style={{'--position':6, backgroundImage: `url(${Vegeta})`}} data-title="AI & Machine Learning"></div>
                <div className="item-hero" style={{'--position':7, backgroundImage: `url(${Vegeta})`}} data-title="Data Analysis"></div>
                <div className="item-hero" style={{'--position':8, backgroundImage: `url(${Logo})`}} data-title="Logo Design"></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header
