// import React from "react";
import logo from "../../assets/logo C.jpg";

const NavLinks = [
  { id: 1, name: "Sobre Mi", link: "#sobre-mi" },
  { id: 2, name: "Experiencia", link: "#experiencia" },
  { id: 3, name: "Proyectos", link: "#proyectos" },
  // { id: 4, name: "Contacto", link: "#contacto" },
];

export default function Navbar() {
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
            href="/src/document/CV.pdf"
            className="mx-4 font-semibold text-yellow-400"
            target="_blank"
            rel="noreferrer"
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  );
}
