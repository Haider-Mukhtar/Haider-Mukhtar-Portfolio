import React from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import YearOfExperience from '@/components/year-of-experience'
import NewExperienceCards from '@/components/experience-cards'
import Testimonials from '@/components/testimonials'
import LetsTalk from '@/components/lets-talk'
import Footer from '@/components/footer'

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
            <Footer />
        </>
    )
}

export default Home