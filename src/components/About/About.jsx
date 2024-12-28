import React from 'react'
import Navbar from '../Navbar/Navbar'
import Education from './Education'
// import Experience from './Experience'
// import Footer from '../Footer/Footer'
// import YearOfExperience from './YearOfExperience'
// import Objective from './Objective'
// import { Education1 } from './Education1'
import AboutCards from './AboutCards'
import Footer1 from '../Footer/Footer1'
import LetsTalk from '../Contact/LetsTalk'

function About() {
  return (
    <>
        <Navbar />
        <AboutCards />
        <LetsTalk />
        <Footer1 />
    </>
  )
}

export default About