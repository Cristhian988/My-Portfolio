// import React from "react";
import { useState } from "react";
import logo from "../../assets/logo C.jpg";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";

const NavLinks = [
  { id: 1, name: "Inicio", link: "/" },
  { id: 2, name: "Sobre Mi", link: "#sobre-mi" },
  { id: 3, name: "Experiencia", link: "#experiencia" },
  { id: 4, name: "Proyectos", link: "#proyectos" },
  { id: 5, name: "Contacto", link: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-[0_0_3px_rgba(255,255,255,0.5)]">
      <div className="container py-2 flex justify-between items-center">
        {/* logo section */}
        <img src={logo} alt="logo" className="w-10 rounded-full" />
        {/* link section */}
        <div className="hidden md:block">
          {NavLinks.map((link) => {
            return (
              <a
                key={link.id}
                href={link.link}
                className="mx-4 text-sm  tracking-wide hover:text-gray-400 transition-all duration-200"
              >
                {link.name}
              </a>
            );
          })}
          {/* button section */}
          <a
            href="/CV.pdf"
            className="mx-4 font-semibold text-yellow-400"
            target="_blank"
            rel="noreferrer"
          >
            CV
          </a>
        </div>
        <div className="flex md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <RiCloseFill style={{ fontSize: 30 }} />
            ) : (
              <RiMenu3Fill style={{ fontSize: 28 }} />
            )}
          </button>
          {open && (
            <div className="absolute z-[9999] bg-black text-white top-14 right-0 flex flex-col items-center w-3/4 h-[calc(100vh)] gap-8 text-xl pt-12 px-8">
              {NavLinks.map((link) => {
                return (
                  <a
                    key={link.id}
                    href={link.link}
                    className="mx-4 text-sm  tracking-wide hover:text-gray-400 transition-all duration-200"
                    onClick={() => setOpen(!open)}
                  >
                    {link.name}
                  </a>
                );
              })}
              {/* button section */}
              <a
                href="/CV.pdf"
                className="mx-4 text-sm font-semibold text-yellow-400"
                target="_blank"
                rel="noreferrer"
              >
                CV
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
