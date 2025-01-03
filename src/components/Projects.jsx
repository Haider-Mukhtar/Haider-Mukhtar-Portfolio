import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { CiLink } from 'react-icons/ci'
import projects from '../lib/projects'

function Projects() {
    return (
        <div className='flex justify-center py-14'>
            <div className='lg:w-4/5 w-11/12 2xl:px-8'>
                <h1 className='text-4xl sm:text-5xl font-semibold font-primaryBold text-center'>
                    My Projects
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-6 gap-6'>
                    {
                        projects.map((item) =>
                            <div className='w-full col-span-1 bg-black relative rounded-xl overflow-hidden flex items-center justify-center group hover:shadow-lg transition-shadow'>
                                <img className='size-full object-cover lg:aspect-[9/16] md:aspect-[9/13] sm:aspect-[9/12] aspect-[9/10] group-hover:opacity-50' alt="project-image" src={item.image} />
                                <div className='group-hover:flex hidden w-full h-full absolute inset-0 flex-col items-end justify-end bg-gradient-to-t from-blue-500 via-transparent to-transparent'>
                                    <div className='w-full flex flex-col items-center justify-center p-3.5 gap-3.5'>
                                        <div className='w-full flex items-center justify-center'>
                                            <span className='flex-1 text-left text-xl text-white font-bold font-primaryBold'>{item.name}</span>
                                            <div className='flex items-center justify-center gap-1.5'>
                                                <a href={item.github} target='_blank' className='group'>
                                                <FaGithub className='size-9 bg-white p-2 rounded-full'/>
                                                </a>
                                                <a href={item.url} target='_blank'>
                                                <CiLink className='size-9 bg-white p-2 rounded-full'/>
                                                </a>
                                            </div>
                                        </div>
                                        <p className='w-full text-left text-sm text-white font-primaryRegular'>
                                        {item.detail}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects