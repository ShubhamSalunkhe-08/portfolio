import './WorkCardstyles.css';

import React from 'react'
import sb1 from "../assets/sb1.png"
import sb2 from "../assets/sb2.png"
import hp1 from "../assets/hp1.png"
import hp2 from "../assets/hp2.png"
import tb from "../assets/tb.png"
import ec1 from "../assets/ec1.png"
import ec2 from "../assets/ec2.png"
import ses from "../assets/ses.png"
import  todo from "../assets/todo.png"
import  bank from "../assets/bank.png"
import  faculty from "../assets/faculty.png"


import { NavLink } from 'react-router-dom';
 // Make sure to import NavLink if you're using it.

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={sb1} alt="" />
          <img src={sb2} alt="" />
          <h2 className="project-title">Seed Bank for Agriculture</h2>
          <div className="pro-details">
            <p>Built a web application for buying and selling seeds and it also has features
              for crop prediction using Django, HTML/CSS, JavaScript and it also has weather API integration for crop prediction.</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">View</NavLink>
              <NavLink to="https://github.com/ShubhamSalunkhe-08/Seed-bank-for-agriculture" className="btn">Source</NavLink>
            </div>
          </div>
        </div>

        {/* Second project card */}
        <div className="project-card" >
          <img src={hp1} alt="" /> {/* Replace project2Image with the URL of your second project's image */}
          <img src={hp2} alt="" /> {/* Replace project2Image with the URL of your second project's image */}
          <h2 className="project-title">House Price Prediction</h2>
          <div className="pro-details">
            <p>Built a machine learning project that predicts house prices using different
attributes</p>
            <div className="pro-btns" style={{ display: 'flex', justifyContent: 'center' }}>
              <NavLink to="https://github.com/ShubhamSalunkhe-08/House-Price-Prediction" className="btn">Source</NavLink>
            </div>
          </div>
        </div>

        {/* Add more project cards as needed */}
        <div className="project-card">
          
          <img src={tb} alt="" /> {/* Replace project2Image with the URL of your second project's image */}
          <h2 className="project-title">Titanic Survival Prediction</h2>
          <div className="pro-details">
            <p>Built a Data Mining project that visualizes the survival of titanic . This
project was done in Tableau</p>
              <div className="pro-btns" style={{ display: 'flex', justifyContent: 'center' }}>
              <NavLink to="https://public.tableau.com/app/profile/shubham.salunkhe2148/viz/TitanicSurvivalProject_16794686044120/Dashboard1" className="btn">View</NavLink>
             
            </div>
          </div>
        </div>

        {/* Add more project cards as needed */}
        <div className="project-card">
          <img src={faculty} alt="" /> {/* Replace project2Image with the URL of your second project's image */}
          
          <h2 className="project-title">Faculty management system</h2>
          <div className="pro-details">
            <p>Built a web appication using java that is used to store the faculty information, their attendance and sitting arrangement in the college</p>
              <div className="pro-btns" style={{ display: 'flex', justifyContent: 'center' }}>
              {/* <NavLink to="https://public.tableau.com/app/profile/shubham.salunkhe2148/viz/TitanicSurvivalProject_16794686044120/Dashboard1" className="btn">Source</NavLink> */}
             
            </div>
          </div>
        </div>

         {/* Add more project cards as needed */}
         <div className="project-card">
          <img src={ec1} alt="" /> {/* Replace project2Image with the URL of your second project's image */}
          <img src={ec2} alt="" /> {/* Replace project2Image with the URL of your second project's image */}
          <h2 className="project-title">Ecommerce Website</h2>
          <div className="pro-details">
            <p>Built an Ecommerce website that includes buying an Electronics appliances like mobiles, Laptops, TV's etc </p>
              <div className="pro-btns" style={{ display: 'flex', justifyContent: 'center' }}>
              <NavLink to="https://shopcording.000webhostapp.com/" className="btn">Live</NavLink>
             
            </div>
          </div>
        </div>

         {/* Add more project cards as needed */}
         <div className="project-card">
          <img src={todo} alt="" /> {/* Replace project2Image with the URL of your second project's image */}
          
          <h2 className="project-title">To-Do List</h2>
          <div className="pro-details">
            <p>Built a to-do list web application that helps to manage the day. We can also delete the completed task</p>
              <div className="pro-btns" style={{ display: 'flex', justifyContent: 'center' }}>
              <NavLink to="" className="btn">Source</NavLink>
             
            </div>
          </div>
        </div>

        
         {/* Add more project cards as needed */}
         <div className="project-card">
          <img src={ses} alt="" /> {/* Replace project2Image with the URL of your second project's image */}
          
          <h2 className="project-title">To-Do List</h2>
          <div className="pro-details">
            <p>Built a student enrollement system web application that takes input as Name, Image link, Website, Email and stores the details in the Database</p>
              <div className="pro-btns" style={{ display: 'flex', justifyContent: 'center' }}>
              <NavLink to="https://github.com/ShubhamSalunkhe-08/student-registration-LGM" className="btn">Source</NavLink>
             
            </div>
          </div>
        </div>

         {/* Add more project cards as needed */}
         <div className="project-card">
          <img src={bank} alt="" /> {/* Replace project2Image with the URL of your second project's image */}
          
          <h2 className="project-title">Basic Banking Application</h2>
          <div className="pro-details">
            <p>Built a banking application that is used to send and recieve money/</p>
              <div className="pro-btns" style={{ display: 'flex', justifyContent: 'center' }}>
              <NavLink to="https://github.com/ShubhamSalunkhe-08/Basic-Banking-Web-Applicatio0n" className="btn">Source</NavLink>
             
            </div>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default WorkCard;
