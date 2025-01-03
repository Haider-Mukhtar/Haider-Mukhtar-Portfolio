import React from 'react'
import Footer1 from '@/components/Footer1'
import LetsTalk from '@/components/LetsTalk'
import Navbar from '@/components/Navbar'

function Contact() {
  return (
    <>
      <Navbar />
      <div className='pt-4'>
        <LetsTalk />
      </div>
      <Footer1 />
    </>
  )
}

export default Contact