import React, { Component } from 'react';
import './About.css';
import profilePic from '../assets/dummy/profile_pic_name.jpg';

export default class About extends Component {
  render() {
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
              I’d like to introduce myself, I’m Kunsang Tsering. As I am passionate about technology, I also bring a unique cultural background being both Tibetan and Nepali. Currently pursuing a Bachelor's degree in Computer Science with a minor in Graphic and Interaction Design at Queens College. My academic journey is fueled by a love for learning, and I'm a firm believer in how technology can bring people together. My recent internship highlighted the positive impact tech can have on lives, especially in enhancing accessibility for those with visual impairments. I love blending creativity with technology through my design minor. Overall, I'm just excited about the chance to contribute my skills to your team's projects, ready for new challenges, and eager for the journey ahead.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
