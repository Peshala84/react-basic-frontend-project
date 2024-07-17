import React from 'react'
import histroyimage from '../../assets/histroy.jpg';
import './History.css';

export const History = () => {
  return (

    <div className='about-part'>
    <div className='section'>
        <h1>History</h1>
        <div className='history-content'>
          <img src={histroyimage} alt="History" />
          <p>
            EduPath was founded in 2020 by a group of passionate educators and technologists who believed in the power of education to transform lives. With a mission to make high-quality education accessible to everyone, we embarked on a journey to create an online learning environment that is engaging, inclusive, and effective.
          </p>
        </div>
      </div>
      </div>
  )
}
