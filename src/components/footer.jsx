import React from 'react'
import { Link } from 'react-router'
import linkedin from "../assets/img/icons/linkedin.svg";
import github from "../assets/img/icons/github.svg";
import instagram from "../assets/img/icons/instagram.svg";
import facebook from "../assets/img/icons/facebook.svg"
import download from '../assets/img/icons/download.svg'
import myCV from '../assets/files/HaiderMukhtar_CV.pdf'
import email from '../assets/img/icons/email.svg'
import links from '../lib/nav-links'

function Footer() {

    const myEmail = "haidermukhtarch405@gmail.com";

    return (
        <footer className="bg-blue-500 flex justify-center items-center flex-col">
            <div className="lg:w-4/5 w-11/12 py-6 grid md:grid-cols-2 gap-6 items-center ">
                <div className='space-y-2'>
                    <Link to='/' className='text-3xl font-primaryBold text-white drop-shadow-2xl'>
                        HM.
                    </Link>
                    <div className="font-primaryRegular flex gap-5">
                        {
                            links.map((link) => (
                                <Link
                                    to={link.path}
                                    className="text-white text-sm font-primaryRegular hover:underline hover:underline-offset-2"
                                >
                                    {link.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className=''>
                    <div className="flex flex-row gap-5">
                        <a
                            href="https://www.facebook.com/chhaidermukhtar880"
                            target="_blank"
                            title='Facebook'
                            className="hover:transition-transform hover:scale-110"
                        >
                            <img className="h-6 w-6" src={facebook} alt='Facebook' />
                        </a>
                        <a
                            href="https://www.instagram.com/haider_mukhtar_ch/"
                            target="_blank"
                            title='Instagram'
                            className="hover:transition-transform hover:scale-110"
                        >
                            <img className="h-6 w-6" src={instagram} alt='Instagram' />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/haider-mukhtar/"
                            target="_blank"
                            title='LinkedIn'
                            className="hover:transition-transform hover:scale-110"
                        >
                            <img className="h-6 w-6" src={linkedin} alt='LinkedIn' />
                        </a>
                        <a
                            href="https://github.com/Haider-Mukhtar"
                            target="_blank"
                            title='Github'
                            className="hover:transition-transform hover:scale-110"
                        >
                            <img className="h-6 w-6" src={github} alt='Github' />
                        </a>
                        <a
                            href={`mailto:${myEmail}?subject=Hi there!&body=Hi Haider, how are you doing?`}
                            target="_blank"
                            title='Email'
                            className="hover:transition-transform hover:scale-110"
                        >
                            <img className="h-6 w-6" src={email} alt='Email' />
                        </a>
                        <a
                            href={myCV}
                            download={true}
                            title='Download CV'
                            className="hover:transition-transform hover:scale-110"
                        >
                            <img className="h-6 w-6" src={download} alt='Download CV' />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center py-5 text-white border-white/50 text-xs font-primaryRegular lg:w-4/5 w-11/12 border-t-[1px]">
                @2025 HaiderMukhtar. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
