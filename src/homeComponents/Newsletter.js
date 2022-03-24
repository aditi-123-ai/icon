import React from 'react';
import "../homeCSS/Newsletter.css";


const Newsletter = () => {
    return (
        <div className="newsletter">
            <img src="/icons/email.svg" alt="email"/>
            <h3>Get our best deals straight to your Inbox!</h3>
            <div className="newsletterSignup">
                <input type="text" placeholder="Enter your Email Address" />
                <button>Sign Up</button>
            </div>
        </div>
    );
}

export default Newsletter;
