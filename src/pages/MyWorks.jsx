import Footer1 from '@/components/Footer1'
import LetsTalk from '@/components/LetsTalk'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'
import React from 'react'


function MyWorks() {
  return (
    <>
        <Navbar />
        <div className='pt-4 bg-gray-100'>
        <Skills />
        </div>
        <Projects />
        <Testimonials />
        <LetsTalk />
        <Footer1 />
    </>
  )
}

export default MyWorks