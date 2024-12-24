import React, { useState } from 'react'
import myPic from './navAssets/pic.png'
import menuIcon from './navAssets/menuIcon.svg'
import { Link, useLocation } from 'react-router';


function Navbar() {

    const location = useLocation(); // Get the current location

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About Me', path: '/about' },
        { name: 'My Experience', path: '/myexperience' },
        { name: 'My Works', path: '/myworks' },
        { name: 'Contact', path: '/contact' },
    ];

    const [showDropdown, setShowDropdown] = useState(false)

    const handelDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <>
            <div className='flex justify-center'>
                <div className='flex justify-between items-center w-4/5 2xl:px-8 py-6'>
                    <Link to='/' >
                        {/*
                        <img className='h-14' src={myPic} alt='Profile Pic' />
                        */}
                        <div className='text-3xl font-bold font-sans text-blue-500'>HM.</div>
                    </Link>
                    <ul className='sm:flex gap-4 hidden'>
                        {links.map((link) => (
                            <li>
                                <Link
                                    to={link.path}
                                    className={
                                        `${location.pathname === link.path ? 'text-white' : 'text-black'} 
                                        ${location.pathname === link.path ? 'bg-blue-500' : 'bg-white'}
                                         hover:bg-blue-300 hover:text-white font-sans py-2 px-4 rounded-lg 
                                         `}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
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
                                {links.map((link) => (
                                    <li>
                                        <Link
                                            to={link.path}
                                            className={
                                                `${location.pathname === link.path ? 'text-blue-700' : 'text-black'} 
                                            ${location.pathname === link.path ? 'underline underline-offset-2' : 'no-underline'
                                                }
                                            hover:text-blue-700 hover:underline hover:underline-offset-2 font-sans`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}

export default Navbar