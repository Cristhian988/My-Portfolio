// import React from "react";

import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="container">
      <div className="flex justify-center h-[90vh]">
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-bold text-yellow-500">¿Que sigue?</p>
          <h1 className="text-4xl font-semibold mb-4">CONTÁCTAME</h1>
          <p className="mb-12">No dudes en contactarme!</p>
          <button className="px-6 py-2 rounded-lg border-white border text-white font-mono text-lg">
            <a
              href="mailto:crissfx28@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Saludame
            </a>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-10 mb-6 text-2xl">
        <a
          href="https://github.com/Cristhian988"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.instagram.com/criss.98_/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/cristhian-escriba-arango-70440615b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a href="mailto:crissfx28@gmail.com" target="_blank" rel="noreferrer">
          <MdOutlineEmail />
        </a>
      </div>
      <div>
        <p className="text-gray-500 mb-4 text-center">
          2024Cristhian Escriba - Ten 365 días bonitos
        </p>
      </div>
    </div>
  );
}
