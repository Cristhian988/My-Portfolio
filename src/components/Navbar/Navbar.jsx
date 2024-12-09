import React from "react";
import logo from "../../assets/logo C.jpg";

const NavLinks = [
  { id: 1, name: "Sobre Mi", link: "#" },
  { id: 2, name: "Experiencia", link: "#" },
  { id: 3, name: "Proyectos", link: "#" },
  { id: 4, name: "Contacto", link: "#" },
];

export default function Navbar() {
  return (
    <div className="bg-black text-white">
      <div className="container py-4 flex justify-between items-center">
        {/* logo section */}
        <img src={logo} alt="logo" className="w-10 rounded-full" />
        {/* link section */}
        <div className="hidden md:block">
          {NavLinks.map((link) => {
            return (
              <a
                key={link.id}
                href={link.link}
                className="mx-4 text-sm font-semibold tracking-wide hover:text-gray-400 transition-all duration-200"
              >
                {link.name}
              </a>
            );
          })}
          {/* button section */}
          <a href="#" className="mx-4 text-base text-[#9750DD]">
            CV
          </a>
        </div>
      </div>
    </div>
  );
}
