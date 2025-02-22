import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        This is about page. I would add content later
        <Header></Header>
      </div>
      
    </>
  )
}

export default About