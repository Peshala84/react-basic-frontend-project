import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css';
import logoimage from '../assets/edu.png';
import { NavBarToggle } from './NavBarToggle';


export const NavBar = () => {
  return (
    
    <nav className='nav-left'>
        <div className='nav-left-inner'>
          <img src={logoimage} alt="logo" />
          <Link to ='/' className='logo-text'>EduPath</Link>
        </div>
        
        <div className='nav-right-inner'>
        <ul>
            <li>
                <Link to='/home' className='nav-bar-inner'>Home</Link>
            </li>
            <li>
                <Link to='/about' className='nav-bar-inner'>About</Link>
            </li>
            <li>
                <Link to='/contact' className='nav-bar-inner'>Contact</Link>
            </li>
        </ul>
          <NavBarToggle/>
        </div>
    </nav>
  )
}
