import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function YearOfExperience() {

    const yearOfExperience = 2;
    const succeddfulProjects = 10;
    const satisfiedClients = 8;
    const clientReview = 80;

    const [startCount, setStartCount] = useState(false)

    return (
        <div className="flex justify-center py-14 my-14 bg-blue-500">
            <div className="md:w-4/5 w-11/12 px-6 lg:px-8 ">
                <ScrollTrigger onEnter={() => setStartCount(true)} onExit={() => setStartCount(false)}>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-4">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-lg/7 text-white font-primaryRegular">Year of Experience</dt>
                            <dd className="order-first text-5xl font-semibold tracking-tight text-white sm:text-5xl font-primaryRegular">
                                {
                                    startCount ?
                                    <CountUp start={0} end={yearOfExperience}></CountUp>
                                    : 2
                                }
                                +</dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-lg/7 text-white font-primaryRegular">Successful Projects</dt>
                            <dd className="order-first text-5xl font-semibold tracking-tight text-white sm:text-5xl font-primaryRegular">
                                {
                                    startCount ?
                                    <CountUp start={0} end={succeddfulProjects}></CountUp>
                                    : 10
                                }
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-lg/7 text-white font-primaryRegular">Satisfied Clients</dt>
                            <dd className="order-first text-5xl font-semibold tracking-tight text-white sm:text-5xl font-primaryRegular">
                                {
                                    startCount ?
                                    <CountUp start={0} end={satisfiedClients}></CountUp>
                                    : 8
                                }
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-lg/7 text-white font-primaryRegular">Client Review</dt>
                            <dd className="order-first text-5xl font-semibold tracking-tight text-white sm:text-5xl font-primaryRegular">
                                {
                                    startCount ?
                                    <CountUp start={0} end={clientReview}></CountUp>
                                    : 80
                                }
                                %</dd>
                        </div>
                    </dl>
                </ScrollTrigger>
            </div>
        </div>
    )
}

export default YearOfExperience