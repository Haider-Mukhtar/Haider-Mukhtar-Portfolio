import Footer from '@/components/footer'
import LetsTalk from '@/components/lets-talk'
import Navbar from '@/components/navbar'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Testimonials from '@/components/testimonials'
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
        <Footer />
    </>
  )
}

export default MyWorks