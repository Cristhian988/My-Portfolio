import React from "react";

export default function Hero() {
  return (
    <div className="bg-black text-white">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:min-h-[60vh]">
          {/* Text Section */}
          <div className="flex flex-col justify-center  tracking-wide ">
            <p className="text-clamp-md font-medium font-mono">
              Hola, mi nombre es
            </p>
            <h2 className="text-clamp-lg font-black tracking-tight leading-[1.5]">
              Cristhian Escriba
            </h2>
            <h2 className="text-clamp-lg font-black tracking-tight ">
              Y soy desarrollador web
            </h2>
            <p className="w-full md:w-[600px] font-mono text-gray-500 text-clamp-md leading-[1.75] mt-4 mb-7">
              Soy desarrollador Full-stack, resido en Lima, Perú. Actualmente me
              dedico al desarrollo web y me apasiona la creación de aplicaciones
              web excepcionales.
            </p>
            <div>
              <button className="px-6 py-2 rounded-lg border-white border text-white font-mono text-lg">
                Contáctame
              </button>
            </div>
          </div>
          {/* Images Section */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
