import React from 'react'
// import Navbar from '../Navbar/Navbar'
// import Footer from '../Footer/Footer'
import Skills from './Skills'
// import GetInTouch from '../Contact/GetInTouch'
import Testimonials from './Testimonials'
import Projects from '../Projects/Projects'
import Footer1 from '../Footer/Footer1'
import LetsTalk from '../Contact/LetsTalk'
import NewNavbar from '../Navbar/NewNavbar'

function MyWorks() {
  return (
    <>
        <NewNavbar />
        <div className='pt-4 bg-gray-100'>
        <Skills />
        </div>
        <Projects />
        <Testimonials />
        <LetsTalk />
        <Footer1 />
    </>
  )
}

export default MyWorks