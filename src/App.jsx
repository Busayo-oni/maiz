import React from 'react'
import OurStory from './component/OurStory'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import { MenuContainer } from './component/MenuContainer'
import HeroSection from './component/HeroSection'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<HeroSection />} />
      <Route path='/OurStory' element={<OurStory />} />
      <Route path='/MenuContainer' element={<MenuContainer />} />
      <Route path='/HeroSection' element={<HeroSection />} />
    </Routes>
      {/* <OurStory /> */}
    </>
  )
}

export default App
