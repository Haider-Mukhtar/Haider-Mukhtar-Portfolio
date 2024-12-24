import React from 'react'
import Navbar from '../Navbar/Navbar'
import Education from './Education'
import Experience from './Experience'
import Footer from '../Footer/Footer'
import YearOfExperience from './YearOfExperience'
import Objective from './Objective'
import { Education1 } from './Education1'

function About() {
  return (
    <>
        <Navbar />
        <Objective />
        <Education1 />
        <Footer />
    </>
  )
}

export default About