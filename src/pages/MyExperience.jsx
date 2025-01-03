import React from 'react'
import Footer1 from '@/components/Footer1'
import LetsTalk from '@/components/LetsTalk'
import Navbar from '@/components/Navbar'
import NewExperienceCards from '@/components/NewExperienceCards'
import Testimonials from '@/components/Testimonials'


function MyExperience() {
    return (
        <>
            <Navbar />
            <div className='pt-4'>
                <NewExperienceCards />
            </div>
            <Testimonials />
            <LetsTalk />
            <Footer1 />
        </>
    )
}

export default MyExperience