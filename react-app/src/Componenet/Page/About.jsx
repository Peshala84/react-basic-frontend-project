import React from 'react'
import './About.css'
import histroyimage from '../../assets/histroy.jpg'
import member_1 from '../../assets/member1.jpg'
import member_2 from '../../assets/member2.jpg'
import member_3 from '../../assets/member3.jpg'
import member_4 from '../../assets/member4.jpg'
import member_5 from '../../assets/member5.jpg'
import member_6 from '../../assets/member6.jpg'

export const About = () => {
  return (
    <div className='about-part'>

       <div className='about-inner'> 
      
      <h1 >About us</h1>

      </div>
       
      <div className='about-histroy'>

          <h1>Histroy</h1>
          <div className='about-histroy-inner'>
          <img src={histroyimage} alt="" />
          <p>EduPath was founded in 2020 by a group of passionate 
             educators and technologists who believed in the power of 
             education to transform lives. With a mission to make 
             high-quality education accessible to everyone, we 
             embarked on a journey to create an online learning 
             environment that is engaging, inclusive, and effective.</p>
            </div>
      </div>
       
      <div className='team-inner'>
          <h1>Team</h1>
        </div>
        <div className='about-team'>
       <div className='about-team-inner'>
       <img src={member_1} alt="" />
       <p>M.A.Ramesh Peshala</p>
        <p>Founder & CEO</p>
       </div>

       <div className='about-team-inner'>
       <img src={member_2} alt="" />
       <p>M.A.Ramesh Peshala</p>
       <p>Founder & CEO</p>
       </div>

       <div className='about-team-inner'>
       <img src={member_3} alt="" />
       <p>M.A.Ramesh Peshala</p>
       <p>Founder & CEO</p>
       </div>

       <div className='about-team-inner'>
       <img src={member_4} alt="" />
       <p>M.A.Ramesh Peshala</p>
       <p>Founder & CEO</p>
       </div>

       <div className='about-team-inner'>
       <img src={member_5} alt="" />
       <p>M.A.Ramesh Peshala</p>
       <p>Founder & CEO</p>
       </div>

       <div className='about-team-inner'>
       <img src={member_6} alt="" />
       <p>M.A.Ramesh Peshala</p>
       <p>Founder & CEO</p>
       </div>

      </div>
      <div className='value-inner'>
        <h1>Value</h1>
        <p>EduPath was founded in 2020 by a group of passionate 
             educators and technologists who believed in the power of 
             education to transform lives. With a mission to make 
             high-quality education accessible to everyone, we 
             embarked on a journey to create an online learning 
             environment that is engaging, inclusive, and effective.
             </p>
      </div>
      
    </div>
  )
}
