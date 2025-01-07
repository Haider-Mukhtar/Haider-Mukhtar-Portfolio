import skills from "../lib/skills.ts";
import SkillsTypeAnimation from "./ui/skills-type-animation.tsx";

const Skills = () => {
  return (
    <div className="bg-secbackground flex justify-center py-20">
      <div className="w-11/12 lg:w-4/5 2xl:px-8">
        <h1 className="font-primaryBold font-bold text-heading text-center text-4xl drop-shadow-2xl sm:text-5xl">
          My Works Skills
        </h1>
        <h2 className="font-primarySemiBold text-subheading font-semibold mt-2 text-center text-3xl">
          <SkillsTypeAnimation />
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((item: any) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-start space-y-2 rounded-xl bg-blue-500 px-2 py-10 text-center font-semibold uppercase text-blue-500 transition-all duration-300 hover:translate-x-[-6px] hover:translate-y-[-6px] hover:rounded-md hover:shadow-[6px_6px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none sm:px-6"
            >
              <img className="h-16 w-16 object-contain" src={item.image} />
              <div className="font-primarySemiBold text-xl text-white">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
