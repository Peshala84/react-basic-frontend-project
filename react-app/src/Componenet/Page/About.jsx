import React from 'react';
import './About.css';
import { Link } from 'react-router-dom'


export const About = () => {
  return (
    <>
    <div className='about-part'>
      <div className='about-inner'>
        <h1>About us</h1>
        <p>EduPath is an innovative online education platform dedicated 
           to providing high-quality, accessible learning opportunities 
           to students worldwide. Our mission is to empower learners with 
           diverse courses, expert instructors, and interactive content, 
           ensuring a flexible and engaging learning experience. Join EduPath 
           and take the next step towards achieving your educational and career goals.</p>
      </div>

      <div className='video-container'>
        <video controls autoPlay  className='about-video'>
          <source src="video_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className='about-link'>
      <Link to='/history' className='about-link-inner'>History</Link>
      <Link  to='/team' className='about-link-inner'>Team</Link>
      <Link to='/values' className='about-link-inner'>Value</Link>
    </div>
    </div>
    </>
  );
};
