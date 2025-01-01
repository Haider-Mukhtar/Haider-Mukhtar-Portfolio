import React from 'react'
import circle from './contactAssets/circle.png'
import { FaArrowRight } from "react-icons/fa6";
import { Magnetic } from '../ui/magnetic';

function LetsTalk() {
  const springOptions = { bounce: 0.2 };
  return (
    <div className="flex justify-center py-14">
      <div className="lg:w-4/5 w-11/12 2xl:px-8 space-y-6">
        <div className='space-y-3'>
          <div className="text-4xl sm:text-5xl font-semibold text-center font-primaryBold">
            Anything in Mind?
          </div>
          <div className="text-4xl sm:text-5xl font-semibold text-center font-primaryBold">
            Let's Talk
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <Magnetic
            intensity={0.4}
            springOptions={springOptions}
            actionArea='global'
            range={200}
          >
            <div
              type='button'
              className='inline-flex items-cente transition-all duration-200'
            >
              <Magnetic
                intensity={0.1}
                springOptions={springOptions}
                actionArea='global'
                range={200}
              >
                <a href='https://wa.me/+92344603782?text=Hello, How can I help you?' target='_blank' className='group flex justify-center items-center'>
                  <img className='size-60 object-cover animate-spin animate-duration-[20000ms]' src={circle} />
                  <div className='absolute flex flex-col justify-center items-center text-white font-primaryRegular text-2xl text-center'>
                    <div>I'm</div>
                    <div>Ready to Talk</div>
                    <FaArrowRight className='mt-4 size-10 group-hover:-rotate-12 duration-300' />
                  </div>
                </a>
              </Magnetic>
            </div>
          </Magnetic>
        </div>
      </div>
    </div>
  )
}

export default LetsTalk