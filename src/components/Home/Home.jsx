import React from 'react'
import Intro from './Intro'
import Skills from '../Work/Skills'
import YearOfExperience from '../About/YearOfExperience'
import Testimonials from '../Work/Testimonials'
import Projects from '../Projects/Projects'
import AboutCards from '../About/AboutCards'
import NewExperienceCards from '../Experience/NewExperienceCards'
import LetsTalk from '../Contact/LetsTalk'
import Hero from './Hero'
// import { Experience1 } from '../Experience/Experience1'
// import { YearOfExperience1 } from '../About/YearOfExperience1'

function Home() {
    return (
        <>
            {/*
                <Intro />
                <AboutCards />  
                */}
            <Hero />
            <Skills />
            <Projects />
            <YearOfExperience />
            <NewExperienceCards />
            <Testimonials />
            <LetsTalk />
        </>
    )
}

export default Home