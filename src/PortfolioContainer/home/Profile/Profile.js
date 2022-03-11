import React from "react";
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.linkedin.com/in/arun-kumar-5a459613a">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                            <a href="https://www.instagram.com/arun_mack/">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/people/Arun-Mack/100005665599166/">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com/arunmak654/">
                                <i className="fa fa-twitter-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I Am <span className="highlighted-text">ARUN KUMAR</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev🐱‍🏍",
                                        1000,
                                        "Product Devloper🎁",
                                        1000,
                                        "React.JS Devloper👶",
                                        1000,
                                        "TypeScript Devloper🧛‍♂️",
                                        1000,
                                    ]}
                                />
                            </h1>
                        </span>
                        <span className="profile-role-tagline">
                            knack of building the front-end operations.
                        </span>
                    </div>

                    <div className="profile-options">
                        <button className="btn primary-btn" onClick={() => { alert('Devlopment In-Progress🛠 Kindly Contact Via Social Platform😊'); }}>
                            Hire Me
                        </button>
                        <a href="Arun_Resume.pdf" download='Arun CV.pdf'>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background"></div>
            </div>
        </div>
    )
}

