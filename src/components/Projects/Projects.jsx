import React from 'react'
import eventhubProject from './projectAssets/eventhubProject.png'
import maxfitProject from './projectAssets/maxfitProject.png'
import todoProject from './projectAssets/todoProject.png'
import teslaProject from './projectAssets/teslaProject.png'
import teslaProject1 from './projectAssets/teslaProject1.png'

const projects = [
    {
        "id": 1,
        "image": teslaProject1,
        "name": "Tesla UI Clone",
        "category": "Web Development",
        "detail": "Tesla Website UI Clone using React JS and Tailwind CSS.",
        "url": "https://tesla-uiclone.netlify.app/"
    },
    {
        "id": 1,
        "image": eventhubProject,
        "name": "EventHub App",
        "category": "Mobile App",
        "detail": "EventHub App, developed in React Native & Firebase, served as my internship practice application at MikroStar Tech.",
        "url": "https://github.com/Haider-Mukhtar/ReactNative-EventHub-App"
    },
    {
        "id": 1,
        "image": maxfitProject,
        "name": "Maxfit App",
        "category": "Mobile App",
        "detail": "MaxFit App, developed in React Native & Firebase.",
        "url": "https://github.com/Haider-Mukhtar/ReactNative-MaxFit-App"
    },
    {
        "id": 1,
        "image": todoProject,
        "name": "Todo App",
        "category": "Mobile App",
        "detail": "Todo App, developed in React Native & Firebase, served as my internship practice application at MikroStar Tech.",
        "url": "https://github.com/Haider-Mukhtar/ReactNative-Todo-App"
    },

]

function Projects() {
    return (
        <div className='flex justify-center mt-8'>
            <div className='w-4/5 2xl:px-8'>
                <div className='text-5xl sm:text-5xl font-semibold font-serif text-center'>
                    My Projects
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6'>
                    {
                        projects.map((item) =>
                            <a href={item.url} target="_blank" className='bg-blue-500 flex flex-col rounded-3xl hover:scale-105 ease-in-out duration-300 drop-shadow-xl space-y-3 group'>
                                <div className='rounded-t-3xl'>
                                    <img className='w-full h-auto rounded-t-3xl object-contain' src={item.image} />
                                </div>
                                <div className='flex flex-col px-6 pb-6 h-full space-y-3 justify-between'>
                                    <div className='space-y-3'>
                                        <div className='text-xl text-white'>
                                            {item.category}
                                        </div>
                                        <div className='text-2xl font-serif font-semibold text-white'>
                                            {item.name}
                                        </div>
                                        <div className='text-md text-white line-clamp-5'>
                                            {item.detail}
                                        </div>
                                    </div>
                                    {/*
                                        <div className='grid grid-cols-2 gap-4'>
                                        <a href={item.code} target="_blank" className="text-center rounded-2xl bg-white px-6 py-3 font-semibold uppercase text-blue-500 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                                            Code
                                            </a>
                                            <a href={item.url} target="_blank" className="text-center rounded-2xl bg-white px-6 py-3 font-semibold uppercase text-blue-500 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                                            Demo
                                        </a>
                                    </div>
                                    */}
                                </div>
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects