import React from 'react'
import profilePic from './workAssets/profile.svg'

const testimonials = [
    {
        "id": 1,
        "profileImage": profilePic,
        "name": "Haider Mukhtar",
        "organization": "DigiMark Developers",
        "position": "CEO",
        "commit": "loreAliqua in consequat aute laborum sunt. Sint ullamco laboris ut ut elit proident ut. Laboris aliquip adipisicing sit excepteur reprehenderit et ad adipisicing ex consequat cupidatat amet. Non consectetur veniam irure sit commodo voluptate. Ad consectetur cupidatat ut non. Aliquip magna elit reprehenderit irure nulla consectetur ullamco nulla sint eu laboris. Consequat duis mollit magna ex veniam aute."
    },
    {
        "id": 2,
        "profileImage": profilePic,
        "name": "Haider 2",
        "organization": "DigiMark Developers 2",
        "position": "CEO 2",
        "commit": "loreAliqua in consequat aute laborum sunt. Sint ullamco laboris ut ut elit proident ut. Laboris aliquip adipisicing sit excepteur reprehenderit et ad adipisicing ex consequat cupidatat amet. Non consectetur veniam irure sit commodo voluptate. Ad consectetur cupidatat ut non. Aliquip magna elit reprehenderit."
    },
    {
        "id": 3,
        "profileImage": profilePic,
        "name": "Haider 3",
        "organization": "DigiMark Developers 3",
        "position": "CEO 3",
        "commit": "loreAliqua in consequat aute laborum sunt. Sint ullamco laboris ut ut elit proident ut. Laboris aliquip adipisicing sit excepteur."
    }
]

function Testimonials() {
    return (
        <div className='bg-red-300 flex justify-center py-10'>
            <div className='w-4/5 bg-green-300 flex justify-center'>
                <div className='w-4/5 bg-yellow-300'>
                    {
                        testimonials.map((item) => 
                            <div className='flex flex-col justify-center items-center space-y-4'>
                                <img className='w-10' src={item.profileImage} />
                                <div className='flex flex-col justify-center items-center px-10'>
                                    <div className='text-center text-lg'>
                                        {item.commit}
                                    </div>
                                    <div className='mt-4 text-xl font-serif font-bold'>
                                        {item.name}
                                    </div>
                                    <div className=' text-lg'>
                                        {item.position}
                                    </div>
                                    <div className=' text-lg'>
                                        {item.organization}
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

export default Testimonials