import { useState } from 'react'
import oppa from './assets/oppa.svg'

import Header from './components/common/Header'
import Intro from './components/pages/Intro'
import Skills from './components/pages/Skils'
import Experience from './components/pages/Experience'
import AboutMe from './components/pages/AboutMe'
import Project from './components/pages/Project'
import Email from './components/pages/Email'
import Footer from './components/common/Footer'
function App() {


  return (
    <>
      <Header />
        
      <Intro />

      <Skills/>

      <Experience/>

      <AboutMe/>

      <Project/>
    
      <Email/>

      <Footer/>
    </>
  )
}

export default App
