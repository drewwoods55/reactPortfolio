import React from 'react'
import "./footer.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
function footer() {
  return (
    <div className='footer-container'>
        <div className='socials-container'>
            <a className='socials-icons' href="https://www.linkedin.com/in/seth-mulia/">
                <i className='footer-icon' aria-hidden="true">{<LinkedInIcon/>}</i>
            </a>
            <a className='socials-icons' href="https://github.com/iMula">
                <i className='footer-icon' aria-hidden="true">{<GitHubIcon/>}</i>
            </a>
            <a className='socials-icons' href="https://www.instagram.com/smulaa__/">
                <i className='footer-icon' aria-hidden="true">{<InstagramIcon/>}</i>
            </a>
        </div>
        <p id="copyright" className='footer-link'> © 2022 SethMulia </p>
    </div>
  )
}
export default footer