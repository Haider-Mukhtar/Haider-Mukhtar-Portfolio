import React from 'react'
import myPic from './homeAssets/pic.png'
import rightArrow from './homeAssets/rightArrow.svg'
import linkedin from './homeAssets/linkedin.svg'
import github from './homeAssets/github.svg'
import instagram from './homeAssets/instagram.svg'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router'

function Intro() {
    return (
        <div className='flex justify-center'>
            <div className='w-4/5 2xl:px-8'>
                <div className='grid md:grid-cols-2 sm:my-10 my-10 md:my-8 lg:my-10'>
                    <div className='md:px-0 flex flex-col justify-between items-start lg:items-start motion-preset-slide-right'>
                        <div className='flex flex-col justify-start items-start'>
                            <div className='text-5xl font-primaryBold font-bold text-start'>
                                I'm Haider Mukhtar
                            </div>
                            <div className='text-3xl font-primarySemiBold font-semibold mt-2 text-center text-blue-600'>
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'Computer Engineer',
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        'Front End Developer',
                                        1000,
                                        'React JS Developer',
                                        1000,
                                        'React Native Developer',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </div>
                            <div className='flex my-10 gap-4 justify-center items-center'>
                                <Link to='/contact' className='flex flex-row items-center bg-blue-500 hover:bg-blue-400 py-1 pl-3 pr-1 rounded-full hover:transition-transform hover:scale-105 drop-shadow-xl 
                            '>
                                    <div className='text-lg capitalize font-bold font-primaryRegular text-white mr-2'>
                                        hire me now
                                    </div>
                                    <div className='size-8 p-1.5 flex items-center justify-center bg-white rounded-full'>
                                        <img className='size-full' src={rightArrow} />
                                    </div>
                                </Link>
                                <a
                                    href='https://www.instagram.com/haider_mukhtar_ch/' target="_blank"
                                    className='bg-blue-500 rounded-full hover:bg-blue-400 hover:transition-transform hover:scale-110 animate-spin animate-once drop-shadow-xl size-[41px] p-2.5'>
                                    <img className='size-full' src={instagram} />
                                </a>
                                <a
                                    href='https://www.linkedin.com/in/haider-mukhtar/' target="_blank" className='bg-blue-500 rounded-full hover:bg-blue-400 hover:transition-transform hover:scale-110 animate-spin animate-once drop-shadow-xl size-[41px] p-2.5'>
                                    <img className='size-full' src={linkedin} />
                                </a>
                                <a
                                    href='https://github.com/Haider-Mukhtar' target="_blank" className='bg-blue-500 rounded-full hover:bg-blue-400 hover:transition-transform hover:scale-110 animate-spin animate-once drop-shadow-xl size-[41px] p-2.5'>
                                    <img className='size-full' src={github} />
                                </a>
                            </div>
                        </div>
                        <div>
                            <p className='text-black font-primaryRegular text-base'>
                                Frontend Developer specializing in building engaging user interfaces with HTML, CSS (Tailwind CSS), React, and React Native for web and mobile applications. Demonstrated ability to deliver user-friendly solutions through internships and academic projects. Strong problem-solving skills, innovative thinking, and dedication to ongoing learning and professional development.
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex justify-center md:px-6 md:pb-6 lg:pb-0 lg:px-0 xl:px-0 2xl:px-0'>
                        <div className='bg-blue-500 md:w-full lg:w-4/5 xl:w-4/5 rounded-3xl hover:scale-105 drop-shadow-2xl duration-700
                        motion-preset-pop motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate
                        '>
                            <img className='rounded-3xl pt-16 object-cver' src={myPic} alt='Profile Pic' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro