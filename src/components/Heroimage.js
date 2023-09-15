import "./HeroimageStyle.css"

import React from 'react'

import IntroImg from "../assets/bg2.png";
import { Link } from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="bg1" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Hey there I am Shubham</p>
            <h1>Beginning the Journey</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Certificates</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimage