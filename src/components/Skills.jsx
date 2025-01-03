import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import skills from '../lib/skills'

function Skills() {
    return (
        <div className='flex justify-center py-14 bg-gray-100'>
            <div className='lg:w-4/5 w-11/12 2xl:px-8'>
                <h1 className='text-4xl sm:text-5xl font-primaryBold text-center drop-shadow-2xl'>
                    My Works Skills
                </h1>
                <h2 className='text-3xl font-primarySemiBold mt-2 text-center text-blue-600'>
                    <TypeAnimation
                        sequence={[
                            'HTML',
                            1000,
                            'CSS',
                            1000,
                            'Bootstrap',
                            1000,
                            'Tailwind CSS',
                            1000,
                            'SASS',
                            1000,
                            'JavaScript',
                            1000,
                            'React JS',
                            1000,
                            'React Native',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4'>
                    {
                        skills.map((item) =>
                            <div className='text-center rounded-xl bg-blue-500 px-2 sm:px-6 py-10 font-semibold uppercase text-blue-500 transition-all duration-300 hover:translate-x-[-6px] hover:translate-y-[-6px] hover:rounded-md hover:shadow-[6px_6px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none flex flex-col justify-start items-center space-y-2'>
                                <img className='w-16 h-16 object-contain' src={item.image} />
                                <div className='text-xl font-primarySemiBold text-white'>
                                    {item.title}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills