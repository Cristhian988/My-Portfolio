import React from "react";
import img1 from "../../assets/html.png";
import img2 from "../../assets/css.png";
import img3 from "../../assets/js.png";
import img4 from "../../assets/react.png";
import img5 from "../../assets/sass.png";
import img6 from "../../assets/bootstrap.png";
import img7 from "../../assets/git.png";
import img8 from "../../assets/tailwind.png";
import img9 from "../../assets/ts-js.png";
import img10 from "../../assets/nextjs.png";

const StacksLinks = [
  { id: 1, name: "HTML", image: img1 },
  { id: 2, name: "CSS", image: img2 },
  { id: 3, name: "JavaScript", image: img3 },
  { id: 4, name: "React", image: img4 },
  { id: 5, name: "Sass", image: img5 },
  { id: 6, name: "Bootstrap", image: img6 },
  { id: 7, name: "Git", image: img7 },
  { id: 8, name: "Tailwind", image: img8 },
  { id: 9, name: "Typescript", image: img9 },
  { id: 10, name: "Next.js", image: img10 },
];

export default function Stacks() {
  return (
    <div className="bg-black text-white">
      <div className="container py-14">
        <h2 className="text-3xl font-bold">Tecnologías:</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 py-14">
          {StacksLinks.map((link) => {
            return (
              <img
                key={link.id}
                src={link.image}
                alt={link.name}
                className="w-24"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
