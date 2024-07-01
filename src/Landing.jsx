import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllProjects from './components/AllProjects/AllProjects'
import App from './App'

const Landing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/all-projects' element={<AllProjects />} />
      </Routes>
    </div>
  )
}

export default Landing
