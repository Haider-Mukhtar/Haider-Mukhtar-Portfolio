import React from 'react'
import profilePic from './workAssets/profile.svg'
// import leftArrow from './workAssets/leftArrow.svg'
// import rightArrow from './workAssets/rightArrow.svg'
// import rightQuote from './workAssets/rightQuote.svg'
// import leftQuote from './workAssets/leftQuote.svg'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
import { CgQuote } from 'react-icons/cg';

const testimonials = [
    {
        "id": 1,
        "profileImage": profilePic,
        "name": "Muaaz Ahmad",
        "organization": "MikroStar Tech",
        "position": "Mobile App Developer",
        "commit": "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project."
    },
    {
        "id": 2,
        "profileImage": profilePic,
        "name": "Muaaz Ahmad",
        "organization": "MikroStar Tech",
        "position": "Mobile App Developer",
        "commit": "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project."
    },
    {
        "id": 3,
        "profileImage": profilePic,
        "name": "Muaaz Ahmad",
        "organization": "MikroStar Tech",
        "position": "Mobile App Developer",
        "commit": "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project."
    },
    {
        "id": 4,
        "profileImage": profilePic,
        "name": "Muaaz Ahmad",
        "organization": "MikroStar Tech",
        "position": "Mobile App Developer",
        "commit": "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project."
    },
    {
        "id": 5,
        "profileImage": profilePic,
        "name": "Muaaz Ahmad",
        "organization": "MikroStar Tech",
        "position": "Mobile App Developer",
        "commit": "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project."
    }
]

function Testimonials() {

    return (
        <div className="flex justify-center py-14 bg-gray-100">
            <div className="lg:w-4/5 w-11/12 2xl:px-8">
                <h1 className="text-4xl sm:text-5xl font-semibold text-center font-primaryBold">
                What Clients Say About Me
                </h1>
                <Marquee pauseOnHover autoFill gradient gradientColor='#ffffff75' gradientWidth={25}>
                    {
                        testimonials.map((item) =>
                            <div className='my-6 bg-blue-500 md:mx-4 mx-2 w-72 sm:w-96 rounded-xl cursor-pointer hover:scale-105 duration-500 hover:drop-shadow-lg'>
                                <CgQuote color='#ffffff' className='size-20' />
                                <div className='px-6 text-white text-xl font-primaryRegular'>
                                    {item.commit}
                                </div>
                                <div className='px-6 py-6 flex justify-between items-center'>
                                    <div className='text-sm font-primaryRegular text-white'>
                                        <p className='font-primarySemiBold'>{item.name}</p>
                                        <p className='text-blue-100'>
                                            {item.position} at {item.organization}
                                        </p>
                                    </div>
                                    <div className='bg-white p-2 rounded-full'>
                                        <img className='size-5' src={profilePic} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Marquee>
            </div>
        </div>

    )
}

export default Testimonials



{/*
                    <Slider {...settings}>
                        {
                            testimonials.map((item) =>
                                <div className='space-y-4'>
                                    <img className='w-10' src={leftQuote} />
                                    <img className='w-10 ml-auto mr-auto' src={item.profileImage} />
                                    <div className='flex flex-col justify-center items-center px-10'>
                                        <div className='text-center text-white text-lg'>
                                            {item.commit}
                                        </div>
                                        <div className='mt-4 text-xl font-serif font-bold text-white'>
                                            {item.name}
                                        </div>
                                        <div className=' text-lg text-white'>
                                            {item.position}
                                        </div>
                                        <div className=' text-lg text-white'>
                                            {item.organization}
                                        </div>
                                        <img className='w-10 ml-auto' src={rightQuote} />
                                    </div>
                                    </div>
                                )
                            }
                            </Slider>
*/}
{/*
                        <Marquee pauseOnHover autoFill direction='right' className='mt-10'>
                            {
                                testimonials.map((item) =>
                                    <div className='space-y-4 py-4 bg-white rounded-3xl mx-4 w-96 cursor-pointer'>
                                        <img className='w-10 ml-auto mr-auto' src={profilePic} />
                                        <div className='flex flex-col justify-center items-center px-10'>
                                            <div className='text-center text-blue-500 text-lg'>
                                                {item.commit}
                                            </div>
                                            <div className='mt-4 text-xl font-serif font-bold text-blue-500'>
                                                {item.name}
                                            </div>
                                            <div className=' text-lg text-blue-500'>
                                                {item.position}
                                            </div>
                                            <div className=' text-lg text-blue-500'>
                                                {item.organization}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </Marquee>
*/}
