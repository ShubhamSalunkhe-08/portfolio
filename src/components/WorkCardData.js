import './WorkCardstyles.css';

import React from 'react'
import sb1 from "../assets/sb1.png"
import sb2 from "../assets/sb2.png"
import { NavLink } from 'react-router-dom';

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card" class="slideshow-container">
                <img src={sb1}  alt=""/>
                <img src={sb2} alt="" />
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>Text</p>
                    <div className="pro-btns">
                       <NavLink to="url.com" className="btn">View</NavLink> 
                       <NavLink to="url.com" className="btn">View</NavLink> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work