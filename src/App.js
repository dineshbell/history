import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import About from './About'

const App = () => {
  return (
    <div>
      
     <center>
      <BrowserRouter>
     <Navbar/>
      <Routes>
        
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/about" element={<About/>}/>
      
      </Routes>
      </BrowserRouter>
      </center>
      

     
    </div>
  )
}

export default App

