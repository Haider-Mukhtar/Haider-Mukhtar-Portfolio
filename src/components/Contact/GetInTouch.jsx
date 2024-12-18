import React, { useState } from 'react'
import contactSVG from './contactAssets/contact.svg'
import linkedin from './contactAssets/linkedin.svg'
import github from './contactAssets/github.svg'
import instagram from './contactAssets/instagram.svg'

function GetInTouch() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const [send, setSend] = useState(false)

    const handelSubmit = () => {
        name ? null : setNameError(true)
        email ? null : setEmailError(true)
        // console.log('send')
    }

    return (
        <div className='flex justify-center'>
            <div className='w-4/5 2xl:px-8'>
                <div className='grid md:grid-cols-2 sm:my-10 my-10 md:my-8 lg:my-10'>
                    <div className='md:px-0 flex flex-col  items-center lg:items-start md:mb-0 sm:mb-10 mb-10 motion-preset-slide-right space-y-2 lg:space-y-4'>
                        <div className='text-5xl font-serif font-bold text-center sm:text-start'>
                            Get In Touch
                        </div>
                        <div className='space-y-5 w-full'>
                            <div className='space-y-1'>
                                <label for="name" className='text-xl'>
                                    Name <span className='text-red-600'>*</span> {nameError ?
                                        <span className='text-red-500 text-base'>
                                            Please enter your name.
                                        </span>
                                        : null}
                                </label>
                                <input id="name" autocomplete="name" className='text-xl px-1 py-4 w-full outline-none border-b-2 border-black' placeholder='Enter your Name' type='text' />
                            </div>
                            <div className='space-y-1'>
                                <label for="email" className='text-xl'>
                                    Email <span className='text-red-600'>*</span> {emailError ?
                                        <span className='text-red-500 text-base'>
                                            Please enter your email.
                                        </span>
                                        : null}
                                </label>
                                <input id="email" autocomplete="email" className='text-xl px-1 py-4 w-full outline-none border-b-2 border-black' placeholder='Enter your Email' type='email' />
                            </div>
                            <div className='space-y-1'>
                                <label for="msg" className='text-xl'>Comment or Message</label>
                                <textarea id="msg" rows="3" className='text-xl px-1 py-4 outline-none border-b-2 border-black w-full' placeholder='Enter your Message' type='text' />
                            </div>
                            <div className='mx-10'>
                                <button
                                    onClick={handelSubmit}
                                    className='w-full flex flex-row justify-center items-center bg-blue-500 hover:bg-blue-400 lg:px-10 md:px-8 sm:py-4 py-3 px-3 rounded-full hover:transition-transform hover:scale-105'>
                                    <div className='text-xl font-bold text-white text-center'>
                                        SUBMIT
                                    </div>
                                </button>
                            </div>
                            <div className='flex flex-row justify-center gap-6'>
                                <a
                                    href='https://www.instagram.com/haider_mukhtar_ch/' target="_blank"
                                    className='bg-blue-500 p-2 rounded-full hover:bg-blue-400 hover:transition-transform hover:scale-110 animate-spin animate-once'>
                                    <img className='h-8 w-8' src={instagram} />
                                </a>
                                <a
                                    href='https://www.linkedin.com/in/haider-mukhtar/' target="_blank" className='bg-blue-500 p-2 rounded-full hover:bg-blue-400 hover:transition-transform hover:scale-110 animate-spin animate-once'>
                                    <img className='h-8 w-8' src={linkedin} />
                                </a>
                                <a
                                    href='https://github.com/Haider-Mukhtar' target="_blank" className='bg-blue-500 p-2 rounded-full hover:bg-blue-400 hover:transition-transform hover:scale-110 animate-spin animate-once'>
                                    <img className='h-8 w-8' src={github} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden w-full md:flex justify-center items-center md:px-6 md:pb-6 lg:pb-0 lg:px-0 xl:px-0 2xl:px-0'>
                        <div className='md:w-full lg:w-4/5 xl:w-4/5 rounded-3xl drop-shadow-2xl 
                        motion-preset-pop
                        motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate
                        '>
                            <img className='rounded-3xl h-3/4 object-cover' src={contactSVG} alt='Profile Pic' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch