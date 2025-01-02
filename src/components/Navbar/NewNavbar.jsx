import React, { useState } from 'react'
import { Link, useLocation } from 'react-router';

function NewNavbar() {

  const location = useLocation(); // Get the current location

  const links = [
    { name: 'Home', path: '/' },
    // { name: 'About Me', path: '/about' },
    { name: 'Experience', path: '/myexperience' },
    { name: 'Works', path: '/myworks' },
    { name: 'Hire Me', path: '/contact' },
  ];

  return (
    <nav className='my-2 h-12 w-full flex justify-center items-center fixed z-50'>
      <div className='rounded-md py-1 px-1 space-x-1 bg-blue-300/50 backdrop-blur-sm flex justify-center items-center flow-row'>
        {
          links.map((link) => (
            <Link
              to={link.path}
              className={
                `${location.pathname === link.path ? 'text-white' : 'text-black'} 
              ${location.pathname === link.path ? 'bg-blue-500' : 'bg-transparent'}
              ${location.pathname === link.path ? 'hover:bg-blue-500' : 'hover:bg-blue-300/50'}
              hover:bg-blue-300/60 font-primaryRegular text-sm sm:text-base rounded-lg px-2 sm:px-4 py-1 sm:py-2`}
            >
              {link.name}
            </Link>
          ))
        }
      </div>
    </nav>
  )
}

export default NewNavbar