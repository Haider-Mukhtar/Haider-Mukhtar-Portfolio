import React, { useState } from 'react'
import myPic from './navAssets/pic.png'
import menuIcon from './navAssets/menuIcon.svg'
import { Link, useLocation } from 'react-router';


function Navbar() {

    const location = useLocation(); // Get the current location

    const links = [
        { name: 'Home', path: '/' },
        // { name: 'About Me', path: '/about' },
        { name: 'My Experience', path: '/myexperience' },
        { name: 'My Works', path: '/myworks' },
        { name: 'Hire Me', path: '/contact' },
    ];

    const [showDropdown, setShowDropdown] = useState(false)

    const handelDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <nav className='w-full fixed top-0 left-0 z-50 bg-white/50 backdrop-blur-sm'>
            <div className='flex justify-center'>
                <div className='flex justify-between items-center lg:w-4/5 w-11/12 h-16'>
                    <Link to='/' >
                        {/*
                        <img className='h-14' src={myPic} alt='Profile Pic' />
                        */}
                        <div className='text-3xl font-primaryBold text-blue-500 drop-shadow-2xl'>HM.</div>
                    </Link>
                    <ul className='md:flex gap-4 hidden'>
                        {links.map((link) => (
                            <li>
                                <Link
                                    to={link.path}
                                    className={
                                        `${location.pathname === link.path ? 'text-white' : 'text-black'} 
                                        ${location.pathname === link.path ? 'bg-blue-500' : 'bg-transparent'}
                                         hover:bg-blue-100 hover:text-black font-primaryRegular py-2 px-4 rounded-lg`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className='md:hidden block' onClick={handelDropdown}>
                        <img className='size-5' src={menuIcon} />
                    </button>
                </div>
            </div>
            {
                showDropdown ?
                    <div className='flex flex-col justify-center w-full px-4 pb-3 rounded-md bg-white/50 backdrop-blur-sm'>
                        {links.map((link) => (
                            <Link
                                to={link.path}
                                className={
                                    `${location.pathname === link.path ? 'text-blue-700' : 'text-black'} ${location.pathname === link.path ? 'bg-blue-100' : 'bg-transparent'} py-2 px-2 rounded-lg hover:text-blue-700 font-primaryRegular w-full text-left`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    : null
            }
        </nav>
    )
}

export default Navbar