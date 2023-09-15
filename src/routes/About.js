
import React from 'react'

import Navbar from '../components/Navbar';
import Footer from "../components/footer";
import HeroImg2 from '../components/HeroImg2';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 
  heading="ABOUT ME."
  text="Passionate about Full Stack Web Development and Data science with the technical skills. Good at designing and developing projects. Proficient in HTML5, CSS3, Bootstrap5, Django, Sql. Willingness to learn new technology and adapt to any situation."
  // Adjust the margin-top value as needed
/>


      <Footer />
    </div>
  )
}

export default About