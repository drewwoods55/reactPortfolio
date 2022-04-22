import React from 'react'
import "./Portfolio.scss"

function Portfolio() {
    return (
        <div className="Portfolio" id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="portContainer">
                <article className="portfolio_item">
                    <div className="port_itemImg"></div>
                    <h3>This is a portfolio title</h3>
                    <a href="https://github.com/drewwoods55/cityFinder" className="btn">GitHub</a>
                    <a href="https://drewwoods55.github.io/cityFinder/">Website</a>

                </article>
            </div>
            
        </div>
    )
}

export default Portfolio
