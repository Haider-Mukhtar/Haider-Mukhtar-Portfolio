import React from 'react'
import { Link, useLocation } from 'react-router';
import links from '../lib/nav-links'

function Navbar() {

  const location = useLocation();

  return (
    <nav className='my-2 h-12 w-full flex justify-center items-center fixed z-50 drop-shadow-lg'>
      <div className='rounded-md p-1 space-x-1 bg-blue-300/50 backdrop-blur-sm flex justify-center items-center'>
        {
          links.map((link) => (
            <Link
              to={link.path}
              onClick={window.scrollTo(0, 0)}
              className={
                `${location.pathname === link.path ? 'text-white' : 'text-black'} 
              ${location.pathname === link.path ? 'bg-blue-500' : 'bg-transparent'}
              ${location.pathname === link.path ? 'hover:bg-blue-500' : 'hover:bg-blue-300/50'}
              hover:bg-blue-300/60 font-primaryRegular text-base rounded-md px-4 py-2`}
            >
              {link.name}
            </Link>
          ))
        }
      </div>
    </nav>
  )
}

export default Navbar