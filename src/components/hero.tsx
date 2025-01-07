import { Link } from "react-router";

import github from "../assets/img/icons/github.svg";
import instagram from "../assets/img/icons/instagram.svg";
import linkedin from "../assets/img/icons/linkedin.svg";
import rightArrow from "../assets/img/icons/rightArrow.svg";
import myPic from "../assets/img/pic.png";
import HeroTypeAnimation from "./ui/hero-type-animation.tsx";

const Hero = () => {
  return (
    <div className="flex justify-center bg-background py-20">
      <div className="w-11/12 space-y-4 lg:w-4/5 2xl:px-8">
        <div className="flex items-center justify-center">
          <div className="motion-preset-pop motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate rounded-full bg-gradient-to-tr from-blue-500 via-blue-300 to-blue-500 shadow-blue-500 drop-shadow-2xl duration-700 hover:scale-100">
            <img
              className="object-cver size-72 rounded-full sm:size-80 lg:size-96"
              src={myPic}
              alt="Profile Pic"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-primaryBold text-heading text-center text-4xl font-bold sm:text-5xl">
            I'm Haider Mukhtar
          </div>
          <div className="font-primarySemiBold text-subheading mt-2 text-center text-3xl font-semibold">
            <HeroTypeAnimation />
          </div>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Link
              to="/contact"
              className="flex flex-row items-center rounded-full bg-blue-500 py-1 pl-3 pr-1 drop-shadow-xl hover:scale-105 hover:bg-blue-400 hover:transition-transform"
            >
              <div className="font-primarySemiBold mr-2 text-lg capitalize text-white">
                hire me
              </div>
              <div className="flex size-8 items-center justify-center rounded-full bg-white p-1.5">
                <img className="size-full" src={rightArrow} />
              </div>
            </Link>
            <a
              href="https://www.instagram.com/haider_mukhtar_ch/"
              target="_blank"
              className="animate-once size-[41px] animate-spin rounded-full bg-blue-500 p-2.5 drop-shadow-xl hover:scale-110 hover:bg-blue-400 hover:transition-transform"
            >
              <img className="size-full" src={instagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/haider-mukhtar/"
              target="_blank"
              className="animate-once size-[41px] animate-spin rounded-full bg-blue-500 p-2.5 drop-shadow-xl hover:scale-110 hover:bg-blue-400 hover:transition-transform"
            >
              <img className="size-full" src={linkedin} />
            </a>
            <a
              href="https://github.com/Haider-Mukhtar"
              target="_blank"
              className="animate-once size-[41px] animate-spin rounded-full bg-blue-500 p-2.5 drop-shadow-xl hover:scale-110 hover:bg-blue-400 hover:transition-transform"
            >
              <img className="size-full" src={github} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
