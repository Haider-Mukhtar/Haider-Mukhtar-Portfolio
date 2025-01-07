import Marquee from "react-fast-marquee";
import { CgQuote } from "react-icons/cg";

import profilePic from "../assets/img/icons/profile.svg";
import testimonials from "../lib/testimonials.ts";

const Testimonials = () => {
  return (
    <div className="flex justify-center bg-secbackground py-20">
      <div className="w-11/12 lg:w-4/5 2xl:px-8">
        <h1 className="font-primaryBold text-center text-4xl font-semibold text-heading sm:text-5xl">
          What Clients Say About Me
        </h1>
        <Marquee pauseOnHover autoFill>
          {testimonials.map((item: any) => (
            <div
              key={item.id}
              className="mx-2 my-6 w-72 cursor-pointer rounded-xl bg-blue-500 duration-500 hover:scale-105 hover:drop-shadow-lg sm:w-96 md:mx-4"
            >
              <CgQuote color="#ffffff" className="size-20" />
              <div className="font-primaryRegular px-6 text-xl text-white">
                {item.commit}
              </div>
              <div className="flex items-center justify-between px-6 py-6">
                <div className="font-primaryRegular text-sm text-white">
                  <p className="font-primarySemiBold">{item.name}</p>
                  <p className="text-blue-100">
                    {item.position} at {item.organization}
                  </p>
                </div>
                <div className="rounded-full bg-white p-2">
                  <img className="size-5" src={profilePic} />
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;
