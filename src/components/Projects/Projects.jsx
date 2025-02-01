// import React from "react";
import { FaGithub } from "react-icons/fa";
import { dataProject } from "../../assets/data_project";
import { RiShareBoxLine } from "react-icons/ri";

export default function Projects() {
  return (
    <div className="container py-16">
      <div>
        <h2 className="text-3xl font-bold mb-6">Proyectos</h2>

        <div className="flex flex-col gap-y-20">
          {dataProject.map((project) => {
            return (
              <div key={project.id} className="grid overflow-hidden mb-16">
                <div className="grid grid-area">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className=" w-full opacity-10 md:opacity-40 hover:opacity-100 transition-all md:w-2/3 ml-auto"
                  >
                    <img src={project.image} alt={project.name} />
                  </a>
                </div>
                <div className="grid grid-area items-center w-full md:w-[500px]">
                  <div className="relative space-y-4 p-4 lg:p-0">
                    <span className="text-yellow-500">Proyecto destacado</span>
                    <h1 className="w-full md:w-2/3 lg:w-4/5 font-semibold">
                      {project.name}
                    </h1>
                    <p className="relative w-full md:max-w-[500px] rounded-md py-6 md:py-6 px-4 bg-[#16181a] shadow-[2px_2px_7px_rgba(255,255,255,.5)] text-sm">
                      {project.description}
                    </p>
                    <p>{project.tech && project.tech.join(", ")}</p>
                    <div className="flex items-center gap-4 text-xl">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <FaGithub />
                      </a>
                      <a href={project.url} target="_blank" rel="noreferrer">
                        <RiShareBoxLine />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
