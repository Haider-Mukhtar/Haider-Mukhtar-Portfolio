import React from "react";
import { IoCodeSlashOutline } from "react-icons/io5";
import experience from '../lib/experience'

function NewExperienceCards() {
  return (
    <div className="flex justify-center py-14">
      <div className="lg:w-4/5 w-11/12 2xl:px-8 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-semibold text-center font-primaryBold">
          Work Experience
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
          {
            experience.map((item) => (
              <div className="bg-blue-500 rounded-xl p-6 text-white drop-shadow-lg group hover:scale-105 duration-500 transition-all">
                <IoCodeSlashOutline className="size-8 group-hover:rotate-12 duration-500" />
                <div className="font-primarySemiBold text-xl mt-2">
                  {item.title}
                </div>
                <div className="font-primaryRegular text-base">
                  {item.organization}
                </div>
                <div className="flex justify-between items-center my-6">
                  <div className="font-primaryRegular text-sm text-blue-100">{item.level}</div>
                  <div className="font-primaryRegular text-sm text-blue-100">{item.sTime} - {item.eTime}</div>
                </div>
                <ul className="font-primaryRegular text-sm text-blue-100 list-disc ml-4">
                  <li className="mt-2">{item.detail1}</li>
                  <li className="mt-2">{item.detail2}</li>
                  <li className="mt-2">{item.detail3}</li>
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default NewExperienceCards;
