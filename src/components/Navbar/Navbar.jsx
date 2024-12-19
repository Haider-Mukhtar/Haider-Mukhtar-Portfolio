import React, { useState } from 'react'
import myPic from './navAssets/pic.png'
import menuIcon from './navAssets/menuIcon.svg'
import { Link } from 'react-router'

function Navbar() {

    const [showDropdown, setShowDropdown] = useState(false)

    const handelDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <>
            <div className='flex justify-center'>
                <div className='flex justify-between items-center w-4/5 2xl:px-8 py-1'>
                    <Link to='/' >
                        <img className='h-14' src={myPic} alt='Profile Pic' />
                    </Link>
                    <ul className='sm:flex gap-10 hidden'>
                        <li>
                            <Link to='/' className='hover:text-blue-700 hover:underline hover:underline-offset-2 '>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/about' className='hover:text-blue-700 hover:underline hover:underline-offset-2'>
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link to='/myworks' className='hover:text-blue-700 hover:underline hover:underline-offset-2'>
                                My Works
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' className='hover:text-blue-700 hover:underline hover:underline-offset-2'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className='sm:hidden block mt-auto'>
                        <button className='px-1' onClick={handelDropdown}>
                            <img className='h-10' src={menuIcon} />
                        </button>
                    </div>
                </div>
            </div>
            {
                showDropdown ? 
                <div className='flex justify-center py-6'>
                    <div className='bg-white w-4/5'>   
                        <ul className='flex flex-col justify-center items-center gap-6'>
                            <li>
                                <Link to='/' className='hover:text-blue-700 hover:underline hover:underline-offset-2 '>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/about' className='hover:text-blue-700 hover:underline hover:underline-offset-2'>
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link to='/myworks' className='hover:text-blue-700 hover:underline hover:underline-offset-2'>
                                    My Works
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact' className='hover:text-blue-700 hover:underline hover:underline-offset-2'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                : null
            }
        </>
    )
}

export default Navbar