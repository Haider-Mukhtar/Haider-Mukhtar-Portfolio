import React from 'react'
import Intro from './Intro'
import Skills from '../Work/Skills'
import Education from '../About/Education'
import Experience from '../About/Experience'
import GetInTouch from '../Contact/GetInTouch'
import YearOfExperience from '../About/YearOfExperience'
import Testimonials from '../Work/Testimonials'
import Projects from '../Projects/Projects'
import Objective from '../About/Objective'

function Home() {
    return (
        <div className=''>
            {/*
            */}
            <Intro />
            <Skills />
            <Education />
            <YearOfExperience />
            <Experience />
            <Objective />
            <Projects />
            <Testimonials />
            <GetInTouch />
        </div>
    )
}

export default Home