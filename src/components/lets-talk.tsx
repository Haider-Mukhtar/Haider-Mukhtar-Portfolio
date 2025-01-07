import { FaArrowRight } from "react-icons/fa6";

import circle from "../assets/img/circle.png";
import { Magnetic } from "./ui/magnetic.tsx";

const LetsTalk = () => {
  // const springOptions = { bounce: 0.2 };
  return (
    <div className="flex justify-center bg-background py-20">
      <div className="w-11/12 lg:w-4/5 2xl:px-8">
        <h1 className="font-primaryBold text-center text-4xl font-semibold text-heading sm:text-5xl">
          Anything in Mind?
        </h1>
        <h1 className="font-primaryBold mt-4 text-center text-4xl font-semibold text-heading sm:text-5xl">
          Let's Talk
        </h1>
        <div className="mt-10 flex items-center justify-center">
          <Magnetic
            intensity={0.5}
            // springOptions={springOptions}
            actionArea="global"
            range={200}
          >
            <a
              href="https://wa.me/+92344603782?text=Hello, How can I help you?"
              target="_blank"
              className="group flex items-center justify-center"
            >
              <img
                className="size-60 animate-spin object-cover animate-duration-[20000ms]"
                src={circle}
              />
              <div className="font-primaryRegular absolute flex flex-col items-center justify-center text-center text-2xl text-white">
                <div>I'm</div>
                <div>Ready to Talk</div>
                <FaArrowRight className="mt-4 size-10 duration-300 group-hover:-rotate-12" />
              </div>
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
