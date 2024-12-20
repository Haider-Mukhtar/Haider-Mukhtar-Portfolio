import React from 'react'
import pic from './aboutAssets/pic.png'
import picIcon from './aboutAssets/profile.svg'
import rightArrow from './aboutAssets/rightArrow.svg'
import { Link } from 'react-router'

function Objective() {
    return (
        <div className='flex justify-center mt-8 bg-blue-500 py-10'>
            <div className='w-4/5 2xl:px-8'>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <img className='w-16 object-cover' src={pic} />
                    <div className='text-4xl font-bold font-serif text-white text-center'>
                        Hi, I'm Haider. Nice to meet you.
                    </div>
                    <div className='text-2xl font-medium text-center  text-white'>
                        Computer engineer skilled in front-end and mobile app development, proficient in HTML, CSS, JavaScript,
                        React Native, and more. Demonstrated ability to deliver user-friendly solutions through internships and
                        academic projects. Strong problem-solving skills, innovative thinking, and dedication to ongoing learning
                        and professional development.
                    </div>
                    <div className='flex mt-4'>
                        <Link to='/contact' className='text-center rounded-2xl bg-white px-6 py-3 font-semibold uppercase text-blue-500 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>
                            <div className='text-xl font-bold text-blue-500 mr-2'>
                                HIRE ME NOW
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Objective