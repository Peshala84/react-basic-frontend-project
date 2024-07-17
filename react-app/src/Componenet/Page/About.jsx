import React from 'react';
import './About.css';
import histroyimage from '../../assets/histroy.jpg';
import member_1 from '../../assets/member1.jpg';
import member_2 from '../../assets/member2.jpg';
import member_3 from '../../assets/member3.jpg';
import member_4 from '../../assets/member4.jpg';
import member_5 from '../../assets/member5.jpg';
import member_6 from '../../assets/member6.jpg';

export const About = () => {
  return (
    <div className='about-part'>
      <div className='about-inner'>
        <h1>About us</h1>
      </div>

      <div className='section'>
        <h1>History</h1>
        <div className='history-content'>
          <img src={histroyimage} alt="History" />
          <p>
            EduPath was founded in 2020 by a group of passionate educators and technologists who believed in the power of education to transform lives. With a mission to make high-quality education accessible to everyone, we embarked on a journey to create an online learning environment that is engaging, inclusive, and effective.
          </p>
        </div>
      </div>

      <div className='section'>
        <h1>Team</h1>
        <div className='team-content'>
          <div className='team-member'>
            <img src={member_1} alt="James William" />
            <p>James William</p>
            <p>Professor</p>
          </div>

          <div className='team-member'>
            <img src={member_2} alt="Amelia Margaret" />
            <p>Amelia Margaret</p>
            <p>Senior Professor</p>
          </div>

          <div className='team-member'>
            <img src={member_3} alt="Damian Joseph" />
            <p>Damian Joseph</p>
            <p>Lecturer</p>
          </div>

          <div className='team-member'>
            <img src={member_4} alt="Emma Mary" />
            <p>Emma Mary</p>
            <p>Senior Lecturer</p>
          </div>

          <div className='team-member'>
            <img src={member_5} alt="Michael Richard" />
            <p>Michael Richard</p>
            <p>Assistant Lecturer</p>
          </div>

          <div className='team-member'>
            <img src={member_6} alt="Harry Callum" />
            <p>Harry Callum</p>
            <p>Senior Professor</p>
          </div>
        </div>
      </div>

      <div className='section'>
        <h1>Values</h1>
        <div className='value-content'>
          <p>
            Welcome to EduPath, your gateway to a world of knowledge and opportunities. At EduPath, we believe in empowering learners of all ages with the tools and resources they need to succeed. Whether you're looking to advance your career, develop new skills, or explore new interests, our comprehensive courses and expert instructors are here to guide you every step of the way. Join our community today and embark on a journey of lifelong learning and personal growth with EduPath.
          </p>
        </div>
      </div>
    </div>
  );
};
