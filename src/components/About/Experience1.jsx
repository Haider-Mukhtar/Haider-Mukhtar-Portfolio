import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { title } from "motion/react-client";
import React, { useRef } from "react";
// import { FiArrowRight } from "react-icons/fi";

const experience = [
    {
        "id": 1,
        "title": "Web Application Development",
        "level": "Internship",
        "organization": "DigiMark Developers",
        "location": "Lahore, Pakistan",
        "sTime": "Dec 2024",
        "eTime": "Present",
        "detail1": "null",
        "detail2": "null",
        "detail3": "null"
    },
    {
        "id": 2,
        "title": "Mobile Application Development",
        "level": "Internship",
        "organization": "MikroStar Tech (SMC-Pvt.) Ltd.",
        "location": "Lahore, Pakistan",
        "sTime": "Oct 2023",
        "eTime": "Jan 2024",
        "detail1": "Developed interactive mobile applications using Android Studio, Java, JavaScript, and Firebase.",
        "detail2": "Dedicated significant time to mastering React Native for enhanced mobile solutions.",
        "detail3": "Completed a comprehensive project demonstrating advanced mobile app development skills."
    },
    {
        "id": 3,
        "title": "Front-End Web Development",
        "level": "Internship",
        "organization": "Cosmosoft Business Solutions Pvt. Ltd.",
        "location": "Lahore, Pakistan",
        "sTime": "July 2022",
        "eTime": "Sep 2022",
        "detail1": "Acquired proficiency in HTML, CSS, Tailwind CSS, Bootstrap, and jQuery.",
        "detail2": "Gained hands-on experience in developing visually appealing and user-friendly web interfaces.",
        "detail3": "Crafted responsive web designs that enhance user experience."
    }
]

export const Experience1 = () => {
    return (
        <section className="bg-white p-4 md:p-8">
            <div className='text-5xl sm:text-5xl text-black font-semibold font-primaryBold text-center'>
                Work Experience
            </div>
            <div className="mx-auto max-w-5xl">
                {
                    experience.map((item) =>
                        <Link
                            heading={item.title}
                            subheading={item.level}
                            organization={item.organization}
                            location={item.location}
                            sTime={item.sTime}
                            eTime={item.eTime}
                            detail1={item.detail1}
                            detail2={item.detail2}
                            detail3={item.detail3}

                        />
                    )
                }
            </div>
        </section>
    );
};

const Link = ({ heading, sTime, eTime, organization, location, detail1, detail2, detail3, subheading, }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.a
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className="group relative flex items-center justify-between border-b-2 border-black py-4 transition-colors duration-500 hover:border-blue-500 mx-8 md:py-8"
        >
            <div>
                <motion.span
                    variants={{
                        initial: { x: 0 },
                        whileHover: { x: -16 },
                    }}
                    transition={{
                        type: "spring",
                        staggerChildren: 0.075,
                        delayChildren: 0.25,
                    }}
                    className="relative z-10 block text-3xl font-bold text-black transition-colors duration-500 group-hover:text-blue-500 md:text-4xl font-primaryBold"
                >
                    {heading.split("").map((l, i) => (
                        <motion.span
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: 16 },
                            }}
                            transition={{ type: "spring" }}
                            className="inline-block"
                            key={i}
                        >
                            {l}
                        </motion.span>
                    ))}
                </motion.span>
                <span className="relative z-10 mt-2 block text-2xl text-black transition-colors duration-500 group-hover:text-blue-500 font-primarySemiBold">
                    {organization} ({location})
                </span>
                <span className="relative z-10 mt-2 block text-base text-black transition-colors duration-500 group-hover:text-blue-500 font-primaryRegular">
                    {sTime} - {eTime}
                </span>
                <span className="relative z-10 mt-2 block text-base text-black transition-colors duration-500 group-hover:text-blue-500 font-primaryRegular">
                    {subheading}
                </span>
                <span className="relative z-10 mt-2 block text-base text-black transition-colors duration-500 group-hover:text-blue-500 font-primaryRegular">
                    {detail1}
                </span>
                <span className="relative z-10 mt-2 block text-base text-black transition-colors duration-500 group-hover:text-blue-500 font-primaryRegular">
                    {detail2}
                </span>
                <span className="relative z-10 mt-2 block text-base text-black transition-colors duration-500 group-hover:text-blue-500 font-primaryRegular">
                    {detail3}
                </span>
            </div>
{/*
    <motion.div
        style={{
            top,
            left,
            translateX: "-0%",
            translateY: "-50%",
        }}
        variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        className="absolute z-10 h-24 w-32 rounded-lg object-cover md:h-48 md:w-auto">
        <div className="bg-blue-500 p-2 md:p-4 lg:p-8 rounded-2xl text-white text-xl text-justify">
            <div>
                {organization}
            </div>
            <div>
                {location}
            </div>
        </div>
    </motion.div>
    */}
        </motion.a>
    );
};