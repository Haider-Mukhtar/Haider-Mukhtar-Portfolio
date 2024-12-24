import React from 'react'
import pic from './aboutAssets/pic.png'
import arrowRight from './aboutAssets/rightArrow.svg'
import github from './aboutAssets/github.svg'
import linkedin from './aboutAssets/linkedin.svg'
import instagram from './aboutAssets/instagram.svg'
import myCV from './aboutAssets/HaiderMukhtar_CV.pdf'
import { Link } from 'react-router'

function AboutCards() {
    return (
        <div className='flex justify-center mt-1 py-10'>
            <div className='w-4/5 2xl:px-8'>
                <div className='flex flex-row gap-4'>
                    <div className='w-1/2 bg-blue-500 p-6 space-y-4 rounded-xl'>
                        <img className='w-16 h-16 bg-white rounded-full' src={pic} />
                        <div className='text-4xl text-white font-primaryRegular'>
                            <span className='font-primaryBold'>
                                Hi, I'm Haider.
                            </span> I build cool websites like this one.
                        </div>
                        <div className='text-xl text-white font-primaryRegular'>
                            <Link href='/contact'>
                                <div className='flex flex-row items-center gap-1 font-primarySemiBold'>
                                    Contact
                                    <img className='w-6 h-6' src={arrowRight} />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='grid grid-cols-2 h-full gap-4'>
                            <a href='https://www.linkedin.com/in/haider-mukhtar/' className='bg-blue-500 rounded-xl flex justify-center items-center hover:scale-105 hover:transition-transform hover:-rotate-3 duration-500'>
                                <img className='h-14 w-14' src={linkedin} />
                            </a>
                            <a href='https://github.com/Haider-Mukhtar' className='bg-blue-500 rounded-xl flex justify-center items-center hover:scale-105 hover:transition-transform hover:rotate-3 duration-500'>
                                <img className='h-14 w-14' src={github} />
                            </a>
                            <a href='https://www.instagram.com/haider_mukhtar_ch/' className='bg-blue-500 rounded-xl flex justify-center items-center hover:scale-105 hover:transition-transform hover:-rotate-3 duration-500'>
                                <img className='h-14 w-14' src={instagram} />
                            </a>
                            <a href={myCV} className='bg-blue-500 rounded-xl flex justify-center items-center text-white font-primaryBold text-2xl hover:scale-105 hover:transition-transform hover:rotate-3 duration-500'>
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
                <div className='bg-blue-500 mt-4 rounded-xl p-6 text-3xl text-white text-justify font-primaryRegular'>
                    Frontend Developer specializing in building engaging user interfaces with HTML, CSS (Tailwind CSS), React, and React Native for web and mobile applications. Demonstrated ability to deliver user-friendly solutions through internships and academic projects. Strong problem-solving skills, innovative thinking, and dedication to ongoing learning and professional development.
                </div>
            </div>
        </div>
    )
}

export default AboutCards