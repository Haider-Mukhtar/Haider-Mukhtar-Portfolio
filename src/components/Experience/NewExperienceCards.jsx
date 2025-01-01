import React from "react";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const experience = [
  {
    id: 1,
    icon: "mobile",
    title: "Web Application Development",
    level: "Internship",
    organization: "DigiMark Developers",
    location: "Lahore, Pakistan",
    sTime: "Dec 2024",
    eTime: "Present",
    detail1:
      "Acquired proficiency in HTML, CSS, Tailwind CSS, JavaScript, and React.",
    detail2:
      "Gained hands-on experience in developing visually appealing and user-friendly web interfaces.",
    detail3: "Crafted responsive web designs that enhance user experience.",
  },
  {
    id: 2,
    title: "Mobile Application Development",
    level: "Internship",
    organization: "MikroStar Tech (SMC-Pvt.) Ltd.",
    location: "Lahore, Pakistan",
    sTime: "Oct 2023",
    eTime: "Jan 2024",
    detail1:
      "Developed interactive mobile applications using Android Studio, Java, JavaScript, and Firebase.",
    detail2:
      "Dedicated significant time to mastering React Native for enhanced mobile solutions.",
    detail3:
      "Completed a comprehensive project demonstrating advanced mobile app development skills.",
  },
  {
    id: 3,
    title: "Front-End Web Development",
    level: "Internship",
    organization: "Cosmosoft Business Solutions Pvt. Ltd.",
    location: "Lahore, Pakistan",
    sTime: "July 2022",
    eTime: "Sep 2022",
    detail1:
      "Acquired proficiency in HTML, CSS, Tailwind CSS, Bootstrap, and jQuery.",
    detail2:
      "Gained hands-on experience in developing visually appealing and user-friendly web interfaces.",
    detail3: "Crafted responsive web designs that enhance user experience.",
  },
];

function NewExperienceCards() {
  return (
    <div className="flex justify-center py-14">
      <div className="md:w-4/5 w-11/12 2xl:px-8 space-y-6">
        <div className="text-4xl sm:text-5xl font-semibold text-center font-primaryBold">
          Work Experience
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
          {experience.map((item) => (
            <div className="bg-blue-500 rounded-xl p-6 text-white drop-shadow-lg group hover:scale-105 duration-500 transition-all">
              <IoCodeSlashOutline className="size-8 group-hover:rotate-12 duration-500" />
              <div className="font-primarySemiBold text-xl mt-2">{item.title}</div>
              <div className="font-primaryRegular text-base">{item.organization}</div>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewExperienceCards;
