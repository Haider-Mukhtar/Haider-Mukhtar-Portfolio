import React from 'react'
import Navbar from '../Navbar/Navbar'
import Education from './Education'
import Experience from './Experience'
import Footer from '../Footer/Footer'
import YearOfExperience from './YearOfExperience'

function About() {
  return (
    <>
        <Navbar />
        <Education />
        <YearOfExperience />
        <Experience />
        <Footer />
    </>
  )
}

export default About