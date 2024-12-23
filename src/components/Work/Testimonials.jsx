import React from 'react'
import profilePic from './workAssets/profile.svg'
import leftArrow from './workAssets/leftArrow.svg'
import rightArrow from './workAssets/rightArrow.svg'
import rightQuote from './workAssets/rightQuote.svg'
import leftQuote from './workAssets/leftQuote.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <div className='bg-blue-500 flex justify-center py-10'>
            <div className='w-4/5 flex justify-center'>
                <div className='md:w-4/5 w-full'>
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
                </div>
            </div>
        </div>
    )
}

export default Testimonials