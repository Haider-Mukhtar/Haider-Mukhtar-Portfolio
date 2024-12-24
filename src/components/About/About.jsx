import React from 'react'
import Navbar from '../Navbar/Navbar'
import Education from './Education'
import Experience from './Experience'
import Footer from '../Footer/Footer'
import YearOfExperience from './YearOfExperience'
import Objective from './Objective'
import { Education1 } from './Education1'
import AboutCards from './AboutCards'

function About() {
  return (
    <>
        <Navbar />
        <AboutCards />
        <Education1 />
        <Footer />
    </>
  )
}

export default About