import React from 'react'
import Intro from './Intro'
import Skills from '../Work/Skills'
import Education from '../About/Education'
import Experience from '../About/Experience'
import GetInTouch from '../Contact/GetInTouch'
import YearOfExperience from '../About/YearOfExperience'
import Testimonials from '../Work/Testimonials'

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
            <Testimonials />
            <GetInTouch />
        </div>
    )
}

export default Home