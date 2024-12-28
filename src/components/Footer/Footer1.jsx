import React from 'react'
import { Link } from 'react-router'
import linkedin from "./footerAssets/linkedin.svg";
import github from "./footerAssets/github.svg";
import instagram from "./footerAssets/instagram.svg";
import sendIcon from "./footerAssets/sendIcon.svg"
import facebook from "./footerAssets/facebook.svg"
import phone from "./footerAssets/phone.svg";
import email from "./footerAssets/email.svg";

function Footer1() {
    return (
        <div className="bg-blue-500 flex justify-center items-center flex-col">
            <div className="w-4/5 py-6 grid md:grid-cols-2 gap-6">
                <div className='space-y-2'>
                    <Link to='/' className='text-3xl font-primaryBold text-white drop-shadow-2xl'>
                        HM.
                    </Link>
                    <ul className="font-primaryRegular flex gap-3">
                        <li>
                            <Link
                                to="/"
                                className="text-white text-sm font-primaryRegular hover:underline hover:underline-offset-2"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="text-white text-sm font-primaryRegular hover:underline hover:underline-offset-2"
                            >
                                About Me
                            </Link>
                        </li>
                        <li>
                            <a
                                href="/myexperience"
                                className="text-white text-sm font-primaryRegular hover:underline hover:underline-offset-2"
                            >
                                My Experience
                            </a>
                        </li>
                        <li>
                            <a
                                href="/myworks"
                                className="text-white text-sm font-primaryRegular hover:underline hover:underline-offset-2"
                            >
                                My Work
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="text-white text-sm font-primaryRegular hover:underline hover:underline-offset-2"
                            >
                                Hire Me
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='space-y-6'>
                    <div className='space-y-2'>
                        <div className='text-white font-primarySemiBold '>
                            Join my mailing list
                        </div>
                        <div className='flex gap-2'>
                            <input
                                type="email"
                                autocomplete="email"
                                placeholder="Enter your email"
                                className="w-full border bg-blue-500 px-2 rounded-md py-1.5 transition-colors focus:border-blue-300 focus:outline-0 placeholder-white font-primaryRegular text-white"
                            />
                            <button className='bg-white flex justify-center items-center border-b p-2 rounded-md'>
                                <img className='w-6 h-6' src={sendIcon} />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row gap-6">
                        <a
                            href="https://www.facebook.com/chhaidermukhtar880"
                            target="_blank"
                            className="hover:transition-transform hover:scale-110"
                        >
                            <img className="h-6 w-6" src={facebook} />
                        </a>
                        <a
                            href="https://www.instagram.com/haider_mukhtar_ch/"
                            target="_blank"
                            className="hover:transition-transform hover:scale-110"
                        >
                            <img className="h-6 w-6" src={instagram} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/haider-mukhtar/"
                            target="_blank"
                            className="hover:transition-transform hover:scale-110"
                        >
                            <img className="h-6 w-6" src={linkedin} />
                        </a>
                        <a
                            href="https://github.com/Haider-Mukhtar"
                            target="_blank"
                            className="hover:transition-transform hover:scale-110"
                        >
                            <img className="h-6 w-6" src={github} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center py-6 text-white text-sm font-primaryRegular w-4/5 border-t-2">
                @2025 HaiderMukhtar. All rights reserved.
            </div>
        </div>
    )
}

export default Footer1