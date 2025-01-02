import React from 'react'
import eventhubProject from './projectAssets/eventhubProject.png'
import maxfitProject from './projectAssets/maxfitProject.png'
import todoProject from './projectAssets/todoProject.png'
// import teslaProject from './projectAssets/teslaProject.png'
import teslaProject1 from './projectAssets/teslaProject1.png'
import { FaGithub } from 'react-icons/fa6'
import { CiLink } from 'react-icons/ci'

const projects = [
    {
        "id": 1,
        "image": teslaProject1,
        "name": "Tesla UI Clone",
        "category": "Web Development",
        "detail": "Tesla Website UI Clone using React JS and Tailwind CSS.",
        "github": "https://github.com/Haider-Mukhtar/Tesla-UI-Clone",
        "url": "https://tesla-uiclone.netlify.app/"
    },
    {
        "id": 1,
        "image": eventhubProject,
        "name": "EventHub App",
        "category": "Mobile App",
        "detail": "EventHub App, developed in React Native & Firebase, served as my internship practice application at MikroStar Tech.",
        "github": "https://github.com/Haider-Mukhtar/ReactNative-EventHub-App",
        "url": "https://github.com/Haider-Mukhtar/ReactNative-EventHub-App"
    },
    {
        "id": 1,
        "image": maxfitProject,
        "name": "Maxfit App",
        "category": "Mobile App",
        "detail": "MaxFit App, developed in React Native & Firebase.",
        "github": "https://github.com/Haider-Mukhtar/ReactNative-MaxFit-App",
        "url": "https://github.com/Haider-Mukhtar/ReactNative-MaxFit-App"
    },
    {
        "id": 1,
        "image": todoProject,
        "name": "Todo App",
        "category": "Mobile App",
        "detail": "Todo App, developed in React Native & Firebase, served as my internship practice application at MikroStar Tech.",
        "github": "https://github.com/Haider-Mukhtar/ReactNative-Todo-App",
        "url": "https://github.com/Haider-Mukhtar/ReactNative-Todo-App"
    },

]

function Projects() {
    return (
        <div className='flex justify-center py-14'>
            <div className='lg:w-4/5 w-11/12 2xl:px-8'>
                <div className='text-4xl sm:text-5xl font-semibold font-primaryBold text-center'>
                    My Projects
                </div>
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
                            // <a href={item.url} target="_blank" className='bg-blue-500 flex flex-col rounded-3xl hover:scale-105 ease-in-out duration-700 drop-shadow-xl space-y-3 group'>
                            //     <div className='rounded-t-3xl'>
                            //         <img className='w-full h-auto rounded-t-3xl object-contain' src={item.image} />
                            //     </div>
                            //     <div className='flex flex-col px-6 pb-6 h-full space-y-3 justify-between'>
                            //         <div className='space-y-3'>
                            //             <div className='text-xl text-white font-primarySemiBold'>
                            //                 {item.category}
                            //             </div>
                            //             <div className='text-2xl font-primaryBold font-semibold text-white'>
                            //                 {item.name}
                            //             </div>
                            //             <div className='text-md text-white line-clamp-5 font-primaryRegular'>
                            //                 {item.detail}
                            //             </div>
                            //         </div>
                            //     </div>
                            // </a>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects