import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
// import { FiArrowRight } from "react-icons/fi";

export const Education1 = () => {
    return (
        <section className="bg-white p-4 md:p-8">
            <div className='text-5xl sm:text-5xl text-blue-500 font-semibold font-serif text-center'>
                My Education
            </div>
            <div className="mx-auto max-w-5xl">
                <Link
                    heading="M.Sc. Computer Science"
                    subheading="2024 - Present"
                    uni="FAST NUCES, Lahore"
                    marksin="GPA"
                    percentage="0"
                    href="#"
                />
                <Link
                    heading="B.Sc. Computer Engineering"
                    subheading="2019 - 2023"
                    uni="The University of Lahore"
                    marksin="GPA"
                    percentage="3.64/4.0"
                    href="#"
                />
                <Link
                    heading="Intermediate"
                    subheading="2017 - 2019"
                    uni="Sharif Education Complex"
                    marksin="Percentage"
                    percentage="76%"
                    href="#"
                />
                <Link
                    heading="Matriculation"
                    subheading="2015 - 2017"
                    uni="Al-Riaz Model School"
                    marksin="Percentage"
                    percentage="80%"
                    href="#"
                />
            </div>
        </section>
    );
};

const Link = ({ heading, uni, marksin, percentage, subheading, href }) => {
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
            className="group relative flex items-center justify-between border-b-2 border-blue-300 py-4 transition-colors duration-500 hover:border-blue-500 md:py-8"
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
                    className="relative z-10 block text-4xl font-bold text-blue-300 transition-colors duration-500 group-hover:text-blue-500 md:text-5xl"
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
                <span className="relative z-10 mt-2 block text-base text-blue-300 transition-colors duration-500 group-hover:text-blue-500">
                    {subheading}
                </span>
            </div>

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
                <div className="bg-blue-500 p-8 rounded-2xl text-white text-xl">
                    <div>
                        {uni}
                    </div>
                    <div>
                        {marksin} - {percentage}
                    </div>
                </div>
            </motion.div>


        </motion.a>
    );
};