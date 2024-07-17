import React from 'react'
import member_1 from '../../assets/member1.jpg';
import member_2 from '../../assets/member2.jpg';
import member_3 from '../../assets/member3.jpg';
import member_4 from '../../assets/member4.jpg';
import member_5 from '../../assets/member5.jpg';
import member_6 from '../../assets/member6.jpg';
import './Team.css'

const Team = () => {
  return (
    <div className='section'>
        <h1>Team</h1>
        <p>At EduPath, our team is composed of dedicated educators, innovative 
          developers, and passionate designers, all working together to transform 
          education through technology. With a shared vision of making learning 
          accessible and engaging, we leverage our diverse skills and expertise 
          to create a platform that caters to the needs of students, teachers, and 
          lifelong learners. Our collaborative spirit and commitment to excellence 
          drive us to continuously improve and expand our offerings, ensuring that 
          EduPath remains a leader in the ed-tech industry.</p>
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
  )
}

export default Team