import React from "react";
import { Link } from "react-router";
import linkedin from "./footerAssets/linkedin.svg";
import github from "./footerAssets/github.svg";
import instagram from "./footerAssets/instagram.svg";
import phone from "./footerAssets/phone.svg";
import email from "./footerAssets/email.svg";

function Footer() {
    return (
        <div className="bg-blue-500">
            <div className="bg-blue-500 flex justify-center">
                <div className="w-4/5 py-4 ">
                    <div className="md:w-1/2 flex flex-col justify-between space-y-10">
                        <div className="flex flex-col">
                            <span>
                                <Link to='/' className='text-3xl font-primaryBold text-white drop-shadow-2xl'>
                                    HM.
                                </Link>
                            </span>
                            <spam>
                                <a
                                    href="tel:03344603782"
                                    target="_blank"
                                    className="hover:underline hover:underline-offset-2 text-white"
                                >
                                    <span className="text-lg text-white font-primaryRegular">
                                        03344603782
                                    </span>
                                </a>
                            </spam>
                            <span>
                                <a
                                    href="mailto:haidermukhtarch405@gmail.com"
                                    target="_blank"
                                    className="hover:underline hover:underline-offset-2 text-white"
                                >
                                    <span className="text-lg text-white font-primaryRegular">
                                        haidermukhtarch405@gmail.com
                                    </span>
                                </a>
                            </span>
                        </div>
                        <div className="flex flex-row gap-6">
                            <a
                                href="https://www.instagram.com/haider_mukhtar_ch/"
                                target="_blank"
                                className="bg-blue-500 p-2 rounded-full hover:bg-blue-400 hover:transition-transform hover:scale-110"
                            >
                                <img className="h-8 w-8" src={instagram} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/haider-mukhtar/"
                                target="_blank"
                                className="bg-blue-500 p-2 rounded-full hover:bg-blue-400 hover:transition-transform hover:scale-110"
                            >
                                <img className="h-8 w-8" src={linkedin} />
                            </a>
                            <a
                                href="https://github.com/Haider-Mukhtar"
                                target="_blank"
                                className="bg-blue-500 p-2 rounded-full hover:bg-blue-400 hover:transition-transform hover:scale-110"
                            >
                                <img className="h-8 w-8" src={github} />
                            </a>
                        </div>
                    </div>
                    {/*
                    <div className="md:w-1/2">
                        <ul className="text-center space-y-4 font-primaryRegular">
                            <li>
                                <Link
                                    to="/"
                                    className="text-white hover:underline hover:underline-offset-2"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-white hover:underline hover:underline-offset-2"
                                >
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="/myexperience"
                                    className="text-white hover:underline hover:underline-offset-2"
                                >
                                    My Experience
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/myworks"
                                    className="text-white hover:underline hover:underline-offset-2"
                                >
                                    My Work
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-white hover:underline hover:underline-offset-2"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    */}
                </div>
            </div>
            <div className="text-center pb-2 text-white text-md font-primaryRegular">
                @2024-2025 HaiderMukhtar. All rights reserved.
            </div>
            {/*
                <div className="text-center pb-2 text-white text-md font-primaryRegular">
                Supportive Partner ❤️ Haider Mukhtar
                </div>
                */}
        </div>
    );
}

export default Footer;
