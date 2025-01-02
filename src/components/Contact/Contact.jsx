import React from 'react'
import Navbar from '../Navbar/Navbar'
// import GetInTouch from './GetInTouch'
// import Footer from '../Footer/Footer'
import Footer1 from '../Footer/Footer1'
import LetsTalk from './LetsTalk'
import NewNavbar from '../Navbar/NewNavbar'

function Contact() {
  return (
    <div>
      <NewNavbar />
      <div className='pt-4'>
        <LetsTalk />
      </div>
      <Footer1 />
    </div>
  )
}

export default Contact