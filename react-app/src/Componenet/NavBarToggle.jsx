import React,{useEffect,useState} from 'react'
import './NavBar.css'

export const NavBarToggle = () => {

const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <button  className='nav-button'onClick={toggleDarkMode}>
    change {darkMode ? 'Light' : 'Dark'} Mode
  </button>
  )
}

