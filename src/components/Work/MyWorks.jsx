import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Skills from './Skills'
import GetInTouch from '../Contact/GetInTouch'
import Testimonials from './Testimonials'
import Projects from '../Projects/Projects'

function MyWorks() {
  return (
    <>
        <Navbar />
        <Skills />
        <Projects />
        <Testimonials />
        <GetInTouch />
        <Footer />
    </>
  )
}

export default MyWorks