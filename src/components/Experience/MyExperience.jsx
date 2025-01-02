import React from 'react'
// import Navbar from '../Navbar/Navbar'
// import { Experience1 } from './Experience1'
import Testimonial from '../Work/Testimonials'
import Footer1 from '../Footer/Footer1'
// import GetInTouch from '../Contact/GetInTouch'
import NewExperienceCards from './NewExperienceCards'
import LetsTalk from '../Contact/LetsTalk'
import NewNavbar from '../Navbar/NewNavbar'


function MyExperience() {
    return (
        <>
            <NewNavbar />
            <div className='pt-4'>
                <NewExperienceCards />
            </div>
            <Testimonial />
            <LetsTalk />
            <Footer1 />
        </>
    )
}

export default MyExperience