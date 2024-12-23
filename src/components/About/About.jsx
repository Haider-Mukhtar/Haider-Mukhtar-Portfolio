import React from 'react'
import Navbar from '../Navbar/Navbar'
import Education from './Education'
import Experience from './Experience'
import Footer from '../Footer/Footer'
import YearOfExperience from './YearOfExperience'
import Objective from './Objective'

function About() {
  return (
    <>
        <Navbar />
        <Objective />
        <Education />
        <Footer />
    </>
  )
}

export default About