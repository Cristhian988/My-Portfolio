// import React from "react";
import profile from "../../assets/Profile.jpg";

export default function About() {
  return (
    <div>
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* image section */}
          <div className="flex justify-center items-center">
            <img
              src={profile}
              alt="profile"
              className="w-1/2 object-contain rounded-full shadow-[0_0_15px_15px_rgba(255,255,255,0.1)]"
            />
          </div>
          {/* text section */}
          <div className="space-y-5 flex justify-center flex-col tracking-tighter">
            <h2 className="text-3xl font-bold">Sobre mi</h2>
            <p className="text-clamp-sm leading-[1.75]">
              Soy estudiante de la carrera Desarrollo de Software y
              desarrollador frontend junior con pasión por crear interfaces web
              atractivas y funcionales. Cuento con experiencia en HTML, CSS,
              JavaScript y frameworks como React. Me motiva aprender nuevas
              tecnologías, resolver problemas y colaborar en equipo para
              construir soluciones innovadoras. Estoy comprometido con mi
              crecimiento profesional y listo para contribuir a proyectos
              desafiantes mientras sigo desarrollando mis habilidades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
