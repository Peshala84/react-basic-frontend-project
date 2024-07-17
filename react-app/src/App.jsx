import './App.css'
import { NavBar } from './Componenet/NavBar'
import { About } from './Componenet/Page/About'
import { Home } from './Componenet/Page/Home'
import { Contact } from './Componenet/Page/Contact'
import { Route, Routes } from 'react-router-dom'
import { History } from './Componenet/Page/History'
import Team from './Componenet/Page/Team'
import Values from './Componenet/Page/Values'



function App() {
  
  return (

    <>
   <NavBar/>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/values" element={<Values/>}/>
   </Routes>

    </>
  )
}

export default App
