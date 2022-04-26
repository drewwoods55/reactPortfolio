import React from 'react'
import "./Intro.scss"


function Intro() {
    

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="./assets/r2hpic.JPG" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, My Name is</h2>
                    <h1>Andrew Woods</h1>
                    <h3>
                        My name is Andrew but all my friends call me Drew so feel free. I am currently a junior developer with experience launching full stack web applications. I'm driven to continue my learning journey by remaining curiors. A kid from humble beginnings making dreams come true, one line of code at a time.  
                    </h3>
                    <a href="#about">
                        <img src="./assets/down.png" alt="" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Intro
