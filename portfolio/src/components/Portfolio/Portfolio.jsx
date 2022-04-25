import React from 'react';
import "./Portfolio.scss"
import Data from "../../projects.json"


function Portfolio() {
  return (
      <section className='service-component-space'>
        <div className='heading'>
          <h1 className='heading'>Projects</h1>
          <p className='heading_p'>Recent Work</p>
        </div>
        <div
        className="container-portfolio-container">
          <div className="portfolio_item">
            {Data.map((post) => {
              return(
                <div key={post.id} className='card'>
                  <h4>{ post.name }</h4>
                  <img src={post.image} alt="" />
                  <p>{post.skills}</p>
                  
                </div>
              );
            })}
          </div>
        </div>
       
      </section>
   
  )
}
export default Portfolio;
