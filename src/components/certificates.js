import './certificates.css';

import React from 'react'
import react from "../assets/react.jpg"
import oracle from "../assets/oracle.jpg"
import cloud from "../assets/cloud.jpg"
import hacksql from "../assets/hacksql.jpg"
import php from "../assets/php.jpg"
import datascience from "../assets/datascience.jpg"
import  dbms from "../assets/dbms.jpg"
import  python from "../assets/codepython.jpg"

import { NavLink } from 'react-router-dom';
 // Make sure to import NavLink if you're using it.

const Certificates = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Certificates</h1>
      <div className="project-container">

        <div className="project-card">
          <img src={react} alt="" />
          <h2 className="project-title">React Certification from Udemy</h2>
          </div>
        
      
       
        <div className="project-card">
          <img src={oracle} alt="" />
          <h2 className="project-title">React Certification from Udemy</h2>
          </div>
       
        
        

        {/* Add more project cards as needed */}
      
        <div className="project-card">
        <img src={react} alt="" />
        <h2 className="project-title">React Certification from Udemy</h2>
        </div>
    
        

        {/* Add more project cards as needed */}
        
        <div className="project-card">
          <img src={hacksql} alt="" /> {/* Replace project2Image with the URL of your second project's image */}
          
          <h2 className="project-title">Intermidiate SQL by HackerRank</h2>
        </div>
        

         {/* Add more project cards as needed */}
        
         <div className="project-card">
          <img src={php} alt="" /> {/* Replace project2Image with the URL of your second project's image */}
          <h2 className="project-title">PHP and MySql Certificate by Spoken Tutorial</h2>
        </div>
        

         {/* Add more project cards as needed */}
        
         <div className="project-card">
          <img src={datascience} alt="" /> {/* Replace project2Image with the URL of your second project's image */}
          
          <h2 className="project-title">Introduction to Data Science by Great Learning</h2>
        </div>
        

         {/* Add more project cards as needed */}
         
         <div className="project-card">
          <img src={python} alt="" /> {/* Replace project2Image with the URL of your second project's image */}
          
          <h2 className="project-title">Python Basic Certificate by Code Shef</h2>
          </div>
          


        {/* Add more project cards as needed */}
        
        <div className="project-card">
          <img src={dbms} alt="" /> {/* Replace project2Image with the URL of your second project's image */}
          
          <h2 className="project-title">Database Management System by Great Learning</h2>
        </div>
        
             
        </div>
        </div>      
    
     
  );
};

export default Certificates;
