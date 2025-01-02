import React, { useState } from 'react'
import { Link } from 'react-router'
import linkedin from "./footerAssets/linkedin.svg";
import github from "./footerAssets/github.svg";
import instagram from "./footerAssets/instagram.svg";
import sendIcon from "./footerAssets/sendIcon.svg"
import facebook from "./footerAssets/facebook.svg"
// import phone from "./footerAssets/phone.svg";
// import email from "./footerAssets/email.svg";
import download from './footerAssets/download.svg'
import myCV from './footerAssets/HaiderMukhtar_CV.pdf'

function Footer1() {

    const links = [
        { name: 'Home', path: '/' },
        // { name: 'About', path: '/about' },
        { name: 'Experience', path: '/myexperience' },
        { name: 'Works', path: '/myworks' },
        { name: 'Hire Me', path: '/contact' },
    ];

    const [email, setEmail] = useState('')
    // console.log(email)
    const [emailError, setEmailError] = useState(false)
    const handleSend = () => {
        if (email === '') {
            setEmailError(true)
        }
        else {
            const myEmail = "haidermukhtarch405@gmail.com";

            const emailLink = `mailto:${myEmail}?subject=Hi there!&body=Hi Haider, how are you doing?`;
            window.location.href = emailLink;
            setEmailError(false)
            setEmail('')
        }
    }

    return (
        <footer className="bg-blue-500 flex justify-center items-center flex-col">
            <div className="lg:w-4/5 w-11/12 py-6 grid md:grid-cols-2 gap-6">
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
                    <label className='text-white font-primarySemiBold '>
                        Join my mailing list
                    </label>
                    <div className='flex gap-2 mt-2'>
                        <input
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(txt) => setEmail(txt.target.value)}
                            placeholder="Enter your email"
                            className={`${emailError ? 'border-red-500' : 'border-white'} w-full border  bg-blue-500 px-2 rounded-md py-1.5 transition-colors focus:border-blue-300 focus:outline-0 placeholder-white font-primaryRegular text-white`}
                        />
                        <button onClick={handleSend} className='bg-white flex justify-center items-center border-b p-2 rounded-md'>
                            <img className='w-6 h-6' src={sendIcon} />
                        </button>
                    </div>
                    <div className="flex flex-row gap-5 mt-6">
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
                            href={myCV}
                            target="_blank"
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

export default Footer1