import React from "react";
import "./about.scss";
// import Resume from './assets/AndrewWoodsResume.pdf'

const About = () => {
  return (
    
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <a href="./assets/AndrewWoodsResume.pdf" download>
          <img  src="./assets/resume_pic.png" alt="" className="a-img" />
          </a>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Languages</h1>
        <p className="a-sub">
          {/* From static to full-stack: */}
          {/* <br /> */}

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>JavaScript</li>
            <li>Node.Js</li>
            <li>React.JS</li>
            <li>MySQL</li>
            
          </ul>
          <br/>
          Never stop learning <br/> && <br/> Learn to never stop 

          
         
        </p>
        
        <p className="a-desc">
          (Click on Resume to Download)
        </p>
        
      </div>
    </div>
  );
};

export default About;