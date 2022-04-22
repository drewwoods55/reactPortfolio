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
                <img src="https://media.istockphoto.com/vectors/hand-united-together-form-lines-triangles-and-particle-style-design-vector-id1075972590?k=20&m=1075972590&s=612x612&w=0&h=JwlXKWFEDRge42C-brFivkU5UwCLFIDFkvF5PwOhqOg=" alt="" />
            </div>
            <div className="right">
                <h2>Contact Me.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" required />
                    <textarea type="text" placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will respond ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
