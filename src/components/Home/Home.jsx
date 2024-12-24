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
import { Education1 } from '../About/Education1'
import { Experience1 } from '../About/Experience1'

function Home() {
    return (
        <div className=''>
            {/*
            */}
            <Intro />
            <Skills />
            <Education1 />
            <YearOfExperience />
            <Experience1 />
            <Objective />
            <Projects />
            <Testimonials />
            <GetInTouch />
        </div>
    )
}

export default Home