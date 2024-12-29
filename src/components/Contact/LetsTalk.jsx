import React from 'react'
import circle from './contactAssets/circle.png'
import { FaArrowRight } from "react-icons/fa6";

function LetsTalk() {
  return (
    <div className="flex justify-center xl:my-8 my-8">
      <div className="w-4/5 2xl:px-8 space-y-4">
        <div className="text-5xl sm:text-5xl font-semibold text-center font-primaryBold">
          Anything in Mind?
        </div>
        <div className="text-5xl sm:text-5xl font-semibold text-center font-primaryBold">
          Let's Talk
        </div>
        <div className='flex justify-center items-center'>
          <a href='#' className='group flex justify-center items-center'>
            <img className='size-60 object-cover animate-spin animate-duration-[20000ms]' src={circle} />
            <div className='absolute flex flex-col justify-center items-center text-white font-primaryRegular text-2xl text-center'>
              <div>I'm</div>
              <div>Ready to Talk</div>
              <FaArrowRight className='mt-4 size-10 group-hover:-rotate-12 duration-300' />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default LetsTalk