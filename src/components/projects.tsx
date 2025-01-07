import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";

import projects from "../lib/projects.ts";

const Projects = () => {
  return (
    <div className="flex justify-center bg-background py-20">
      <div className="w-11/12 lg:w-4/5 2xl:px-8">
        <h1 className="font-primaryBold text-center text-4xl font-semibold text-heading sm:text-5xl">
          My Projects
        </h1>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((item: any) => (
            <div
              key={item.id}
              className="group relative col-span-1 flex w-full items-center justify-center overflow-hidden rounded-xl bg-black transition-shadow hover:shadow-lg"
            >
              <img
                className="aspect-[9/10] size-full object-cover group-hover:opacity-50 sm:aspect-[9/12] md:aspect-[9/13] lg:aspect-[9/16]"
                alt="project-image"
                src={item.image}
              />
              <div className="absolute inset-0 hidden h-full w-full flex-col items-end justify-end bg-gradient-to-t from-blue-500 via-transparent to-transparent group-hover:flex">
                <div className="flex w-full flex-col items-center justify-center gap-3.5 p-3.5">
                  <div className="flex w-full items-center justify-center">
                    <span className="font-primaryBold flex-1 text-left text-xl font-bold text-white">
                      {item.name}
                    </span>
                    <div className="flex items-center justify-center gap-1.5">
                      <a href={item.github} target="_blank" className="group">
                        <FaGithub className="size-9 rounded-full bg-white p-2" />
                      </a>
                      <a href={item.url} target="_blank">
                        <CiLink className="size-9 rounded-full bg-white p-2" />
                      </a>
                    </div>
                  </div>
                  <p className="font-primaryRegular w-full text-left text-sm text-white">
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
