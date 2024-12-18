import React from 'react'

const education = [
    {
        "id": 1,
        "course": "M.Sc. Computer Science",
        "uni": "FAST NUCES, Lahore",
        "sYear": 2024,
        "eYear": "Present",
        "marksin": "GPA", 
        "percentage": "0",
    },
    {
        "id": 2,
        "course": "B.Sc. Computer Engineering",
        "uni": "The University of Lahore",
        "sYear": 2019,
        "eYear": 2023,
        "marksin": "GPA", 
        "percentage": "3.64/4.0",
    },
    {
        "id": 3,
        "course": "Intermediate",
        "uni": "Sharif Education Complex",
        "sYear": 2017,
        "eYear": 2019,
        "marksin": "Percentage", 
        "percentage": "76%",
    },
    {
        "id": 4,
        "course": "Matriculation",
        "uni": "Al-Riaz Model School",
        "sYear": 2015,
        "eYear": 2017,
        "marksin": "Percentage", 
        "percentage": "80%",
    }
]

function Education() {
    return (
        <div className='flex justify-center xl:mt-8'>
            <div className='w-4/5 xl:px-14 lg:px-8'>
                <div className='text-5xl sm:text-5xl font-semibold font-serif text-center'>
                    My Education
                </div>
                {
                    education.map((item) =>
                        <div className='my-8 sm:grid sm:grid-cols-2'>
                            <div className='motion-preset-slide-right motion-duration-2000'>
                                <div className='text-2xl font-bold text-center sm:text-left font-serif'>
                                    {item.uni}
                                </div>
                            </div>
                            <div className='motion-preset-slide-left motion-duration-2000'>
                                <div className='text-2xl font-semibold text-center sm:text-left'>
                                    {item.course}
                                </div>
                                <div className='text-xl  text-center sm:text-left'>
                                    {item.sYear} - {item.eYear}
                                </div>
                                <div className='text-xl text-center sm:text-left'>
                                    ({item.marksin} - {item.percentage})
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Education