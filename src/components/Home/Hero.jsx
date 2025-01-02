import React from 'react'
import myPic from './homeAssets/pic.png'
import rightArrow from './homeAssets/rightArrow.svg'
import linkedin from './homeAssets/linkedin.svg'
import github from './homeAssets/github.svg'
import instagram from './homeAssets/instagram.svg'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router'

function Hero() {
  return (
    <div className="flex justify-center pb-14 pt-20">
      <div className="lg:w-4/5 w-11/12 2xl:px-8 space-y-4">
        <div className='flex justify-center items-center'>
          <div className='bg-gradient-to-tr from-blue-500 via-blue-300 to-blue-500 drop-shadow-2xl shadow-blue-500 rounded-full hover:scale-100 duration-700 motion-preset-pop motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate '>
            <img className='rounded-full object-cver size-72 sm:size-80 lg:size-96' src={myPic} alt='Profile Pic' />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-4xl sm:text-5xl font-primaryBold font-bold text-center'>
            I'm Haider Mukhtar
          </div>
          <div className='text-3xl font-primarySemiBold font-semibold mt-2 text-center text-blue-600'>
            <TypeAnimation
              sequence={[
                'Computer Engineer',
                1000, 
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
          <div className='flex mt-10 gap-3 justify-center items-center'>
            <Link to='/contact' className='flex flex-row items-center bg-blue-500 hover:bg-blue-400 py-1 pl-3 pr-1 rounded-full hover:transition-transform hover:scale-105 drop-shadow-xl'>
              <div className='text-lg capitalize font-primarySemiBold text-white mr-2'>
                hire me
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
      </div>
    </div>
  )
}

export default Hero