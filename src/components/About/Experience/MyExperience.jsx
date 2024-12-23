import React from 'react'
import Experience from '../Experience'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Testimonials from '../../Work/Testimonials'
import GetInTouch from '../../Contact/GetInTouch'

function MyExperience() {
    return (
        <>
            <Navbar />
            <Experience />
            <Testimonials />
            <GetInTouch />
            <Footer />
        </>
    )
}

export default MyExperience