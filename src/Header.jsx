import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from "react-router-dom";


function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      


    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/service">Service</Link></li>
      </ul>
    </nav>




    </>
  )
}

export default Header
