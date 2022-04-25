import React from "react";
import "./about.scss";

const About = () => {
  return (
    
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <a href="Resume.pdf" download="Andrew Woods Resume.pdf">
          <img  src="./assets/resume_pic.png" alt="" className="a-img" />
          </a>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Languages</h1>
        <p className="a-sub">
          From static to full-stack:
          <br />

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.Js</li>
            <li>React.JS</li>
            <li>MySQL</li>
            <li>Current learning JAVA</li>
          </ul>
          <br/>
          Learning is the Goal. <br/> && <br/> Growth is the Success.

          
         
        </p>
        
        <p className="a-desc">
          (Click on my Resume to Download)
        </p>
        
      </div>
    </div>
  );
};

export default About;