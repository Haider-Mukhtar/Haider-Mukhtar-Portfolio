import React, { useState } from 'react'
import Intro from './Intro'
import Skills from '../Work/Skills'
import Education from '../About/Education'
import Experience from '../About/Experience'
import GetInTouch from '../Contact/GetInTouch'

function Home() {
    return (
        <div className=''>
            {/*
            */}
            <Intro />
            <Skills />
            <Education />
            <Experience />
            <GetInTouch />
        </div>
    )
}

export default Home