import React from 'react'
import Footer from '@/components/footer'
import LetsTalk from '@/components/lets-talk'
import Navbar from '@/components/navbar'

function Contact() {
  return (
    <>
      <Navbar />
      <div className='pt-4'>
        <LetsTalk />
      </div>
      <Footer />
    </>
  )
}

export default Contact