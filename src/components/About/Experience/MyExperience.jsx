import React from 'react'
import Experience from '../Experience'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Testimonials from '../../Work/Testimonials'
import GetInTouch from '../../Contact/GetInTouch'
import { Experience1 } from '../Experience1'

function MyExperience() {
    return (
        <>
            <Navbar />
            <Experience1 />
            <Testimonials />
            <GetInTouch />
            <Footer />
        </>
    )
}

export default MyExperience