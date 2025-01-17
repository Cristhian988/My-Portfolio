// import React from "react";

export default function Experience() {
  return (
    <div>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-5 flex flex-col justify-center">
            <h2 className="text-3xl font-bold">Experiencia</h2>
            <p className="text-xl tracking-tighter">Desarrollador Front-End</p>
            <p className="text-clamp-xs leading-[1.5]">
              He trabajado de manera independiente, aplicando buenas prácticas
              de desarrollo, organizando tareas, y utilizando herramientas como
              Git para el control de versiones. Estoy motivado por resolver
              problemas reales a través de la tecnología y busco mi primera
              oportunidad profesional para aplicar mis conocimientos y aprender
              aún más.
            </p>
          </div>
          <div className="flex flex-col justify-center text-clamp-xs md:pl-24">
            <ul className="space-y-5">
              <li>- Desarrollo de aplicaciones web modernas.</li>
              <li>
                - Aplicación de buenas prácticas en el desarrollo de software.
              </li>
              <li>- Implementación y consumo de APIs.</li>
              <li>- Uso de Git y GitHub para control de versiones.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
