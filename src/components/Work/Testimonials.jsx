import React from 'react'
import profilePic from './workAssets/profile.svg'
import leftArrow from './workAssets/leftArrow.svg'
import rightArrow from './workAssets/rightArrow.svg'
import rightQuote from './workAssets/rightQuote.svg'
import leftQuote from './workAssets/leftQuote.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";

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
        "id": 1,
        "profileImage": profilePic,
        "name": "Muaaz Ahmad",
        "organization": "MikroStar Tech",
        "position": "Mobile App Developer",
        "commit": "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project."
    },
    {
        "id": 1,
        "profileImage": profilePic,
        "name": "Muaaz Ahmad",
        "organization": "MikroStar Tech",
        "position": "Mobile App Developer",
        "commit": "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project."
    },
    {
        "id": 1,
        "profileImage": profilePic,
        "name": "Muaaz Ahmad",
        "organization": "MikroStar Tech",
        "position": "Mobile App Developer",
        "commit": "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project."
    },
    {
        "id": 1,
        "profileImage": profilePic,
        "name": "Muaaz Ahmad",
        "organization": "MikroStar Tech",
        "position": "Mobile App Developer",
        "commit": "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project."
    }
]

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div className={className} onClick={onClick}>
//             <img src={rightArrow} />
//         </div>
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div className={className} onClick={onClick}>
//             <img src={leftArrow} />
//         </div>
//     );
// }


function Testimonials() {

    var settings = {
        // dots: true,
        infinite: true,
        speed: 600,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
    };

    return (
        <div className='bg-blue-500 flex justify-center'>
            <div className='w-4/5 flex justify-center'>
                <div className='md:w-11/12 w-full'>
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
                    <Marquee pauseOnHover autoFill>
                        {
                            testimonials.map((item) =>
                                <div className='group my-10'>
                                    <div className='space-y-4 py-4 bg-white rounded-3xl mx-4 w-72 sm:w-96 cursor-pointer group-hover:scale-105 duration-500 drop-shadow-2xl'>
                                        <img className='w-10 ml-auto mr-auto' src={profilePic} />
                                        <div className='flex flex-col justify-center items-center px-10'>
                                            <div className='text-center text-blue-500 text-lg font-primaryRegular'>
                                                {item.commit}
                                            </div>
                                            <div className='mt-4 text-xl font-bold text-blue-500 font-primaryBold'>
                                                {item.name}
                                            </div>
                                            <div className=' text-lg text-blue-500 font-primarySemiBold'>
                                                {item.position}
                                            </div>
                                            <div className=' text-lg text-blue-500 font-primaryRegular'>
                                                {item.organization}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Marquee>
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
                </div>
            </div>
        </div>
    )
}

export default Testimonials