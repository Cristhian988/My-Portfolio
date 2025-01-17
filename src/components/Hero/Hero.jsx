// import React from "react";
import Background from "../../assets/wallpaper.jpg";

import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbFileCv } from "react-icons/tb";

export default function Hero() {
  return (
    <div>
      <div className="container py-14 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[60vh]">
          {/* Text Section */}
          <div className="flex flex-col justify-center tracking-wide ">
            <p className="text-clamp-md font-medium font-mono">
              Hola, mi nombre es
            </p>
            <h2 className="text-clamp-lg font-bold tracking-tighter leading-[1.5]">
              Cristhian Escriba
            </h2>
            <h2 className="text-clamp-lg font-bold tracking-tighter ">
              Y Soy Desarrollador Web
            </h2>
            <p className="w-full md:w-[600px] font-mono text-gray-500 text-clamp-md leading-[1.75] mt-4 mb-7">
              Soy desarrollador Front-End, resido en Lima, Perú. Actualmente me
              dedico al desarrollo web y me apasiona la creación de páginas y
              aplicaciones web.
            </p>
            <div>
              <button className="px-6 py-2 rounded-lg border-white border text-white font-mono text-lg">
                <a
                  href="mailto:crissfx28@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contáctame
                </a>
              </button>
            </div>
          </div>
          {/* Images Section */}
          <div>
            <img
              src={Background}
              alt="profile"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* static icons */}
      <div className="block w-10 fixed bottom-0 left-10 z-10 ">
        <ul className="flex flex-col items-center justify-center gap-6 text-gray-500 text-xl">
          <li>
            <a
              href="https://github.com/Cristhian988"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <FiGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/cristhian-escriba-arango-70440615b/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="../../document//CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white text-2xl"
            >
              <TbFileCv />
            </a>
          </li>
          <div className="relative w-[1px] h-20 bg-gray-500 group-hover:bg-gray-500 group-hover:text-gray-500" />
        </ul>
      </div>
      <div className="block w-10 fixed bottom-0 left-auto right-10 z-10 ">
        <div className="flex flex-col items-center relative">
          <a
            href=""
            className="inline-flex items-center writing-mode-vertical-rl tracking-widest text-sm text-gray-500 hover:text-white"
          >
            crissfx28@gmail.com
            <div className="relative w-[1px] h-20 bg-gray-500 group-hover:bg-gray-500 group-hover:text-gray-500" />
          </a>
        </div>
      </div>
    </div>
  );
}
