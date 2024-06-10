import React from 'react';
import './About.css';
import profilePic from '../assets/dummy/profile_pic_name.jpg'; // Make sure this path is correct

function About() {
  return (
    <div className="about-container">
      <div className="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src={profilePic}
            alt="Profile Pic"
          />
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Your Name</div>
          <div className="brief_description">
            // Details about you goes here
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
