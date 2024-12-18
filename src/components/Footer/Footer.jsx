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
                <div className="md:w-4/5 md:flex py-4">
                    <div className="md:w-1/2">
                        <ul className="text-center space-y-4">
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
                                    href="#"
                                    className="text-white hover:underline hover:underline-offset-2"
                                >
                                    Projects
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
                    <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center space-y-4">
                        <a
                            href="#"
                            target="_blank"
                            className="bg-blue-500 py-2 px-3 rounded-full hover:bg-blue-400 hover:transition-transform hover:scale-110"
                        >
                            <div className="flex flex-row items-center gap-2">
                                <img className="h-6 w-6" src={phone} />
                                <div className="text-lg font-semibold text-white">03344603782</div>
                            </div>
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            className="bg-blue-500 py-2 px-3 rounded-full hover:bg-blue-400 hover:transition-transform hover:scale-110"
                        >
                            <div className="flex flex-row items-center gap-2">
                                <img className="h-6 w-6" src={email} />
                                <div className="text-lg font-semibold text-white">haidermukhtarch405@gmail.com</div>
                            </div>
                        </a>
                        <div className="flex flex-row justify-center gap-6">
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
                </div>
            </div>
            <div className="text-center pb-2 text-white text-md">
                @2024-2025 HaiderMukhtar. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;
