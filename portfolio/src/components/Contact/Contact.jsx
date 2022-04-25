import React from 'react'
import { useState } from "react";
import "./contact.scss"

function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    };
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://png.pngitem.com/pimgs/s/519-5190168_transparent-handshake-clipart-png-partnership-icon-transparent-png.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact Me.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" required />
                    <textarea type="text" placeholder="Message" required></textarea>
                    <button type="submit" className="s-button">Send</button>
                    {message && <span>Thanks, I will respond ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
