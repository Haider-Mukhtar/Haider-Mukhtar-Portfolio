import { IoCodeSlashOutline } from "react-icons/io5";

import experience from "../lib/experience.ts";

const ExperienceCards = () => {
  return (
    <div className="flex justify-center bg-background py-20">
      <div className="w-11/12 space-y-6 lg:w-4/5 2xl:px-8">
        <h1 className="font-primaryBold text-heading text-center text-4xl font-semibold sm:text-5xl">
          Work Experience
        </h1>
        <div className="grid grid-flow-row gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experience.map((item: any) => (
            <div
              key={item.id}
              className="group rounded-xl bg-blue-500 p-6 text-white drop-shadow-lg transition-all duration-500 hover:scale-105"
            >
              <IoCodeSlashOutline className="size-8 duration-500 group-hover:rotate-12" />
              <div className="font-primarySemiBold mt-2 text-xl">
                {item.title}
              </div>
              <div className="font-primaryRegular text-base">
                {item.organization}
              </div>
              <div className="my-6 flex items-center justify-between">
                <div className="font-primaryRegular text-sm text-blue-100">
                  {item.level}
                </div>
                <div className="font-primaryRegular text-sm text-blue-100">
                  {item.sTime} - {item.eTime}
                </div>
              </div>
              <ul className="font-primaryRegular ml-4 list-disc text-sm text-blue-100">
                <li className="mt-2">{item.detail1}</li>
                <li className="mt-2">{item.detail2}</li>
                <li className="mt-2">{item.detail3}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCards;
