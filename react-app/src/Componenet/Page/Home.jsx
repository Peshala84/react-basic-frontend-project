import React, { useState, useEffect } from 'react';
import './Home.css';
import headimage1 from '../../assets/edu1.jpg'
import headimage2 from '../../assets/edu3.jpg'
import headimage3 from '../../assets/edu2.jpg'

export const Home = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setDateTime(new Date());
      }, 1000);
  
      
      return () => clearInterval(timer);
    }, []);
    const getGreetingMessage = () => {

        const hours = dateTime.getHours();
        if (hours < 12) {
          return "Good Morning...!";
        } else if (hours < 18) {
          return "Good Afternoon...!";
        } else {
          return "Good Evening...!";
        }
      };
  
  return (
       <>
      
      <div className='home-time'>
        
        <h2 style={{ textAlign: 'center', }}> Hello <br /> {getGreetingMessage()}</h2>
        <div className='box'>
          <h1>EduPath</h1>
        </div>
      <div style={{ textAlign: 'center', }}>
      <h2>Today</h2>
      <h2>{dateTime.toLocaleDateString()}</h2>
      <h2>{dateTime.toLocaleTimeString()}</h2>
        </div>
    </div>
   

    <div className='home-title'>

        <h1>WELCOME TO OUR EduPath  WEBSITE</h1>

        <p>Education is a process of facilitating learning or the acquisition of 
           knowledge, skills, values, morals, beliefs, and habits. 
           It typically involves methods such as teaching, training, storytelling, 
           discussion, and directed research. Education can take place in 
           formal or informal settings and any experience that has a formative 
           effect on the way one thinks, feels, or acts may be considered educational. 
           The educational methods and the quality of education can vary significantly 
           around the world, influenced by cultural, economic, and social factors.
        </p>
    </div>
    <div className='home-content'>
        <div className='home-content-left'>
        <img src={headimage1} alt="" />
            <p>The world of technology is constantly buzzing with innovation. 
                From artificial intelligence generating creative content to 
                advancements in virtual reality, new tech is shaping the way 
                we live, work, and play.</p>
        </div>
        <div className='home-content-left'>
            <img src={headimage2} alt="" />
            <p>
            <p>There have been some exciting scientific breakthroughs lately!
            Researchers have made progress in areas like gene editing, with a 
            technique called "prime editing" showing promise in correcting a 
            cystic fibrosis mutation.</p>
            </p>
        </div>
        <div className='home-content-left'>
            <img src={headimage3} alt="" />
            <p>
            <p>Artificial intelligence (AI) is all about simulating human intelligence in machines.
            It involves creating computers and systems that can reason, learn, and act autonomously.
             AI is already being used in many aspects of our lives, from facial recognition software 
             to self-driving cars.</p>
            </p>
        </div>
    </div>
    </>
    
  )
}
