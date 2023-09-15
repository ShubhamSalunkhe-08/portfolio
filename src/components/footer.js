import "./footerStyles.css"
import React from 'react'
import { FaHome } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaMailBulk } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import linkdin from "../assets/linkdin.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Navi Mumbai</p>
              <p>Maharashtra, India</p>
            </div>
          </div>

          <div className="phone">
            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />9757110273</h4>
          </div>

          <div className="email">
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />shubhamsalunkhe066@gmail.com</h4>
          </div>

        
            <a href="https://www.linkedin.com/in/shubham-salunkhe-a03b24235/" target="_blank" rel="noopener noreferrer">
              <img src={linkdin} alt="LinkedIn" className="linkedin-icon" style={{ color: "#fff", marginRight: "2rem" }} /> 
            </a>
        </div>
        </div>
        </div>
    
        
  )
}

export default Footer;
