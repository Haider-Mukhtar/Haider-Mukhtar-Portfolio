import React from 'react'
import Footer from '@/components/footer'
import LetsTalk from '@/components/lets-talk'
import Navbar from '@/components/navbar'
import NewExperienceCards from '@/components/experience-cards'
import Testimonials from '@/components/testimonials'


function MyExperience() {
    return (
        <>
            <Navbar />
            <div className='pt-4'>
                <NewExperienceCards />
            </div>
            <Testimonials />
            <LetsTalk />
            <Footer />
        </>
    )
}

export default MyExperience