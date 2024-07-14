import { useState } from 'react'
import './App.css'
import { NavBar } from './Componenet/NavBar'
import { About } from './Componenet/Page/About'
import { Home } from './Componenet/Page/Home'
import { Contact } from './Componenet/Page/Contact'
import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <>
   <NavBar/>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
   </Routes>
   
    </>
  )
}

export default App
