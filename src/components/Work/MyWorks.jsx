import React from 'react'
import Navbar from '../Navbar/Navbar'
// import Footer from '../Footer/Footer'
import Skills from './Skills'
// import GetInTouch from '../Contact/GetInTouch'
import Testimonials from './Testimonials'
import Projects from '../Projects/Projects'
import Footer1 from '../Footer/Footer1'
import LetsTalk from '../Contact/LetsTalk'

function MyWorks() {
  return (
    <>
        <Navbar />
        <Skills />
        <Projects />
        <Testimonials />
        <LetsTalk />
        <Footer1 />
    </>
  )
}

export default MyWorks