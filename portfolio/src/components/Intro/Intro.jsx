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
                    <h2>Hi There, My Name is</h2>
                    <h1>Andrew Woods</h1>
                    <h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatibus accusamus unde at delectus odio, dolore eligendi nulla blanditiis pariatur ratione ea ex sed, hic reiciendis nihil non facilis modi!
                    </h3>
                    <a href="#a">
                        <img src="./assets/down.png" alt="" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Intro
