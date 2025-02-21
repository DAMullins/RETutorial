import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"

import HouseCard from './components/HouseCard'
import Home from './pages/Home'
import Info from './pages/Info'
import TestNavbar from './pages/TestNavbar'

function App() {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/info" element = {<Info />}/>
        <Route path="/test" element = {<TestNavbar />}/>
      </Routes>
    </div>
  )
}

export default App