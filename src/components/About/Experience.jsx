import React from 'react'

const experience = [
    {
        "id": 1,
        "title": "Web Application Development",
        "level": "Internship",
        "organization": "DigiMark Developers",
        "location": "Lahore, Pakistan",
        "sTime": "Dec 2024",
        "eTime": "Present",
        "detail1": "null",
        "detail2": "null",
        "detail3": "null"
    },
    {
        "id": 2,
        "title": "Mobile Application Development",
        "level": "Internship",
        "organization": "MikroStar Tech (SMC-Pvt.) Ltd.",
        "location": "Lahore, Pakistan",
        "sTime": "Oct 2023",
        "eTime": "Jan 2024",
        "detail1": "Developed interactive mobile applications using Android Studio, Java, JavaScript, and Firebase.",
        "detail2": "Dedicated significant time to mastering React Native for enhanced mobile solutions.",
        "detail3": "Completed a comprehensive project demonstrating advanced mobile app development skills."
    },
    {
        "id": 3,
        "title": "Front-End Web Development",
        "level": "Internship",
        "organization": "Cosmosoft Business Solutions Pvt. Ltd.",
        "location": "Lahore, Pakistan",
        "sTime": "July 2022",
        "eTime": "Sep 2022",
        "detail1": "Acquired proficiency in HTML, CSS, Tailwind CSS, Bootstrap, and jQuery.",
        "detail2": "Gained hands-on experience in developing visually appealing and user-friendly web interfaces.",
        "detail3": "Crafted responsive web designs that enhance user experience."
    }
]

function Experience() {
    return (
        <div className='flex justify-center xl:mt-8 py-10 bg-blue-200'>
            <div className='w-4/5 xl:px-14 lg:px-8'>
                <div className='text-5xl sm:text-5xl font-semibold font-serif text-center'>
                    Work Experience
                </div>
                {
                    experience.map((item) =>
                        <div className='my-8 sm:grid sm:grid-cols-2'>
                            <div className=''>
                                <div className='text-2xl font-bold text-center sm:text-left font-serif'>
                                    {item.title}
                                </div>
                                <div className='text-xl font-semibold text-center sm:text-left'>
                                    {item.level}
                                </div>
                                <div className='text-xl  text-center sm:text-left'>
                                    {item.sTime} - {item.eTime}
                                </div>
                            </div>
                            <div className=''>
                                <div className='text-2xl font-semibold text-center sm:text-left'>
                                    {item.organization}
                                </div>
                                <div className='text-xl  text-center sm:text-left'>
                                    {item.location}
                                </div>
                                <ul className='sm:list-disc sm:ml-5'>
                                    <li className='text-lg  text-center sm:text-left'>
                                        {item.detail1}
                                    </li>
                                    <li className='text-lg  text-center sm:text-left'>
                                        {item.detail2}
                                    </li>
                                    <li className='text-lg  text-center sm:text-left'>
                                        {item.detail3}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Experience