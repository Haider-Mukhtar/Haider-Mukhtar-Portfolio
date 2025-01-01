import React from 'react'
import Navbar from '../Navbar/Navbar'
// import GetInTouch from './GetInTouch'
// import Footer from '../Footer/Footer'
import Footer1 from '../Footer/Footer1'
import LetsTalk from './LetsTalk'

function Contact() {
  return (
    <div>
      <Navbar />
      <div className='pt-16'>
        <LetsTalk />
      </div>
      <Footer1 />
    </div>
  )
}

export default Contact