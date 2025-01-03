import React from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import YearOfExperience from '@/components/YearOfExperience'
import NewExperienceCards from '@/components/NewExperienceCards'
import Testimonials from '@/components/Testimonials'
import LetsTalk from '@/components/LetsTalk'
import Footer1 from '@/components/Footer1'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <YearOfExperience />
            <NewExperienceCards />
            <Testimonials />
            <LetsTalk />
            <Footer1 />
        </>
    )
}

export default Home