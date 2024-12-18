import React from 'react'
import myPic from './homeAssets/pic.png'
import rightArrow from './homeAssets/rightArrow.svg'
import linkedin from './homeAssets/linkedin.svg'
import github from './homeAssets/github.svg'
import instagram from './homeAssets/instagram.svg'
import { TypeAnimation } from 'react-type-animation'

function Intro() {
    return (
        <div className='flex justify-center'>
            <div className='w-4/5 2xl:px-8'>
                <div className='grid md:grid-cols-2 sm:my-10 my-10 md:my-8 lg:my-10'>
                    <div className='md:px-0 flex flex-col justify-center items-center lg:items-start sm:mb-10 mb-10 motion-preset-slide-right '>
                        <div className='text-5xl font-serif font-bold text-center lg:text-start'>
                            I'm Haider Mukhtar
                        </div>
                        <div className='text-3xl font-serif font-semibold mt-2 text-center text-blue-600'>
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
                        <div className='flex mt-4'>
                            <a href='#' className='flex flex-row items-center bg-blue-500 hover:bg-blue-400 lg:px-10 md:px-8 sm:py-4 py-3 px-3 rounded-full hover:transition-transform hover:scale-105 
                            motion-scale-in-[0.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[0.38s]/scale motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier
                            '>
                                <div className='text-xl font-bold text-white mr-2'>
                                    HIRE ME NOW
                                </div>
                                <img className='sm:w-10 sm:h-8 h-6 w-8' src={rightArrow} />
                            </a>
                        </div>
                        <div className='flex flex-row gap-6 mt-10'>
                            <a
                                href='https://www.instagram.com/haider_mukhtar_ch/' target="_blank"
                                className='bg-blue-500 p-2 rounded-full hover:bg-blue-400 hover:transition-transform hover:scale-110 animate-spin animate-once'>
                                <img className='h-8 w-8' src={instagram} />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/haider-mukhtar/' target="_blank" className='bg-blue-500 p-2 rounded-full hover:bg-blue-400 hover:transition-transform hover:scale-110 animate-spin animate-twice'>
                                <img className='h-8 w-8' src={linkedin} />
                            </a>
                            <a
                                href='https://github.com/Haider-Mukhtar' target="_blank" className='bg-blue-500 p-2 rounded-full hover:bg-blue-400 hover:transition-transform hover:scale-110 animate-spin animate-thrice'>
                                <img className='h-8 w-8' src={github} />
                            </a>
                        </div>
                    </div>
                    <div className='w-full flex justify-center md:px-6 md:pb-6 lg:pb-0 lg:px-0 xl:px-0 2xl:px-0'>
                        <div className='bg-blue-500 md:w-full lg:w-4/5 xl:w-4/5 rounded-3xl hover:scale-105 drop-shadow-2xl 
                        motion-preset-pop
                        motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate
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