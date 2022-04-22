import React from 'react'
import "./topbar.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';


function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        portfolio.
                    </a>
                    <div className="itemContainer">
                        <LinkedInIcon className="icon" />
                        <span>www.linkedin.com/in/drewwwoods</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className="icon" />
                        <span>drewwoods9@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar
