import React from 'react'
import Navbar from '../Navbar/Navbar'
// import { Experience1 } from './Experience1'
import Testimonial from '../Work/Testimonials'
import Footer1 from '../Footer/Footer1'
// import GetInTouch from '../Contact/GetInTouch'
import NewExperienceCards from './NewExperienceCards'
import LetsTalk from '../Contact/LetsTalk'


function MyExperience() {
    return (
        <>
            <Navbar />
            <div className='pt-16'>
                <NewExperienceCards />
            </div>
            <Testimonial />
            <LetsTalk />
            <Footer1 />
        </>
    )
}

export default MyExperience