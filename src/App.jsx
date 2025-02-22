import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import './App.css'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Service from './Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Router>
     
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} /> 
      </Routes>
    </Router>
   
      
    </>
  )

}

export default App
